import React from "react";
import logo from "./../images/logo-escura.svg";

const FooterSection = () => {
  return (
    <div className="bg-[#D9D9D9] w-full h-full ">
      <div className="max-w-7xl w-full mx-auto grid gap-y-10 lg:gap-y-0 grid-cols-1 lg:grid-cols-3 py-[80px] px-6">
        <div className="mx-auto lg:m-0">
          <img src={logo} alt="" width={230} />
        </div>
        <div className="flex flex-col gap-6 pt-4">
          <h4 className="text-[#151F18] font-medium text-lg">Contato</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=555192787808"
                target="_blank"
                className="text-[#302D2D] cursor-pointer"
              >
                (51) 99278-7808
              </a>
            </li>
            <li className="">
              <a href="" className="text-[#302D2D]">
                fabiotsdoc@gmail.com
              </a>
            </li>
            <li className="">
              <a
                href="https://www.instagram.com/fabioepsicanalise"
                target="_blank"
                className="text-[#302D2D]"
              >
                @fabioepsicanalise
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 pt-4">
          <h4 className="text-[#151F18] font-medium text-lg">Site</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/#analise" className="text-[#302D2D]">
                Benefícios
              </a>
            </li>
            <li>
              <a href="/#psicanalise" className="text-[#302D2D]">
                Sobre a Psicanálise
              </a>
            </li>
            <li>
              <a href="/#sobre" className="text-[#302D2D]">
                Sobre o Fábio
              </a>
            </li>
            <li>
              <a href="/#perguntas" className="text-[#302D2D]">
                Perguntas Frequentes
              </a>
            </li>
            <li>
              <a href="/#depoimentos" className="text-[#302D2D]">
                Depoimentos
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 lg:justify-between px-6 max-w-7xl mx-auto py-3">
        <span className="text-[#706B6B]">
          {" "}
          Todos os Direitos Reservados - 2024{" "}
        </span>
        <span className="text-[#706B6B]">Fábio Teixeira - Psicanalista</span>
        <span className="text-[#706B6B] text-[12px]">
          Desenvolvido por{" "}
          <a href="https://matheusdamiao.com.br" target="_blank">
            Matheus Damião
          </a>{" "}
        </span>
      </div>
    </div>
  );
};

export default FooterSection;
