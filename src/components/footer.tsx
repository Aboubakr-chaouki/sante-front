import React, { useState } from "react";
import imgfooter1 from "../assets/Logo Qualiopi Formation.png";
import imgfooter2 from "../assets/odpc recherche.png";
import logo2 from "../assets/logo santeformapro hidden background.png";

function Footer() {
  return (
    <footer className="bg-[#2a1f40] relative w-full h-auto  py-14 px-4 md:px-10 lg:px-20 xl:px-[140px]">
      <div className="flex justify-between">
        <div className="flex-1 px-4 mr-12">
          <div>
            <img
              className="w-[300px] h-auto"
              src={logo2}
              alt="logo Santeformapro"
            ></img>
          </div>
          <div>
            <div className="flex space-x-4 mt-6">
              <div>
                <img
                  className="w-[150px] h-[90px]"
                  src={imgfooter1}
                  alt="logo Santeformapro"
                />
              </div>
              <div>
                <img
                  className="w-[150px] h-[90px]"
                  src={imgfooter2}
                  alt="logo Santeformapro"
                />
              </div>
            </div>
            <div className="mt-6 text-gray-400 text-[14px]">
              <p>
                Depuis 2013, Santé Formapro est au service des professionnels de
                santé et les accompagne chaque jour dans leur parcours de
                Développement Professionnel Continu.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-12 flex flex-col space-y-2">
          <h3 className="font-medium text-[18px] mb-4 text-white">
            Formations
          </h3>
          <a
            href="https://www.santeformapro.com/infirmiers/catalogue-infirmiers/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Infirmier
          </a>
          <a
            href="https://www.santeformapro.com/medecin-generaliste/catalogue-medecin/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Médecin
          </a>
          <a
            href="https://www.santeformapro.com/kinesitherapeutes/catalogue-kinesitherapeute/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Kinésithérapeute
          </a>
          <a
            href="https://www.santeformapro.com/etablissement-de-sante/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Établissement de Santé
          </a>
        </div>

        <div className="flex-1 px-12 flex flex-col space-y-2">
          <h3 className="font-medium text-[18px] mb-4 text-white">Support</h3>
          <a
            href="https://www.santeformapro.com/foire-aux-questions/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            F.A.Q
          </a>
          <a
            href="https://www.santeformapro.com/contact/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Contact
          </a>
        </div>

        <div className="flex-1 px-12 flex flex-col space-y-2">
          <h3 className="font-medium text-[18px] mb-4 text-white">
            Liens utiles
          </h3>
          <a
            href="https://portail.santeformapro.com/authentication/login"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Accès plateforme
          </a>
          <a
            href="https://www.santeformapro.com/blog/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Blog
          </a>
          <a
            href="https://www.santeformapro.com/qui-sommes-nous/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Qui sommes-nous
          </a>
          <a
            href="https://www.santeformapro.com/conditions-generales/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Conditions générales
          </a>
          <a
            href="https://www.santeformapro.com/protection-des-donnees/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Protection des données
          </a>
          <a
            href="https://www.santeformapro.com/politique-des-cookies/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Politique des cookies
          </a>
          <a
            href="https://www.santeformapro.com/mentions-legales/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Mentions légales
          </a>
          <a
            href="https://sfpexpansion.com/"
            rel="noopener"
            className="text-gray-400 text-[14px] hover:underline"
          >
            Groupe SFP Expansion
          </a>
        </div>
      </div>
      <div className="h-[1px] bg-gray-500 mt-6 relative w-full md:px-10 lg:px-20 xl:px-[140px]"></div>
      <div className="text-gray-500 text-[14px] mt-12">
        <p>
          contact@santeformapro.com / 04 42 17 90 82 © 2022 Santé Formapro -
          Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

export default Footer;
