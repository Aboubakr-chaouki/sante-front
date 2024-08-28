import "./App.css";
import cover1 from "./assets/Jeunehommevaccine.jpg";
import imgArticle1 from "./assets/imgArticle1.jpg";
import imgArticle2 from "./assets/imgarticle2.jpg";
import imgArticle3 from "./assets/imgArticle3.jpg";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Aside from "../src/components/aside";
import { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState<string | null>("");

  function handleSendMail(e: any) {
    e.preventDefault();

    try {
      axios
        .post(
          "https://abou-chaouki.fr/send-email",
          { email },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("Email envoyé avec succès", response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi de l'email", error);
        });
    } catch (error) {
      console.error("Erreur dans la fonction handleSendMail:", error);
      alert("Une erreur inattendue s'est produite.");
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      <main className="flex-grow  w-full">
        <section className="relative w-full h-[600px] py-20 px-4 md:px-10 lg:px-20 xl:px-[140px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${cover1})` }}
          >
            <div className="absolute inset-0 bg-black opacity-80"></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-20">
            <div className="flex-1 text-white pt-12">
              <a
                href="https://www.santeformapro.com/blog/"
                rel="noopener"
                className="flex items-center text-[#e01e5f] font-bold mb-6"
              >
                <i className="fas fa-arrow-left mr-2 text-[#e01e5f]"></i>
                Blog
              </a>
              <h1 className="text-[24px] md:text-3xl lg:text-4xl xl:text-5xl text-[#3b91ac] font-bold mb-4">
                Vacciner : Pourquoi, comment, vaincre méfiances et défiances ?
              </h1>
              <p className="text-base md:text-lg mt-12">
                La vaccination est un outil essentiel dans la lutte contre les
                maladies infectieuses. Elle permet de protéger non seulement les
                individus vaccinés, mais aussi l'ensemble de la communauté en
                réduisant la propagation des agents pathogènes. Malgré ses
                nombreux avantages, la vaccination suscite souvent des méfiances
                et des défiances. Alors, pourquoi la vaccination est-elle
                importante, comment fonctionne-t-elle, et comment peut-on
                surmonter les hésitations à se faire vacciner ?
              </p>
            </div>
            <div className="flex-1 max-w-xs w-full text-white">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Envie d'en savoir plus ?
              </h2>
              <h3>
                Inscrivez-vous à notre
                <strong className="text-[#3b91ac]"> Newsletter</strong>
              </h3>
              <form
                action=""
                method="post"
                className="flex flex-col space-y-8"
                onSubmit={handleSendMail}
              >
                <label htmlFor="email" className="sr-only"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Renseigner votre email"
                  className="p-2  border-[#3b91ac] rounded-lg w-full bg-white text-black focus:border-2 focus:border-[#257087] focus:outline-none"
                  required
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <input
                  type="submit"
                  value="M'inscrire"
                  className="bg-[#F01F75] text-white p-2 rounded-lg cursor-pointer hover:bg-[#e01e5f]"
                />
              </form>
            </div>
          </div>
        </section>
        <section className="relative w-full h-auto bg-gray-200 py-14 px-4 md:px-10 lg:px-20 xl:px-[140px]">
          <article className="flex flex-col md:flex-row md:space-x-4 w-full h-full">
            <div className="md:w-[70%] w-full bg-white h-auto p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <h3 className="text-[28px] text-center text-[#3b91ac] font-bold mb-4">
                  Pourquoi se faire vacciner ?
                </h3>
                <div className="w-[300px] flex justify-center mb-4">
                  <img
                    className="w-full h-auto"
                    src={imgArticle1}
                    alt="logo Santeformapro"
                  />
                </div>
                <div className=" px-4 mb-4">
                  <p>
                    <h5 className="text-[#F01F75] text-[18px] font-bold">
                      Protection individuelle
                    </h5>
                    Les vaccins{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      protègent{" "}
                    </strong>{" "}
                    directement les personnes vaccinées en les{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      immunisant{" "}
                    </strong>
                    contre des maladies potentiellement graves. Par exemple, le
                    vaccin contre la rougeole offre une{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      protection{" "}
                    </strong>{" "}
                    contre cette{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      infection{" "}
                    </strong>
                    virale qui peut entraîner des complications sérieuses telles
                    que la pneumonie, l'encéphalite, et même la mort.
                  </p>
                </div>
                <div className=" px-4 mb-4">
                  <p>
                    <h5 className="text-[#F01F75] text-[18px] font-bold">
                      Protection Collective
                    </h5>
                    En vaccinant un grand nombre de personnes, nous créons une{" "}
                    <strong className="text-l font-bold text-blue-600">
                      "immunité de groupe"
                    </strong>{" "}
                    qui aide à protéger les individus non vaccinés ou
                    vulnérables. Cela réduit la{" "}
                    <strong className="text-l font-bold text-blue-600">
                      propagation des maladies
                    </strong>{" "}
                    et limite les{" "}
                    <strong className="text-l font-bold text-blue-600">
                      épidémies
                    </strong>
                    . Cette stratégie est particulièrement importante pour
                    protéger les personnes qui ne peuvent pas se faire vacciner
                    pour des raisons médicales, comme les{" "}
                    <strong className="text-l font-bold text-blue-600">
                      nourrissons
                    </strong>{" "}
                    ou les{" "}
                    <strong className="text-l font-bold text-blue-600">
                      personnes immunodéprimées
                    </strong>
                    .
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-[28px] text-center text-[#3b91ac] font-bold mb-4">
                  Comment fonctionne un vaccin ?
                </h3>
                <div className="w-[300px] flex justify-center mb-4">
                  <img
                    className="w-full h-auto"
                    src={imgArticle2}
                    alt="logo Santeformapro"
                  />
                </div>
                <div className=" px-4 mb-4">
                  <p>
                    <h5 className="text-[#F01F75] text-[18px] font-bold">
                      Le Principe de Base{" "}
                    </h5>{" "}
                    Les vaccins contiennent des{" "}
                    <strong className="text-l font-bold text-blue-600">
                      agents pathogènes affaiblis
                    </strong>
                    ,{" "}
                    <strong className="text-l font-bold text-blue-600">
                      inactivés
                    </strong>
                    , ou des{" "}
                    <strong className="text-l font-bold text-blue-600">
                      parties de ces agents
                    </strong>{" "}
                    (comme des{" "}
                    <strong className="text-l font-bold text-blue-600">
                      protéines spécifiques
                    </strong>
                    ). Lorsqu'une personne est vaccinée, son système immunitaire
                    produit des{" "}
                    <strong className="text-l font-bold text-blue-600">
                      anticorps
                    </strong>{" "}
                    pour combattre cet agent pathogène. Si la personne rencontre
                    plus tard le véritable agent pathogène, son système
                    immunitaire sera déjà préparé pour le{" "}
                    <strong className="text-l font-bold text-blue-600">
                      combattre efficacement
                    </strong>
                    .
                  </p>
                </div>
                <div className=" px-4 mb-4">
                  <p>
                    <h5 className="text-[#F01F75] text-[18px] font-bold">
                      Types de Vaccins
                    </h5>
                    <strong className="text-l font-bold text-blue-600">
                      Vaccins vivants atténués :{" "}
                    </strong>{" "}
                    Contiennent des formes affaiblies du pathogène. <br></br>{" "}
                    <strong className="text-l font-bold text-blue-600">
                      Vaccins inactivés :{" "}
                    </strong>{" "}
                    Contiennent des pathogènes tués ou inactivés. <br></br>{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      Vaccins à sous-unités :{" "}
                    </strong>{" "}
                    Contiennent des fragments spécifiques du pathogène.{" "}
                    <br></br>{" "}
                    <strong className="text-l font-bold text-blue-600">
                      Vaccins à ARN :{" "}
                    </strong>{" "}
                    Contiennent des instructions génétiques pour produire une
                    protéine du pathogène dans les cellules du corps.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-[28px] text-center text-[#3b91ac] font-bold mb-4">
                  Vaincre les Méfiances et Défiances
                </h3>
                <div className="w-[300px] flex justify-center mb-4">
                  <img
                    className="w-full h-auto"
                    src={imgArticle3}
                    alt="logo Santeformapro"
                  />
                </div>
                <div className=" px-4 mb-4">
                  <p>
                    <h5 className="text-[#F01F75] text-[18px] font-bold">
                      Éducation et Sensibilisation{" "}
                    </h5>
                    Beaucoup de{" "}
                    <strong className="text-l font-bold text-blue-600">
                      méfiances
                    </strong>{" "}
                    proviennent du{" "}
                    <strong className="text-l font-bold text-blue-600">
                      manque d'information
                    </strong>{" "}
                    ou de{" "}
                    <strong className="text-l font-bold text-blue-600">
                      mauvaises informations
                    </strong>
                    . Les campagnes d'
                    <strong className="text-l font-bold text-blue-600">
                      éducation
                    </strong>{" "}
                    doivent clarifier les{" "}
                    <strong className="text-l font-bold text-blue-600">
                      bénéfices
                    </strong>{" "}
                    des vaccins et répondre aux{" "}
                    <strong className="text-l font-bold text-blue-600">
                      préoccupations
                    </strong>{" "}
                    courantes. Les{" "}
                    <strong className="text-l font-bold text-blue-600">
                      médecins
                    </strong>{" "}
                    et les{" "}
                    <strong className="text-l font-bold text-blue-600">
                      professionnels de santé
                    </strong>{" "}
                    jouent un rôle crucial en fournissant des{" "}
                    <strong className="text-l font-bold text-blue-600">
                      informations fiables
                    </strong>{" "}
                    et en répondant aux questions.
                  </p>
                </div>
                <div className=" px-4 mb-4">
                  <p>
                    <h5 className="text-[#F01F75] text-[18px] font-bold">
                      Transparence et Confiance{" "}
                    </h5>
                    Les{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      autorités de santé
                    </strong>{" "}
                    doivent être
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      transparentes
                    </strong>{" "}
                    sur les
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      processus
                    </strong>{" "}
                    de développement et de surveillance des{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      vaccins
                    </strong>
                    . La publication des{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      données cliniques
                    </strong>
                    et l'explication des{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      effets secondaires potentiels
                    </strong>
                    aident à établir la{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      confiance
                    </strong>{" "}
                    du public.
                  </p>
                </div>
                <div className=" px-4 mb-4">
                  <p>
                    <h5 className="text-[#F01F75] text-[18px] font-bold">
                      Répondre aux Préoccupations Spécifiques{" "}
                    </h5>
                    Les{" "}
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      préoccupations
                    </strong>{" "}
                    peuvent varier, allant des
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      effets secondaires
                    </strong>{" "}
                    aux
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      croyances personnelles
                    </strong>{" "}
                    ou
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      religieuses
                    </strong>
                    . Il est important de traiter chaque
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      préoccupation
                    </strong>{" "}
                    avec respect et de fournir des
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      informations
                    </strong>{" "}
                    basées sur des
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      preuves scientifiques
                    </strong>
                    .
                  </p>
                </div>
                <div className=" px-4 mb-6">
                  <p>
                    <h5 className="text-[#F01F75] text-[18px] font-bold">
                      Promouvoir les Témoignages Positifs{" "}
                    </h5>
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      Partager des témoignages
                    </strong>{" "}
                    de personnes qui ont eu des
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      expériences positives
                    </strong>{" "}
                    avec la
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      vaccination
                    </strong>{" "}
                    peut aider à dissiper les
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      craintes
                    </strong>{" "}
                    et à encourager d'autres à se faire
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      vacciner
                    </strong>
                    .
                  </p>
                </div>
                <div className=" px-4 mb-6">
                  <p>
                    <h5 className="text-[#3b91ac] text-center text-[22px] font-bold">
                      CONCLUSION{" "}
                    </h5>
                    La{" "}
                    <strong className="text-lg font-bold text-blue-600">
                      {" "}
                      vaccination
                    </strong>{" "}
                    est une
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      mesure préventive essentielle
                    </strong>{" "}
                    pour protéger la
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      santé individuelle et publique
                    </strong>
                    . En comprenant son
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      fonctionnement
                    </strong>{" "}
                    et en abordant les
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      préoccupations
                    </strong>{" "}
                    de manière ouverte et informée, nous pouvons
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      surmonter les obstacles
                    </strong>{" "}
                    à la
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      vaccination
                    </strong>{" "}
                    et travailler ensemble pour une
                    <strong className="text-l font-bold text-blue-600">
                      {" "}
                      communauté en meilleure santé
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
            <Aside />
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
