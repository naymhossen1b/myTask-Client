import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { loginUser, googleLogin } = UseAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success('Login success!')
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogle = async () => {
    await googleLogin()
    toast.success('Login success!')
    navigate(from, { replace: true });
  }

  return (
    <div className="md:px-96 px-3">
      <form onSubmit={handleLogin}>
        <div>
          <h1 className="text-3xl text-center text-black font-bold py-5">myTask</h1>
          <section className="border rounded-md border-gray-600 p-5 space-y-2">
            <div
            onClick={handleGoogle}
              role="button"
              className="flex items-center gap-2 md:text-2xl font-bold justify-center py-5"
            >
              <FcGoogle /> Continue with Google
            </div>
            <h3 className="text-2xl font-semibold py-4">Sign in</h3>
            <div>
              <label className="font-bold">Email</label>
              <input
                id="hiddenBorderInput"
                type="email"
                name="email"
                className="border-b-2 border-transparent focus:outline-none focus:border-orange-500 border-b-orange-500 w-full py-2"
                placeholder="example@yahoo.com"
              />
            </div>
            <div>
              <label className="font-bold">Password</label>
              <input
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
              New to myTask?
            </div>
            <div className="border border-gray-500 rounded-md px-1 text-center font-medium py-3">
              <Link to="/register">
                <h2>Create your myTask account</h2>
              </Link>
            </div>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
