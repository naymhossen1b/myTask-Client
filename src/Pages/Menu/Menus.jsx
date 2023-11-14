import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImage from "../../../public/assets/menu/banner3.jpg"
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle";
import ManueCategory from "./ManueCategory";
import dessertImage from "../../../public/assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../public/assets/menu/pizza-bg.jpg"
import saladImage from "../../../public/assets/menu/salad-bg.jpg"
import soupImage from "../../../public/assets/menu/soup-bg.jpg"

const Menus = () => {

    const [menus] = UseMenu();
    const dessert = menus.filter((itm) => itm.category === "dessert");
    const salad = menus.filter((itm) => itm.category === "salad");
    const pizza = menus.filter((itm) => itm.category === "pizza");
    const soup = menus.filter((itm) => itm.category === "soup");
    const offered = menus.filter((itm) => itm.category === "offered");
    const drinks = menus.filter((itm) => itm.category === "drinks");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            {/* Main category */}
            <Cover img={menuImage} title="OUR MENU" menuDetails="Would you like to try a dish?" />
            <SectionTitle subHeading="---Don't miss---" heading={"TODAY'S OFFER"} />
            {/* Offered menu items */}
            <div className="py-8">
            <ManueCategory items={offered} />
            </div>
            {/* Deserts menu Items */}
            <div className="py-8">
            <ManueCategory items={dessert} title={"desserts"} imag={dessertImage} />
            </div>
            {/* Pizza Items menu */}
            <div className="py-8">
            <ManueCategory items={pizza} title={"pizza"} imag={pizzaImage} />
            </div>
            {/* Salad Items menu */}
            <div className="py-8">
            <ManueCategory items={salad} title={"salad"} imag={saladImage} />
            </div>
            {/* Soup Items menu */}
            <div className="py-8">
            <ManueCategory items={soup} title={"soup"} imag={soupImage} />
            </div>
            {/* Soup Items menu */}
            <div className="py-8">
            <ManueCategory items={drinks} title={"drinks"} imag={soupImage} />
            </div>
        </div>
    );
};

export default Menus;