import { NavLink, Outlet } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { FaCalendarAlt, FaHome, FaRegCalendarMinus  } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../Hooks/useCart";

const Dashboard = () => {

    const [cart]= useCart();

  return (
    <div className="w-11/12 mx-auto bg-orange-50">
      <div className="flex gap-5">
        <div className="w-64 min-h-screen bg-orange-300">
          <ul className="menu font-bold uppercase">
            <li>
              <NavLink to="/dashboard/userHome">
                <FaHome />
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <FaCalendarAlt />
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentHistory">
                <CiWallet />
                Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart">
                <IoIosCart />
                My Cart({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addReview">
                <MdRateReview />
                Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myBooking">
                <TbBrandBooking />
                My Booking
              </NavLink>
            </li>
            {/* Second Part */}
            <div className="divider divider-neutral"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaRegCalendarMinus />
                Menu
              </NavLink>
            </li>

          </ul>
        </div>
        <div className="flex-1 p-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
