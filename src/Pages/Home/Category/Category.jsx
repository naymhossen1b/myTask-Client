import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../../public/assets/home/slide1.jpg";
import slide2 from "../../../../public/assets/home/slide1.jpg";
import slide3 from "../../../../public/assets/home/slide3.jpg";
import slide4 from "../../../../public/assets/home/slide4.jpg";
import slide5 from "../../../../public/assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle";


const Category = () => {
  return (
    <>
      <section>
        <SectionTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"ORDER ONLINE"} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="-mt-20 text-4xl font-bold text-black text-center uppercase">salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="-mt-20 text-4xl font-bold text-black text-center uppercase">pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="-mt-20 text-4xl font-bold text-black text-center uppercase">soups</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="-mt-20 text-4xl font-bold text-black text-center uppercase">desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="-mt-20 text-4xl font-bold text-black text-center uppercase">salads</h1>
        </SwiperSlide>
      </Swiper>
      </section>
    </>
  );
};

export default Category;
