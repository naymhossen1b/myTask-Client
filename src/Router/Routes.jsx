import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menus from "../Pages/Menu/Menus";
import Order from "../Pages/Order/Order";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import UserHome from "../Pages/Dashboard/UserHome";
import Reservation from "../Pages/Dashboard/Reservation";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AddReview from "../Pages/Dashboard/AddReview";
import MyBookings from "../Pages/Dashboard/MyBookings";
import AllUsers from "../Pages/Admin/AllUsers";
import AdminHome from "../Pages/Admin/AdminHome";
import AddItems from "../Pages/Admin/AddItems";
import ManageBookings from "../Pages/Admin/ManageBookings";
import ManageItems from "../Pages/Admin/ManageItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menus",
        element: <Menus />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      ///// Users Routes \\\\\

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "addReview",
        element: <AddReview />,
      },
      {
        path: "myBooking",
        element: <MyBookings />,
      },

      ///// Admin Routes \\\\\

      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "addItems",
        element: <AddItems />,
      },
      {
        path: "manageBookings",
        element: <ManageBookings />,
      },
      {
        path: "manageItems",
        element: <ManageItems />,
      },
    ],
  },
]);
