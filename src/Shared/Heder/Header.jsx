import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logout } = UseAuth();

  // console.log(user);

  const handleLogout = () => {
    return logout()
      .then(() => {})
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="navbar bg-fuchsia-100 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            ></ul>
          </div>
          <a className="font-bold text-xl">myTask</a>
        </div>
        <div className="navbar-end hidden lg:flex gap-12 font-medium">
          <ul className="menu menu-horizontal px-1">
            <nav className="flex gap-5 items-center">
              <Link to="/">Home</Link>
              <Link to="/feature">Feature</Link>
              <Link to="/forTeam">For Team</Link>
              <Link className="border-gray-600 border-r-2 pr-5" to="/pricing">Pricing</Link>
              {user ? (
                <>
                  <button onClick={() => handleLogout()}>
                    <Link>Logout</Link>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                </>
              )}
            </nav>
          </ul>
          <div className="">
            <Link to="dashboardLayout/myTask">
              <button className="bg-fuchsia-800 text-white font-bold border rounded-full px-4 py-2">
                Let’s Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
