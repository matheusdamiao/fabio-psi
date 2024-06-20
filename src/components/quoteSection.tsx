import React from "react";

const QuoteSection = () => {
  return (
    <div className="bg-[#151F18] flex flex-col items-center justify-center lg:h-[547px] h-[650px]">
      <h3 className="max-w-[900px] text-white mx-auto lg:text-3xl text-lg lg:px-0 px-10 text-center">
        A psicanálise simplifica a vida. Nós atingimos uma nova síntese depois
        da análise. A psicanálise cria uma nova ordem para o labirinto onde
        estão perdidos certos impulsos, e tenta conduzi-los para o lugar ao qual
        pertencem.
      </h3>
      <small className="lg:text-2xl text-lg text-[#A5A5A5] pt-[80px]">
        Sigmund Freud{" "}
      </small>
    </div>
  );
};

export default QuoteSection;
