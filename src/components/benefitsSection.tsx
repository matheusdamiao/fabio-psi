import React from "react";
import bg from "./../images/foto-bussola.webp";
import greenCheck from "./../icons/green-check.svg";

const BenefitsSection = () => {
  return (
    <div id="analise" className="w-full mx-auto relative h-full lg:h-[701px]">
      <img
        src={bg}
        className="absolute w-full top-0 left-0 right-0 mx-auto h-full object-cover object-center lg:object-left"
      />
      <span className="bg-[linear-gradient(263deg,rgba(72,102,78,0.36)_23.41%,rgba(0,0,0,0.85)_79.01%)] absolute h-full w-full top-0"></span>
      <div className="flex flex-col max-w-7xl mx-auto w-full h-full py-20">
        <h2 className="px-6  text-3xl lg:text-4xl text-white font-semibold !leading-tight max-w-[847px] z-30">
          A angústia pode se transformar em uma bússola poderosa
        </h2>
        <div className="flex flex-col py-[66px] gap-[40px]">
          <div className=" px-6 flex items-center z-40 gap-5 ">
            <img
              src={greenCheck}
              alt=""
              width={41.45}
              height={30.29}
              className="flex-0 flex-grow-0 flex-shrink-0"
            />
            <p className="text-white font-medium lg:text-xl text-base  ">
              Deixe vir à tona os seus sentimentos e emoções
            </p>
          </div>
          <div className="px-6 flex items-center z-40 gap-5 ">
            <img
              src={greenCheck}
              alt=""
              width={41.45}
              height={30.29}
              className="flex-0 flex-grow-0 flex-shrink-0"
            />
            <p className="text-white font-medium lg:text-xl text-base   ">
              Descubra como somos afetados pelo outro e pelo mundo
            </p>
          </div>
          <div className="px-6 flex items-center z-40 gap-5 ">
            <img
              src={greenCheck}
              alt=""
              width={41.45}
              height={30.29}
              className="flex-0 flex-grow-0 flex-shrink-0"
            />
            <p className="text-white font-medium lg:text-xl text-base  ">
              Trabalhe as deformações e repressões dos afetos
            </p>
          </div>
          <div className="px-6 flex items-center z-40 gap-5 ">
            <img
              src={greenCheck}
              alt=""
              width={41.45}
              height={30.29}
              className="flex-0 flex-grow-0 flex-shrink-0"
            />
            <p className="text-white font-medium lg:text-xl text-base   ">
              Elabore conflitos e traumas
            </p>
          </div>
          <div className="px-6 flex items-center z-40 gap-5 ">
            <img
              src={greenCheck}
              alt=""
              width={41.45}
              height={30.29}
              className="flex-0 flex-grow-0 flex-shrink-0"
            />
            <p className="text-white font-medium lg:text-xl text-base  ">
              Aprenda a criar melhores conexões afetivas: “Amar para não
              adoecer”. (Freud)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

// linear-gradient(263deg, rgba(72, 102, 78, 0.36) 23.41%, rgba(0, 0, 0, 0.85) 79.01%);
