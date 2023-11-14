import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  // console.log(review);

  return (
    <section className="my-8">
      <SectionTitle subHeading={"---What Our Clients Say---"} heading={"TESTIMONIALS"} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((itm) => (
          <SwiperSlide key={itm._id}>
            <div className="m-24 text-center">
              <div className="flex items-center justify-center my-6">
              <Rating style={{ maxWidth: 180 }} value={itm.rating} readOnly />
              </div>
              <p>{itm.details}</p>
              <h1 className="text-3xl font-bold mt-8 text-orange-500">{itm.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
