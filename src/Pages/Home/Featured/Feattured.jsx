import SectionTitle from "../../../Components/SectionTitle";

const Feattured = () => {
  return (
    <div className="md:px-16 md:py-16 p-2 bg-slate-800 bg-opacity-60 bg-fixed bg-[url('/public/assets/home/featured.jpg')] ">
      <div>
        <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"} />
      </div>
      <div className="md:flex justify-between items-center pt-5 gap-8">
        <div>
            <img src="../../../../public/assets/home/featured.jpg" alt="" />
        </div>
        <div className="space-y-1 text-white">
          <p className="font-bold">March 20, 2023</p>
          <h1 className="uppercase foob'">WHERE CAN I GET SOME?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere,
            deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="px-2 py-3 rounded-b-lg text-xl border-b-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Feattured;
