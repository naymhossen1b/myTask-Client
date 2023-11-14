import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category/Category";
import Feattured from "./Featured/Feattured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <div className="mt-20 mb-20">
        <Category />
      </div>
      <div className="mt-20 mb-20">
        <PopularMenu />
      </div>
      <div className="p-20 bg-black mt-16 mb-20">
        <h1 className="text-4xl font-bold text-center text-white">Call Us: +88 0192345678910</h1>
      </div>
      <Feattured />
      <Testimonials />
    </div>
  );
};

export default Home;
