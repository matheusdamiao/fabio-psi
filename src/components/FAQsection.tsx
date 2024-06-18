import React, { useRef, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import autoAnimate from "@formkit/auto-animate";
import dialog from "./../icons/dialog.svg";

const FAQsection = () => {
  const [isOpen, setIsOpen] = useState("");

  const [animationParent] = useAutoAnimate();

  const parent = useRef(null);

  React.useEffect(() => {
    parent.current && autoAnimate(parent.current);
    setIsOpen("Como inicia uma análise?");
  }, [parent]);

  const questions = [
    {
      question: "Como inicia uma análise?",
      answer:
        "É sempre bom, segundo Freud, ter um período de experiência. Neste momento, pede-se que o analisando fale de sua vida, das suas relações e do sofrimento que o fez procurar ajuda. Na minha prática, eu prefiro marcar uma consulta, sem compromisso, para escutar o que a pessoa tem a dizer e poder tirar as suas dúvidas. Se houver a decisão pela continuidade, poderemos alinhar um horário fixo e combinar valores.",
    },

    {
      question: "Qual a regra fundamental da Psicanálise?",
      answer:
        "Que a pessoa fale tudo o que viver à sua mente sem exercer nenhum tipo de censura, mesmo que vá passando por vários assuntos, silêncios, pular de um assunto para o outro. Assim, pode-se colher algo do inconsciente, material oculto que frequentemente retorna por meio do sintoma provocando sofrimento",
    },

    {
      question:
        "A Psicanálise pode ser eficaz nos quadros depressivos, de stress, ansiedade e outros problemas emocionais?",
      answer:
        "Para a Psicanálise o sintoma pode ser decifrado, interpretado. Essa prática ajuda a pessoa a se tornar consciente daquilo que está oculto e isso permite trabalhar as questões de forma mais profunda, superando os desafios emocionais e compreendendo a natureza dos padrões repetitivos que causam mal-estar. Enfim, você não precisa enfrentar essas dificuldades sozinho, uma aliança terapêutica é possível!",
    },
  ];

  return (
    <div
      id="perguntas"
      className="max-w-7xl mx-auto w-full py-[100px] lg:py-[150px]"
    >
      <div className="flex items-center justify-center flex-wrap py-6 lg:flex-row flex-col gap-4">
        <img src={dialog} alt="" width={45} height={45} />
        <h2 className="px-6  text-3xl lg:text-5xl text-[#151F18] text-center font-medium !leading-tight max-w-[847px] z-30">
          Dúvidas Frequentes
        </h2>
      </div>
      <div className="flex flex-col gap-[20px] pt-[20px] px-6">
        {questions.map((data) => {
          return (
            <div
              className={`${
                isOpen === data.question ? "bg-[#C2CFB5]" : "bg-[#D9D9D9]"
              } px-6 cursor-pointer py-4 rounded-[9px]`}
              key={data.question}
              ref={animationParent}
              onClick={() => setIsOpen(data.question)}
            >
              <h4
                className={`${
                  isOpen === data.question && "text-[#03191E]"
                }  text-xl`}
              >
                {data.question}
              </h4>
              {isOpen === data.question && (
                <p className="font-normal pt-[30px] text-[#03191E]">
                  {data.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQsection;
