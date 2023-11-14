import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const location = useLocation();
  const loginNoHeaderFooter = location.pathname.includes("login");
  const signUpNoHeaderFooter = location.pathname.includes("signUp");

  return (
    <div className="w-11/12 mx-auto">
      {loginNoHeaderFooter || signUpNoHeaderFooter || <Navbar />}
      <Outlet />
      {loginNoHeaderFooter || signUpNoHeaderFooter || <Footer />}
      <Toaster />
    </div>
  );
};

export default MainLayout;
