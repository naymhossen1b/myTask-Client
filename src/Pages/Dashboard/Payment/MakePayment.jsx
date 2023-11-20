import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";

const MakePayment = () => {
  //TODO: Add Stripe Promise
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_API_KEY);
  // console.log(stripePromise);

  return (
    <>
      <div className="uppercase">
        <SectionTitle heading={"PAYMENT"} />
      </div>
      <section>
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </section>
    </>
  );
};

export default MakePayment;
