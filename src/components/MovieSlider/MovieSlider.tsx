"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./MovieSlider.scss";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

function MovieSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={
              "https://files.cinerama.uz/images/banners/2023/09/18/cea956fa-c920-4897-adba-ba8f984357b4.png"
            }
            width={800}
            height={400}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://files.cinerama.uz/images/banners/2023/09/27/3cbbba31-0fd4-4c2f-be62-75d5804bd888.png"
            }
            width={800}
            height={400}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://files.cinerama.uz/images/banners/2023/09/20/133f57be-7ba3-4b75-a93e-9e3b6ef25c17.png"
            }
            width={800}
            height={400}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default MovieSlider;
