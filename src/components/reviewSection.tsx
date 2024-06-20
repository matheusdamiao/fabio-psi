import React, { useEffect } from "react";
import google from "./../icons/google.svg";
import star from "./../icons/star.svg";
import quote from "./../icons/quote.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import data from "./../utils/clientsReview.json";
import "./../styles/global.css";

type ReviewType = {
  nome: string;
  depoimento: string;
};

const FiveStars = () => {
  return (
    <div className="flex gap-[12px] self-center">
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div
      id="depoimentos"
      className="w-full h-full flex flex-col items-center justify-center pt-[80px]"
    >
      <h2 className="px-6  text-3xl lg:text-4xl  text-[#151F18] text-center font-semibold !leading-tight max-w-[847px] z-30">
        O que meus pacientes dizem
      </h2>
      <div className="flex flex-col items-center justify-center gap-3 pt-6">
        <div className="flex gap-3 items-center">
          <img src={google} alt="" width={32} height={32} />
          <p className="text-[10px] lg:text-xs text-[#373C38]">
            Avaliação Google
          </p>
        </div>
        <h3 className="font-semibold text-[#606A62] text-lg lg:text-2xl">
          Psicanalista - Fábio Teixeira
        </h3>
        <div className="flex gap-[10px]">
          <p className="font-medium text-[#616863] text-2xl lg:text-3xl">5,0</p>
          <FiveStars />
        </div>
        <p className="text-[10px] lg:text-xs text-[#616863] font-medium">
          17 comentários
        </p>
      </div>
      <div className="lg:py-[100px] py-[50px]  gap-10 px-6 max-w-7xl w-full lg:h-[600px]">
        <Swiper
          loop={true}
          // freeMode={true}
          speed={10000}
          effect="slide"
          modules={[Autoplay, Navigation]}
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1000: {
              slidesPerView: 2.5,
              spaceBetween: 200,
            },
          }}
          autoplay={{
            delay: 1,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            waitForTransition: false,
            stopOnLastSlide: false,
          }}
          // navigation={true}
        >
          {data.data.map((data: ReviewType) => {
            return (
              <SwiperSlide
                key={data.nome}
                className="mx-6 lg:mx-0 !w-full sm:!w-[400px]"
              >
                <div className="bg-[#ECECEC] h-[500px] lg:h-[400px] w-full sm:w-[400px] lg:w-[487px] px-6 rounded-[8px] flex flex-col justify-between lg:px-[40px] py-[30px]">
                  <img src={quote} alt="" width={59} height={59} />
                  <p className="text-sm">{data.depoimento}</p>
                  <div className="flex justify-between">
                    <p className="text-[#7C827D]">{data.nome}</p>
                    <FiveStars />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
