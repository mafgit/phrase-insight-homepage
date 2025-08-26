"use client";
import {
  FaBolt,
  FaBookOpen,
  FaBoxesStacked,
  FaBrain,
  FaLanguage,
  FaLaptop,
  FaQuoteRight,
  FaSpellCheck,
  FaWindowRestore,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturesSlider = () => {
  return (
    <div className="w-full rounded-xl mx-auto max-w-[1000px] [container-type:inline-size]">
      <Swiper
        spaceBetween={10}
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
          <div className="opacity-85 scale-[96%] transition-all duration-300 ease-in-out max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaSpellCheck className="text-3xl" />
            <p className="font-semibold">Learn Word Forms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="opacity-85 scale-[96%] transition-all duration-300 ease-in-out max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaBoxesStacked className="text-3xl" />
            <p className="font-semibold">Understand Context</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="opacity-85 scale-[96%] transition-all duration-300 ease-in-out max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaBrain className="text-3xl" />
            <p className="font-semibold">Smart Translations</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="opacity-85 scale-[96%] transition-all duration-300 ease-in-out max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaBookOpen className="text-3xl" />
            <p className="font-semibold">Expand Vocabulary</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="opacity-85 scale-[96%] transition-all duration-300 ease-in-out max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaBolt className="text-3xl" />
            <p className="font-semibold">One-Click Answers</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="opacity-85 scale-[96%] transition-all duration-300 ease-in-out max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaQuoteRight className="text-3xl" />
            <p className="font-semibold ">Real Usage Examples</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="opacity-85 scale-[96%] transition-all duration-300 ease-in-out max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaLaptop className="text-3xl" />
            <p className="font-semibold ">Immersive Learning</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="opacity-85 scale-[96%] transition-all duration-300 ease-in-out max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaWindowRestore className="text-3xl" />
            <p className="font-semibold ">No Tab Switching</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="opacity-85 scale-[96%] transition-all duration-300 ease-in-out max-h-[130px] min-h-[130px] bg-white/20 p-4 rounded-xl flex flex-col gap-4 items-center justify-center">
            <FaLanguage className="text-3xl" />
            <p className="font-semibold ">Grammar Analysis</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturesSlider;
