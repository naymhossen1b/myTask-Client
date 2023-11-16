import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const publicAxios = useAxiosPublic();

  const handleSocial = (social) => {
    social()
      .then((result) => {
        const userInfo = { name: result.user.displayName, email: result.user.email };
        publicAxios
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
            navigate("/");
            toast.success("Your Login successfully");
          })
          .catch(() => toast.error("Login Failed"));
      })
      .catch((error) => {
        console.log(error);
        toast.error("Your Login Failed");
      });
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSocial(googleLogin)} className="btn">
          <FaGoogle className="text-green-300 text-xl" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
