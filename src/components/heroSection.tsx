import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import bgDesktop from "./../images/bg-hero.webp";
import bgMobile from "./../images/bg-hero-mobile.webp";

import NavBar from "./navBar";

const HeroSection = () => {
  return (
    <div className="bg-[#1D231C] relative lg:h-[800px] h-full">
      <img
        src={bgDesktop}
        className="lg:object-cover lg:h-[800px] absolute top-0 left-0 w-full right-0 hidden lg:block z-[2]"
        alt=""
      />
      <img
        src={bgMobile}
        alt=""
        className="lg:hidden block absolute top-0 h-full w-full"
      />
      <NavBar />
      <section className="pt-[100px] flex mx-auto w-full max-w-7xl lg:justify-between justify-center lg:flex-nowrap flex-wrap h-full ">
        <div className="px-6 lg:pt-0 pt-[100px] z-[2] flex lg:items-start mx-auto items-center text-white justify-center lg:h-full flex-col max-w-[800px]  gap-[36px]">
          <h1 className="font-medium lg:text-5xl text-4xl lg:text-left text-center max-w-[620px] !leading-[1.25]   ">
            Cultive bem-estar e autoconhecimento através da Psicanálise
          </h1>
          <h3 className=" font-medium lg:text-2xl text-lg max-w-[550px] text-center lg:text-left ">
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
