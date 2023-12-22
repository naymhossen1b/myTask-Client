import { Link } from "react-router-dom";
import { FaAmazon, FaFacebookSquare, FaLinkedin, FaShareSquare } from "react-icons/fa";
import { FcGoogle, FcBusinessman } from "react-icons/fc";
import { IoMdStats } from "react-icons/io";

const Feature = () => {
  return (
    <div>
      <div className="w-1/2 mx-auto space-y-5 text-center py-24">
        <h1 className="text-6xl font-medium text-black">The team task manager that just works</h1>
        <p className="font-bold text-sm text-gray-600">
          Todoist is the simplest way to keep track of your shared tasks, <br /> projects, and
          deadlines. Period. For teams who don’t have the <br /> time or patience to overcomplicate
          it.
        </p>
        <div className="flex items-center justify-center">
          <Link to="dashboardLayout/myTask">
            <button className="bg-fuchsia-800 text-white text-xl font-bold border rounded-full px-4 py-2">
              Let’s Explore
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src="https://imagizer.imageshack.com/img924/8779/dot1je.jpg" alt="" />
      </div>
      <div className="hidden md:flex items-center justify-between px-5 py-16">
        <div className="space-y-2">
          <p className="uppercase font-medium">over</p>
          <h1 className="text-5xl font-medium">50,000 teams</h1>
          <p className="font-bold">
            trust their projects, productivity,
            <br /> and peace of mind to Todoist.
          </p>
        </div>
        <FaAmazon className="text-7xl text-[#000000]" />
        <FaFacebookSquare className="text-7xl text-[#4267B2]" />
        <FaLinkedin className="text-7xl text-[#0077b5]" />
        <FcGoogle className="text-7xl text-[#]" />
      </div>
      <div className="grid grid-cols-1 md:flex items-center gap-8">
        <div>
            <img src="https://imagizer.imageshack.com/img922/9039/gSXajw.jpg" alt="" />
        </div>
        <div className="space-y-3">
            <h2 className="text-3xl font-medium">Your team’s tasks, files, and discussions</h2>
            <h4 className="font-medium">All neatly organized in one place.</h4>
            <div className="menu space-y-1">
                <p className="flex items-center gap-2"><FcBusinessman /> Plan projects & assign responsibility</p>
                <p className="flex items-center gap-2"><FaShareSquare />Share files & discuss the details</p>
                <p className="flex items-center gap-2"><IoMdStats />Track progress & deliver on time</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
