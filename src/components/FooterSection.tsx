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
          <ul className="flex flex-col gap-1">
            <li>
              <a href="" className="text-[#302D2D]">
                55 11 939-39393
              </a>
            </li>
            <li className="">
              <a href="" className="text-[#302D2D]">
                contato@fabioteixeira.com.br
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 pt-4">
          <h4 className="text-[#151F18] font-medium text-lg">Site</h4>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="" className="text-[#302D2D]">
                Benefícios
              </a>
            </li>
            <li>
              <a href="" className="text-[#302D2D]">
                Sobre a Psicanálise
              </a>
            </li>
            <li>
              <a href="" className="text-[#302D2D]">
                Sobre o Fábio
              </a>
            </li>
            <li>
              <a href="" className="text-[#302D2D]">
                Perguntas Frequentes
              </a>
            </li>
            <li>
              <a href="" className="text-[#302D2D]">
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
