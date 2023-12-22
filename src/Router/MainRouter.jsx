import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyTask from "../Dashboard/MyTask";
import DashboardLayout from "../Layout/DashboardLayout";
import ForTeam from "../Pages/ForTeam/ForTeam";
import Feature from "../Pages/Featurs/Feature";
import Pricing from "../Pages/Pricing/Pricing";
import Error from "../Components/Error";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forTeam",
        element: <ForTeam />,
      },
      {
        path: "/feature",
        element: <Feature />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/dashboardLayout",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboardLayout",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "myTask",
        element: (
          <PrivateRoute>
            <MyTask />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
