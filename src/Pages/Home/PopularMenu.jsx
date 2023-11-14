import SectionTitle from "../../Components/SectionTitle";
import UseMenu from "../../Hooks/UseMenu";
import PopularMenesCard from "../Shared/PopularMenesCard";

const PopularMenu = () => {

  const [menus] = UseMenu();

  const popularMenus = menus.filter((itm) => itm.category === "popular");

  return (
    <>
      <section>
        <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {popularMenus.map((menu) => (
            <PopularMenesCard key={menu} menu={menu} />
          ))}
        </div>
        <div className="flex items-center justify-center text-center my-8">
          <button className="px-2 py-3 rounded-b-lg text-xl border-b-4 hover:btn hover:btn-ghost">
            View Full Menu
          </button>
        </div>
      </section>
    </>
  );
};

export default PopularMenu;
