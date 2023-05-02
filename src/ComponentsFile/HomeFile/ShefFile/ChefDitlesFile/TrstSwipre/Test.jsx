// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Test.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Test({ foodDatas }) {
    // console.log(foodDatas)
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    foodDatas.map((d, index) => <SwiperSlide key={index} >
                        <img src={d.recipe.image} />
                    </SwiperSlide>)
                }


            </Swiper>
        </>
    );
}
