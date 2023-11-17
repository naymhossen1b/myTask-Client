import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { BsFillCartCheckFill } from 'react-icons/bs';
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const [cart, refetch] = useCart();

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
        refetch();
      })
      .catch((error) => console.log(error));
  };

  const navOption = (
    <>
      <li className="text-xl font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-xl font-bold">
        <Link to="/menus">Our Menu</Link>
      </li>
      <li className="text-xl font-bold">
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="text-2xl font-bold flex items-center gap-1">
            <BsFillCartCheckFill />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogOut} className="btn font-bold text-xl border-b-4 btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li className="text-xl font-bold">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-25 bg-black font-semibold text-white w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
