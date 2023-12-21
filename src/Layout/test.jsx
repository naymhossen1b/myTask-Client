import { NavLink, Outlet } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import {
  FaBookDead,
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaList,
  FaRegCalendarMinus,
  FaTachometerAlt,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex gap-5">
        <div className="w-64 min-h-screen bg-orange-300">
          <ul className="menu font-bold uppercase">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaTachometerAlt />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList />
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageBookings">
                    <FaBookDead />
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">
                    <FaUsers />
                    ALl Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}

            {/* Second Part Shared Links */}
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
            <li>
              <NavLink to="/order/contact">
                <FaEnvelope />
                Contact
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