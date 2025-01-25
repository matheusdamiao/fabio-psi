import React from "react";
import hand from "./../icons/waving-hand.svg";
import lattes from "./../icons/lattes.svg";

interface AboutProps {
  img: string;
}

const AboutSection = (props: AboutProps) => {
  return (
    <div id="sobre" className="w-full h-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1000px] gap-x-[100px] gap-[20px] mx-auto py-[100px] ">
        <div className="flex flex-col lg:order-2 lg:row-span-1 max-w-[450px] self-center px-6 lg:px-0 ">
          <img src={hand} className="w-[57px] rotate-hand " />
          <h2 className="text-3xl lg:text-4xl text-[#151F18] font-semibold pt-4">
            Olá, eu sou o Fábio!
          </h2>
        </div>
        <img
          src={props.img}
          className="lg:order-1 lg:row-span-5  lg:col-span-1 lg:max-h-[850px] px-6 max-h-[450px] mx-auto"
        />
        <p className="lg:order-3 lg:row-span-1 font-medium text-xl text-[#373C38] max-w-[450px] px-6 lg:px-0">
          Sou Psicanalista de Orientação Lacaniana, e apaixonado pelos mistérios
          do ser humano.
          <br />
          <br />
          Para mim, a singularidade do ser humano é o bem mais precioso e
          fascinante.
          <br />
          <br />É através da palavra, que consigo auxiliar muitas pessoas a se
          aproximarem do seu desejo.
        </p>
        <ul className="lg:order-4 lg:row-span-1 text-[#151F18] pt-5 lg:pl-[18px] pl-[40px]  lg:px-0">
          <li className="list-disc">
            Professor de Psicanálise do Instituto Lalettre/SP
          </li>
          <li className="list-disc">Pós-doutor em Educação (PUC/RS)</li>
          <li className="list-disc">
            Pós-doutor em Psicologia Social (U. do Porto/PT)
          </li>
          <li className="list-disc">Doutor em Ética (PUL/IT)</li>
          <li className="list-disc"> Especialista em Psicanálise (PUC/PR)</li>
          <li className="list-disc">Licenciado em Filosofia (USF/SP)</li>
        </ul>
        {/* <a
          href="http://lattes.cnpq.br/1232457035398130"
          target="_blank"
          className="rounded-[9px] lg:order-3 border-[#A4A4A4] border-[1px] gap-3 lg:ml-0 ml-6 px-2 py-2 flex items-center justify-center max-w-[200px] w-full"
        >
          <img src={lattes} alt="" />
          Currículo Lattes
        </a> */}
        {/* <div className="flex flex-col lg:order-5 lg:row-span-1 pt-5 px-6 lg:px-0">
          <h4 className="text-[#373C38] font-medium text-xl">
            Alguns dos meus textos
          </h4>
          <div className="pt-[15px]">
            <p className="text-[#7C827D] text-lg">Titulo do texto 1</p>
            <p className="text-[#7C827D] text-lg">Titulo do texto 2</p>
            <p className="text-[#7C827D] text-lg">Titulo do texto 3</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
