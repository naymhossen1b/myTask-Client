import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useCart from "../../../Hooks/useCart";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosLock = useAxios();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Create PaymentIntent as soon as the page loads
  useEffect(() => {
    if (totalPrice > 0) {
      axiosLock
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [axiosLock, totalPrice]);

  //Make Payment From Handle Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast.error(error.message);
      // console.log("[error]", error);
    } else {
      toast.success("Payment Success");
      console.log("[PaymentMethod]", paymentMethod);
    }

    /// Confirmed Payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "anonymous",
          email: user?.email || "anonymous",
        },
      },
    });

    if (confirmError) {
      console.log("confirmError", confirmError);
    } else {
      console.log("PaymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("tran Id", paymentIntent.id);
        toast.success(paymentIntent.id);

        // Sent user payment data site to server
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price: totalPrice,
          date: new Date(),
          cartIds: cart?.map((item) => item._id),
          menuItemIds: cart?.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosLock?.post("/payments", payment);
        refetch();
        console.log(res.data);
        navigate("/dashboard/paymentHistory");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="btn hover:bg-green-500 text-xl w-6/12 mx-auto bg-purple-800 text-white font-bold rounded-xl "
          >
            Pay
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Checkout;
