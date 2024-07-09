import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import EffectPanorama from "./dist/effect-panorama.esm";
import { styled } from "styled-components";

function PanoramaSlide() {
  return (
    <PanoramaSlider
      modules={[EffectPanorama, Pagination]}
      effect={"panorama"}
      grabCursor={true}
      loop={true}
      className="mySwiper"
      centeredSlides={true}
      slidesPerView={2.9}
      pagination={true}
      panoramaEffect={{
        depth: 150,
        rotate: 20,
      }}
      breakpoints={{
        480: {
          slidesPerView: 2,
          panoramaEffect: {
            rotate: 35,
            depth: 150,
          },
        },
        640: {
          slidesPerView: 3,
          panoramaEffect: {
            rotate: 30,
            depth: 150,
          },
        },
        1024: {
          slidesPerView: 4,
          panoramaEffect: {
            rotate: 30,
            depth: 200,
          },
        },
        1200: {
          slidesPerView: 4,
          panoramaEffect: {
            rotate: 10,
            depth: 250,
          },
        },
      }}
    >
      <PanoramaSwiper>
        <PanoramaSwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Slide 1"
          />
        </PanoramaSwiperSlide>
        <PanoramaSwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="Slide 2"
          />
        </PanoramaSwiperSlide>
        <PanoramaSwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="Slide 3"
          />
        </PanoramaSwiperSlide>
        <PanoramaSwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="Slide 4"
          />
        </PanoramaSwiperSlide>
        <PanoramaSwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="Slide 5"
          />
        </PanoramaSwiperSlide>
        <PanoramaSwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="Slide 5"
          />
        </PanoramaSwiperSlide>
      </PanoramaSwiper>
    </PanoramaSlider>
  );
}

export default PanoramaSlide;

const PanoramaSlider = styled(Swiper)`
  padding: 48px 0;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const PanoramaSwiper = styled.div`
  width: 100%;
  height: 280px;
`;

const PanoramaSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;
