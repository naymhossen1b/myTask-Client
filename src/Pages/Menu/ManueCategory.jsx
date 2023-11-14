import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import PopularMenesCard from "../Shared/PopularMenesCard";

const ManueCategory = ({items, title, imag}) => {
    return (
        <div>
            {
                title && <Cover img={imag} title={title} menuDetails="Would you like to try a dish?" />
            }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {
          items.map((menu) => (
            <PopularMenesCard key={menu} menu={menu} />
          ))
          }
        </div>
        <Link to={`/order/${title}`} className="flex justify-center items-center py-8">
        <button className="btn rounded-md font-bold text-xl flex items-center justify-center btn-primary">Order Now</button>
        </Link>
        </div>
    );
};

export default ManueCategory;