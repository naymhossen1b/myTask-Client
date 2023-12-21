import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex gap-5 bg-orange-50">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu font-bold uppercase space-y-3 py-24">
          <li>
            {/* <NavLink to="/dashboardLayout/dashboard">Dashboard</NavLink> */}
          </li>
          <li>
            <NavLink to="/dashboardLayout/myTask">Task</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 py-16 px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
