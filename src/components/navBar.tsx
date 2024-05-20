import React, { useEffect, useState } from "react";
import useWindowDimensions from "./../utils/useWindowDimension";
import { StaticImage } from "gatsby-plugin-image";

const NavBar = () => {
  const size = useWindowDimensions();
  const [windowHeight, setWindowHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (size !== undefined) {
      setWindowHeight(size.scrollY);
      if (size?.width > 1000) {
        setIsOpen(false);
      }
    }
  }, [size]);

  return (
    <div className="bg-transparent absolute top-0 w-full h-24 lg:h-32 flex items-center justify-center flex-col pt-4 px-6 z-50">
      <div className=" flex items-center relative justify-end max-w-7xl w-full m-auto">
        <StaticImage
          src="../images/logo-branca.webp"
          width={214}
          height={76.11}
          alt="logo"
          className="w-[214px] absolute left-4 lg:m-0"
        />
        <ul className="hidden lg:flex gap-10 self-end lg:pr-20">
          <li>
            <a
              href="/#about"
              className="text-[#c2c2c2]  font-body lg:text-base  hover:text-[#FFFF]  hover:after:w-full after:w-0  hover:after:h-[2px] after:bg-[#3F5C9A] hover:after:block after:transition-all relative after:absolute after:bottom-[-5px]"
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="text-[#c2c2c2]  font-body lg:text-base hover:text-[#FFFF] hover:after:w-full after:w-0  hover:after:h-[2px] after:bg-[#3F5C9A] hover:after:block after:transition-all relative after:absolute after:bottom-[-5px]"
            >
              Contato
            </a>
          </li>
        </ul>
        {/* mobile */}
        <div
          className={`lg:hidden block cursor-pointer px-4 py-4 z-[9999] `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`bg-white relative transition-all rounded-md before:rounded-md after:rounded-md before:transition-all after:transition-all flex flex-col gap-5 h-1 w-6 after:absolute after:top-2 after:h-1 after:bg-[#EDEDED] after:w-6 before:absolute ${
              isOpen &&
              "BgTransparent before:rotate-45 before:translate-x-[2px] before:translate-y-[10px] after:rotate-[-45deg] after:translate-x-[2px] after:translate-y-[-6px]"
            } before:bottom-2 before:h-1 before:mt-2 before:bg-[#EDEDED] before:w-6`}
          ></span>
        </div>
        <ul
          className={`lg:w-[50%] w-full z-[99] h-[150px] top-20 absolute flex flex-col bg-[#EDEDED]  transition-opacity  left-0 items-center justify-evenly  ${
            isOpen === true && "translate-x-0 transition-transform duration-500"
          }
            ${
              isOpen === false &&
              "translate-x-[-1000px] transition-transform duration-500 delay-100"
            }
          } `}
        >
          <li>
            <a href="#about" className="text-[#494949]  font-body lg:text-xl">
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#494949]  font-body lg:text-xl">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
