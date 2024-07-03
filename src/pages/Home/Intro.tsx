import { useState } from "react";
import introImg from "../../assets/intro-img.jpg";
import introFree from "../../assets/intro-free.png";
import FirebaseInit from "../../FirebaseInit";
import { DocumentData } from "firebase/firestore";

interface Edition {
  init: () => DocumentData;
}

const Intro = () => {
  const [isLoading, setIsLoading] = useState(false); // TODO: Arrumar essa bagunça!
  const [downloaded, setDownloaded] = useState(false); // TODO: Arrumar essa bagunça!
  const firebase: Edition = FirebaseInit("edition");

  const downloadEdition = async () => {
    setIsLoading(true);
    const value = await firebase.init();
    setIsLoading(false);
    setDownloaded(true);
    window.open(value.edicao, value.titulo);
    const timeout = setTimeout(() => {
      setDownloaded(false);
      clearTimeout(timeout);
      return;
    }, 3000);
  };

  return (
    <article aria-label="Introdução" className="sticky top-0">
      <section className="flex flex-col gap-40 sm:gap-48 md:gap-16 pt-44 pb-20 md:pt-28 md:pb-16 xl:pt-48 xl:pb-28 bg-cover bg-no-repeat bg-fixed bg-intro md:bg-radial ">
        {/*Intro when it's in pc or medium screens*/}
        <div className=" hidden md:flex relative flex-col sm:text-3xl md:text-5xl xl:text-6xl font-semibold">
          <div className="grid gap-4 text-stone-900 drop-shadow-md">
            <p>Mergulhe conosco</p>
            <p>
              nas principais{" "}
              <img
                className="inline-block rounded-full drop-shadow-log border border-stone-300 md:max-w-60 xl:max-w-fit"
                src={introImg}
                alt=""
              />
            </p>
            <p>
              notícias da <span className="text-red">Arquitetura!</span>
            </p>
            <div className="hidden md:flex absolute max-w-fit md:right-10 md:-bottom-20 lg:right-32 lg:-bottom-32 xl:right-32 xl:-bottom-32">
              <img src={introFree} alt="" className="max-w-24 lg:max-w-40" />
            </div>
          </div>
        </div>
        {/*Intro when it's in mobile device*/}
        <div className="flex md:hidden">
          <p className="text-2xl min-[380px]:text-3xl sm:text-4xl rounded-full p-4 -translate-y-10 font-bold text-stone-50 ">
            Sua fonte{" "}
            <span className="text-stone-50 bg-red rounded-full px-6">
              Gratuita
            </span>{" "}
            de novidades no mundo da arquitetura
          </p>
        </div>
        <div>
          {isLoading ? (
            <a
              className={`py-2 px-4 rounded-full shadow-md text-xl bg-red-500 text-red-900 bg-opacity-90 hover:bg-opacity-100 cursor-pointer`}>
              Carregando...
            </a>
          ) : (
            <a
              onClick={(e) => {
                e.preventDefault();
                downloadEdition();
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                downloadEdition();
              }}
              className={`py-2 px-4 rounded-full shadow-md text-xl ${
                downloaded && !isLoading
                  ? "bg-[#75CE56] text-[#28521a] hover:text-[#28521a]"
                  : "bg-red text-stone-200  hover:text-stone-200"
              } cursor-pointer`}>
              {!isLoading && <span>Ver última edição</span>}
            </a>
          )}
        </div>
      </section>
    </article>
  );
};

export default Intro;
