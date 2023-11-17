/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import useAuth from "../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  // const [isDisabled, setIsDisabled] = useState(true);
  const captchaRef = useRef();

  const navigate = useNavigate();
  const location= useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useAuth();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        console.log(res);
        navigate(from, {replace: true});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleValidCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      // setIsDisabled(false);
      toast("Captcha Matched");
    } else {
      // setIsDisabled(true);
      toast("Captcha Does Not Match");
    }
  };

  return (
    <div className="hero min-h-screen md:px-56 bg-base-200">
      <div className="hero-content grid lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="text"
                ref={captchaRef}
                placeholder="Type Your Captcha"
                className="input input-bordered"
                // required
              />
              <button
                onClick={handleValidCaptcha}
                className="btn btn-outline btn-success w-full my-2 btn-xs"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                // disabled={isDisabled}
                type="submit"
                value="Login"
                className="btn btn-primary"
              />
              <div className="my-3">
                <small>Don't Have An account</small>
                <Link to="/signUp" className="text-center font-bold text-red-400 underline">
                  Create an Account
                </Link>
              </div>
              <div className="divider divider-neutral">or</div>
              <div className="flex justify-center">
              <SocialLogin />
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
