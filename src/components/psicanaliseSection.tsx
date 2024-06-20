import React from "react";
import health from "./../icons/health.svg";
import lightbulb from "./../icons/lightbulb-bolt.svg";
import calendar from "./../icons/calendar.svg";
import chat from "./../icons/chat-square-check.svg";

const PsicanaliseSection = () => {
  return (
    <div id="psicanalise" className="w-full mx-auto relative h-full ">
      <div className="flex flex-col max-w-7xl mx-auto w-full h-full py-20">
        <h2 className="px-6 text-3xl lg:text-4xl text-[#151F18] font-semibold ">
          Psicanálise, <br /> da fala ao profundo inconsciente
        </h2>
        <h3 className="px-6 text-base lg:text-xl text-[#373C38] font-medium max-w-[700px] pt-[33px] text-justify">
          A prática psicanalítica convida a pessoa a uma fala livre com o
          objetivo de adentrar nas emoções e memórias inconscientes que
          frequentemente causam angústia e sofrimento. Para isso, o psicanalista
          é um companheiro desta viagem fascinante rumo ao inconsciente.
        </h3>
        <div className="flex flex-wrap items-center justify-center py-[66px] gap-12 lg:gap-6">
          <div className="px-6 flex flex-col items-center gap-5 lg:max-w-[300px] w-full ">
            <img
              src={chat}
              alt=""
              width={65}
              height={65}
              className="flex-0 flex-grow-0 flex-shrink-0"
            />
            <h4 className="text-[#151F18] font-semibold text-xl ">
              Zero julgamento
            </h4>
            <p className="text-[#373C38] text-center">
              Expresse livremente seus pensamentos, sentimentos, sonhos e
              experiências.{" "}
            </p>
          </div>

          <div className="lg:px-0 px-6 flex flex-col items-center gap-5 lg:max-w-[300px] w-full ">
            <img
              src={health}
              alt=""
              width={65}
              height={65}
              className="flex-0 flex-grow-0 flex-shrink-0"
            />
            <h4 className="text-[#151F18] font-semibold text-xl">
              Ambiente acolhedor
            </h4>
            <p className="text-[#373C38] text-center">
              A prática analítica proporciona um ambiente acolhedor e seguro
              para você se sentir bem e à vontade.
            </p>
          </div>

          <div className="lg:px-0 px-6 flex flex-col items-center gap-5 lg:max-w-[300px] w-full ">
            <img
              src={lightbulb}
              alt=""
              width={65}
              height={65}
              className="flex-0 flex-grow-0 flex-shrink-0"
            />
            <h4 className="text-[#151F18] font-semibold text-xl">
              Insights e reflexão
            </h4>
            <p className="text-[#373C38] text-center">
              Cada sessão é um novo passo rumo ao autoconhecimento e a uma
              compreensão dos seus padrões e sentimentos
            </p>
          </div>

          <div className="lg:px-0 px-6 flex flex-col items-center gap-5 lg:max-w-[300px] w-full ">
            <img
              src={calendar}
              alt=""
              width={65}
              height={65}
              className="flex-0 flex-grow-0 flex-shrink-0"
            />
            <h4 className="text-[#151F18] font-semibold text-xl">
              Sessões regulares
            </h4>
            <p className="text-[#373C38] text-center">
              A análise é um processo gradual que envolve explorar questões
              profundas. Deixe-se conduzir por esta experiência
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsicanaliseSection;
