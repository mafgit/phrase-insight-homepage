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
            <p className="text-2xl">🚀</p>
            <p className="font-semibold">Learn Word Forms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <p className="text-2xl">🌍</p>
            <p className="font-semibold">Learn Context</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <p className="text-2xl">✅</p>
            <p className="font-semibold">Get Accurate Translations</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <p className="text-2xl">📚</p>
            <p className="font-semibold">Expand Vocabulary</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <p className="text-2xl">⚡</p>
            <p className="font-semibold">Get One-Click Answers</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <p className="text-2xl">✍️</p>
            <p className="font-semibold">Get Real Examples</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturesSlider;
