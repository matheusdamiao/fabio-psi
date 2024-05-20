import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import NavBar from "./navBar";

const HeroSection = () => {
  return (
    <div className="bg-[#1D231C] relative lg:h-[800px] h-full">
      <StaticImage
        src="../images/bg-hero.webp"
        className="lg:object-fill lg:h-[800px] absolute top-0 left-0 right-0 hidden lg:block z-[2]"
        alt=""
      />
      <StaticImage
        src="../images/bg-hero-mobile.webp"
        alt=""
        className="lg:hidden block absolute top-0 h-full"
      />
      <NavBar />
      <section className="lg:pt-[100px] flex mx-auto w-full max-w-7xl lg:justify-between justify-center lg:flex-nowrap flex-wrap h-full ">
        <div className="px-6 lg:pt-0 pt-[100px] flex lg:items-start mx-auto items-center text-white justify-center lg:h-full flex-col max-w-[800px]  gap-[36px]">
          <h1 className="font-medium lg:text-5xl text-4xl lg:text-left text-center max-w-[620px] !leading-[1.25] z-50  ">
            Cultive bem-estar e autoconhecimento através da Psicanálise
          </h1>
          <h3 className="z-[21] font-medium lg:text-2xl text-lg max-w-[550px] text-center lg:text-left ">
            A terapia pode te ajudar a entender e lidar melhor com diversas
            angustias que atrapalham o seu dia-a-dia.
          </h3>
          <button className="bg-[#48664E] text-base px-4 py-3 lg:text-xl z-10  max-w-[352px] w-full">
            Inicie sua jornada
          </button>
          <small>Atendimento Online</small>
        </div>
        <div>
          <StaticImage
            src="../images/fabio-hero-section.webp"
            alt=""
            className="lg:max-w-[644px] px-6 lg:px-0 z-50 "
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
