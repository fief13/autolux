import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//images
import swiper1 from "../assets/images/swiper-1.jpg";
import swiper2 from "../assets/images/swiper-2.jpg";
import swiper3 from "../assets/images/swiper-3.jpg";
import swiper4 from "../assets/images/swiper-4.jpg";
import swiper5 from "../assets/images/swiper-5.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={swiper1} alt="img1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiper2} alt="img2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiper3} alt="img3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiper4} alt="img4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiper5} alt="img5" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Home;
