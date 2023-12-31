import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Test.css";

import { EffectCoverflow, Pagination } from "swiper";
import { useEffect, useState } from "react";

export default function Test() {
    const [foodDatas, setFoodDatas] = useState([])
    useEffect(()=>{
        fetch("https://assignment-ten-server-fozlerabbi1.vercel.app/allFoods")
        .then(res=> res.json())
        .then(data => setFoodDatas(data))
    }, [])
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
                    foodDatas?.map((d, index) => <SwiperSlide key={index} >
                        <img src={d.recipe.image} />
                    </SwiperSlide>)
                }


            </Swiper>
        </>
    );
}
