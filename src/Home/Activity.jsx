import { FaMicrosoft, FaAmazon } from "react-icons/fa";
import { TbBrandDisney } from "react-icons/tb";
import { SiNetflix } from "react-icons/si";
import { GiDorsalScales } from "react-icons/gi";

const Activity = () => {
  return (
    <div className="space-y-12 py-20">
      <h3 className="text-center font-bold">
        30 million+ people and teams trust their sanity and productivity to myTask
      </h3>
      <div className="flex items-center justify-evenly text-4xl md:text-6xl">
        <FaMicrosoft className="text-[#2b579a]" />
        <TbBrandDisney className="text-[#393e8f]" />
        <FaAmazon className="text-[#ff9900]" />
        <SiNetflix className="text-[#E50914]" />
        <GiDorsalScales className="text-green-600" />
      </div>
    </div>
  );
};

export default Activity;
