import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Heder/Header";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="">
            <Header />
            <div className="min-h-screen">
            <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default MainLayout;