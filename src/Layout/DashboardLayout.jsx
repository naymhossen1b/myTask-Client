import { NavLink, Outlet } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineMoveToInbox, MdCalendarToday } from "react-icons/md";
import { FaCalendarCheck, FaHome } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="flex gap-5 bg-orange-50">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu font-bold uppercase space-y-3 py-24">
          <li>
            <NavLink to="/dashboardLayout/myTask"> <IoAddCircleOutline />Add Task</NavLink>
          </li>
          <li>
            <NavLink to="/dashboardLayout/inbox"><MdOutlineMoveToInbox />Inbox</NavLink>
          </li>
          <li>
            <NavLink to="/dashboardLayout/today"><MdCalendarToday />Today</NavLink>
          </li>
          <li>
            <NavLink to="/dashboardLayout/upComing"><FaCalendarCheck />Upcoming</NavLink>
          </li>
          <li>
            <NavLink to="/dashboardLayout/task"><FaCalendarCheck />Task</NavLink>
          </li>
          <li>
            <NavLink to="/"><FaHome />Home</NavLink>
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
