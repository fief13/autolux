import React, { useRef, useState } from "react";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

//images
import swiper1 from "../assets/images/swiper-1.jpg";
import swiper2 from "../assets/images/swiper-2.jpg";
import swiper3 from "../assets/images/swiper-3.jpg";
import swiper4 from "../assets/images/swiper-4.jpg";
import swiper5 from "../assets/images/swiper-5.jpg";


const Home = () => {
  return (
  <section className="home">

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
          <img src={swiper1} alt="swiper1" />
          </SwiperSlide>
        <SwiperSlide><img src={swiper2} alt="swiper1" /></SwiperSlide>
        <SwiperSlide><img src={swiper3} alt="swiper1" /></SwiperSlide>
        <SwiperSlide><img src={swiper4} alt="swiper1" /></SwiperSlide>
        <SwiperSlide><img src={swiper5} alt="swiper1" /></SwiperSlide>
        
      </Swiper>
 
      </div>
  
  </section>
  )
}

export default Home