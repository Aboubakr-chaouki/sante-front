import React, { useState } from "react";
import logo from "../assets/Logo Santeformapro.jpeg";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white text-black h-[100px] px-[140px] flex justify-between items-center relative">
      <div className="flex-shrink-0">
        <img
          className="w-[170px] h-auto"
          src={logo}
          alt="Logo de Santéformapro"
        />
      </div>

      <nav className="flex-grow ml-4 md:ml-[150px] flex items-center justify-between">
        <ul className="flex space-x-2 md:space-x-12">
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center p-2 hover:border-b-4 text-[15px] border-[#F01F75]"
          >
            <a
              href="#"
              className="text-black flex items-center hover:text-[#F01F75] border-none"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen ? "true" : "false"}
            >
              Formation
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {isDropdownOpen && (
              <ul className="mt-1 z-20 w-[220px] text-[13px] bg-white border border-gray-300 rounded-l shadow-md absolute top-full left-0">
                <li>
                  <a
                    href="https://www.santeformapro.com/infirmiers/catalogue-infirmiers/"
                    rel="noopener noreferrer"
                    className="block px-4 py-4 text-black hover:bg-[#F01F75] hover:text-white"
                  >
                    Catalogue Infirmier
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.santeformapro.com/kinesitherapeutes/catalogue-kinesitherapeute/"
                    rel="noopener noreferrer"
                    className="block px-4 py-4 text-black hover:bg-[#F01F75] hover:text-white"
                  >
                    Catalogue Kinésithérapeute
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.santeformapro.com/medecin-generaliste/catalogue-medecin/"
                    rel="noopener noreferrer"
                    className="block px-4 py-4 text-black hover:bg-[#F01F75] hover:text-white"
                  >
                    Catalogue Médecin
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="flex items-center p-2 hover:border-b-4 text-[15px] border-[#F01F75]">
            <a
              href="https://www.santeformapro.com/financement/"
              rel="noopener noreferrer"
              className="text-black flex items-center hover:text-[#F01F75] border-none"
            >
              Financement
            </a>
          </li>
          <li className="flex items-center p-2 hover:border-b-4 text-[15px] border-[#F01F75]">
            <a
              href="https://www.santeformapro.com/ressources/"
              rel="noopener noreferrer"
              className="text-black flex items-center hover:text-[#F01F75] border-none"
            >
              Bibliothèque de ressources
            </a>
          </li>
        </ul>

        <ul className="flex items-center">
          <li className="text-[15px] border-l-2 py-4 border-gray-200 flex items-center justify-center">
            <a
              href="https://portail.santeformapro.com/authentication/login"
              rel="noopener noreferrer"
              className="text-[#F01F75] pl-10 px-4"
            >
              Connexion
            </a>
          </li>

          <li className="bg-[#F01F75] w-auto px-6 py-2 text-[15px] shadow-2xl rounded-full ml-10">
            <a href="#" className="text-white">
              Nos formations
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
