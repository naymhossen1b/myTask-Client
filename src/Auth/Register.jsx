import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SecureAxios from "../Hooks/SecureAxios";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../Hooks/useAuth";

const Register = () => {
  const { createUser, updateUser, googleLogin } = UseAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUser(data.displayName, data.photoURL);

        const userInfo = { name: data.name, email: data.email };

        SecureAxios.post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              toast.success("User created successfully");
              reset();
              navigate("/");
            }
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogle = async () => {
    await googleLogin();
    toast.success("Login success!");
    navigate("/");
  };

  return (
    <div className="px-96">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="text-3xl text-center text-black font-bold py-5">myTask</h1>
          <section className="border rounded-md border-gray-600 p-5 space-y-2">
            <div
              onClick={handleGoogle}
              role="button"
              className="flex items-center gap-2 text-2xl font-bold justify-center py-8"
            >
              <FcGoogle /> Continue with Google
            </div>
            <h3 className="text-2xl font-semibold py-4">Create an Account</h3>
            <div>
              <label className="font-bold">Your Name</label>
              <input
                {...register("name")}
                id="hiddenBorderInput"
                type="text"
                name="name"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="first & last name.."
              />
            </div>
            <div>
              <label className="font-bold">Your Email</label>
              <input
                {...register("email")}
                id="hiddenBorderInput"
                type="email"
                name="email"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="example@yahoo.com"
              />
            </div>
            <div>
              <label className="font-bold">Your Password</label>
              <input
                {...register("password")}
                id="hiddenBorderInput"
                type="password"
                name="password"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="**********"
              />
            </div>
            <div className="flex justify-center text-center items-center py-4">
              <button
                type="submit"
                className="border rounded-full bg-orange-600 text-white px-2 py-1 w-full mx-auto hover:text-green-600 font-bold text-xl"
              >
                Continue
              </button>
            </div>
          </section>
          <div>
            <div className="divider divider-warning font-medium text-sm text-gray-400">
              Already have a account?
            </div>
            <div className="border border-gray-500 rounded-md px-1 text-center font-medium py-3">
              <Link to="/login">
                <h2>Login your myTask account</h2>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
