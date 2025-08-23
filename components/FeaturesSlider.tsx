"use client";
import { FaMountainCity, FaRocket, FaSpellCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturesSlider = () => {
  return (
    <div className="w-full rounded-xl mx-auto max-w-[1000px] [container-type:inline-size]">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Mousewheel, Autoplay, Pagination]}
        mousewheel={{
          enabled: true,
          forceToAxis: true,
        }}
      >
        <SwiperSlide className="">
          <div className="max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaRocket className="text-orange-400 text-3xl" />
            <p className="font-semibold">Get Singular, Plural, etc</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaSpellCheck className="text-red-400 text-3xl" />
            <p className="font-semibold">Get Verb Forms and Tenses</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaMountainCity className="text-purple-400 text-3xl" />
            <p className="font-semibold">Get Contextual Explanations</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaMountainCity className="text-blue-400 text-3xl" />
            <p className="font-semibold">Get Examples</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaMountainCity className="text-green-400 text-3xl" />
            <p className="font-semibold">Get Grammar Analysis</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturesSlider;
