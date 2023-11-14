import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isAxios = useAxios();
  const [, refetch] = useCart();

  const handleFoodCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      isAxios.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        toast.success(`${name} Added The Cart`);
        refetch();
      });
    } else {
      Swal.fire({
        title: "Yoe are not log in!",
        text: "Login and add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Place, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="bg-slate-700 text-white font-bold absolute right-0 p-2 rounded-md mr-8 top-9">
          {price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={handleFoodCart} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
