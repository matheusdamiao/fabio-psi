import React from "react";

const ChallengesSection = () => {
  const cards = [
    <p
      key="1"
      className="px-8 py-6 stroke-[#48664E] rounded-[26px] border-[1px] max-w-[460px] transition-colors duration-700 hover:bg-[#48664E] text-[#7A857D] hover:text-white"
    >
      A <b>angústia</b> pode ser um labirinto, mas também pode ser uma bússola.
    </p>,

    // <p
    //   key="3"
    //   className="px-8 py-6 stroke-[#48664E] rounded-[26px] border-[1px] lg:max-w-[350px] transition-colors duration-700 hover:bg-[#48664E] text-[#7A857D] hover:text-white"
    // >
    //   Transforme a <b>solidão</b> em uma jornada de autodescoberta e conexão
    //   emocional
    // </p>,
    <p
      key="2"
      className="px-8 py-6 stroke-[#48664E] rounded-[26px] border-[1px] lg:max-w-[550px] transition-colors duration-700 hover:bg-[#48664E] text-[#7A857D] hover:text-white"
    >
      A Psicanálise ajuda a identificar a origem dos{" "}
      <b> sentimentos ansiosos </b> que vão além do comportamento.
    </p>,
    <p
      key="3"
      className="px-8 py-6 stroke-[#48664E] rounded-[26px] border-[1px] max-w-[450px] transition-colors duration-700 hover:bg-[#48664E] text-[#7A857D] hover:text-white"
    >
      Permita <b> vivenciar a tristeza </b> como caminho rumo à autonomia e à
      mudança.
    </p>,
    <p
      key="4"
      className="px-8 py-6 stroke-[#48664E] rounded-[26px] border-[1px] max-w-[450px] transition-colors duration-700 hover:bg-[#48664E] text-[#7A857D] hover:text-white"
    >
      A análise pode ajudar a reconhecer os padrões repetitivos que impactam a
      sua <b>saúde mental</b>
    </p>,
    <p
      key="5"
      className="px-8 py-6 stroke-[#48664E] rounded-[26px] border-[1px] lg:max-w-[450px] transition-colors duration-700 hover:bg-[#48664E] text-[#7A857D] hover:text-white"
    >
      Atravesse as <b>adversidades</b> enquanto encontra conforto e apoio no
      processo analítico.
    </p>,
    // <p
    //   key="7"
    //   className="px-8 py-6 stroke-[#48664E] rounded-[26px] border-[1px] max-w-[500px] transition-colors duration-700 hover:bg-[#48664E] text-[#7A857D] hover:text-white"
    // >
    //   Honre seu <b>luto</b> enquanto encontra conforto e apoio na terapia.
    // </p>,
  ];

  return (
    <div className="max-w-7xl w-full mx-auto my-[100px]">
      <h2 className="px-6 text-3xl lg:text-4xl text-[#151F18] font-semibold text-center">
        Como a psicanálise pode ajudar a transformar sua vida?
      </h2>
      <h3 className=" px-6 text-lg lg:text-2xl text-[#373C38] font-medium text-center max-w-[700px] mx-auto pt-[33px]">
        No mundo atual são muitas as ocasiões de mal-estar. A análise pode
        ajudar a retomar as rédeas da sua vida.
      </h3>
      <div className="px-6 lg:px-0 py-16 flex flex-wrap gap-7 items-center justify-center">
        {cards.map((card) => {
          return card;
        })}
      </div>
    </div>
  );
};

export default ChallengesSection;
