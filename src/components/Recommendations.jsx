import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Recommendations = () => {
  const props = {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-testi-swiper-next",
      prevEl: ".art-testi-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div className="container-fluid">
      {/* row */}
      <div className="row">
        {/* col */}
        <div className="col-lg-12">
          {/* section title */}
          <div className="art-section-title">
            {/* title frame */}
            <div className="art-title-frame">
              {/* title */}
              <h4>Recommendations</h4>
            </div>
            {/* title frame end */}
          </div>
          {/* section title end */}
        </div>
        {/* col end */}

        {/* col */}
        <div className="col-lg-12">
          {/* slider container */}
          <div
            className="swiper-container art-testimonial-slider"
            style={{ overflow: "visible" }}
          >
            {/* slider wrapper */}
            <div className="swiper-wrapper">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                {...props}
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <div className="art-slider-nav art-testi-swiper-prev">
                  <i className="fas fa-chevron-left"></i>
                </div>
                {/* next */}
                <div className="art-slider-nav art-testi-swiper-next">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </Swiper>
            </div>
            {/* slider wrapper end */}
          </div>
          {/* slider container end */}
        </div>
        {/* col end */}

        {/* col */}
        <div className="col-lg-12">
          {/* slider navigation */}
          <div className="art-slider-navigation">
            {/* left side */}
            <div className="art-sn-left">
              {/* slider pagination */}
              <div className="swiper-pagination"></div>
            </div>
            {/* left side end */}

            {/* right side */}
            <div className="art-sn-right">
              {/* slider navigation */}
              <div className="art-slider-nav-frame">{/* prev */}</div>
              {/* slider navigation */}
            </div>
            {/* right side end */}
          </div>
          {/* slider navigation end */}
        </div>
        {/* col end */}
      </div>
      {/* row end */}
    </div>
  );
};

export default Recommendations;
