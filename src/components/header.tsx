import { useState } from "react";
import logo from "../assets/LogoSanteformapro.jpeg";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white text-black h-[100px] px-4 sm:px-6 md:px-8 lg:px-[140px] flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          className="w-[150px] md:w-[170px] h-auto"
          src={logo}
          alt="Logo de Santéformapro"
        />
      </div>

      <button
        className="block md:hidden text-black focus:outline-none"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <nav className="hidden md:flex md:flex-row items-center md:space-x-12">
        <ul className="flex flex-row md:space-x-12 space-y-0">
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
              <ul className="mt-1 z-20 w-full max-w-[220px] text-[13px] bg-white border border-gray-300 rounded-l shadow-md absolute top-full left-0">
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

        <ul className="flex flex-row md:space-x-4 mt-0">
          <li className="text-[15px] border-l-2 py-4 border-gray-200 flex items-center justify-center">
            <a
              href="https://portail.santeformapro.com/authentication/login"
              rel="noopener noreferrer"
              className="text-[#F01F75] pl-4"
            >
              Connexion
            </a>
          </li>

          <li className="bg-[#F01F75] w-full md:w-auto px-6 py-4 text-[15px] shadow-2xl rounded-full mt-0">
            <a href="#" className="text-white text-center block">
              Nos formations
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={`md:hidden absolute top-[100px] left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <a
              href="#"
              className="text-black flex items-center hover:text-[#F01F75]"
              onClick={closeMenu}
            >
              Formation
            </a>
            {isDropdownOpen && (
              <ul className="mt-2 text-[13px] bg-white border border-gray-300 rounded-l shadow-md">
                <li>
                  <a
                    href="https://www.santeformapro.com/infirmiers/catalogue-infirmiers/"
                    rel="noopener noreferrer"
                    className="block px-4 py-4 text-black hover:bg-[#F01F75] hover:text-white"
                    onClick={closeMenu}
                  >
                    Catalogue Infirmier
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.santeformapro.com/kinesitherapeutes/catalogue-kinesitherapeute/"
                    rel="noopener noreferrer"
                    className="block px-4 py-4 text-black hover:bg-[#F01F75] hover:text-white"
                    onClick={closeMenu}
                  >
                    Catalogue Kinésithérapeute
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.santeformapro.com/medecin-generaliste/catalogue-medecin/"
                    rel="noopener noreferrer"
                    className="block px-4 py-4 text-black hover:bg-[#F01F75] hover:text-white"
                    onClick={closeMenu}
                  >
                    Catalogue Médecin
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="https://www.santeformapro.com/financement/"
              rel="noopener noreferrer"
              className="text-black flex items-center hover:text-[#F01F75]"
              onClick={closeMenu}
            >
              Financement
            </a>
          </li>
          <li>
            <a
              href="https://www.santeformapro.com/ressources/"
              rel="noopener noreferrer"
              className="text-black flex items-center hover:text-[#F01F75]"
              onClick={closeMenu}
            >
              Bibliothèque de ressources
            </a>
          </li>
          <li>
            <a
              href="https://portail.santeformapro.com/authentication/login"
              rel="noopener noreferrer"
              className="text-[#F01F75] flex items-center hover:text-[#F01F75]"
              onClick={closeMenu}
            >
              Connexion
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#F01F75] w-full px-6 py-2 text-white text-center block rounded-full"
              onClick={closeMenu}
            >
              Nos formations
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
