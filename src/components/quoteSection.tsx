import React from "react";

const QuoteSection = () => {
  return (
    <div className="bg-[#151F18] flex flex-col items-center justify-center lg:h-[547px] h-[650px]">
      <h3 className="max-w-[900px] text-white mx-auto lg:text-3xl text-lg lg:px-0 px-10 text-center">
        A psicanálise simplifica a vida. Depois de analisarmos, conseguimos uma
        nova síntese. A psicanálise reorganiza o labirinto de impulsos dispersos
        e tenta encaixá-los na meada a que pertencem.{" "}
      </h3>
      <small className="lg:text-2xl text-lg text-[#A5A5A5] pt-[80px]">
        Sigmund Freud{" "}
      </small>
    </div>
  );
};

export default QuoteSection;
