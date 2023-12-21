import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <img className="" src="/public/3900527.jpg" alt="" />
      </div>
      <div className="w-1/2 space-y-5">
        <h1 className="text-6xl font-bold text-center">
          Organize your work <br /> and life, finally.
        </h1>
        <p className="font-medium text-center text-gray-600">
          Become focused, organized, and calm with myTask. The world’s <br />
          #1 task manager and to-do list app.
        </p>
        <div className="flex items-center justify-center">
          <Link to="dashboardLayout/myTask">
            <button className="bg-fuchsia-800 text-white text-xl font-bold border rounded-full px-4 py-2">
              Let’s Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
