import React from "react";
import introImg from "../../assets/intro-img.jpg";
import introFree from "../../assets/intro-free.png";
import edition from "../../assets/edition.pdf";

const Intro = () => {
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [downloaded, setDownloaded] = React.useState(false);

  const downloadEdition = () => {
    setIsDownloading(true);
    fetch(edition).then((r: Response) => {
      if (r) {
        setIsDownloading(false);
        setDownloaded(true);
        setTimeout(() => {
          setDownloaded(false);
        }, 3000);
        return;
      }
      console.log("Ocorreu um erro!");
    });
  };

  return (
    <article aria-label="Introdução" className="sticky top-0">
      <section className="flex flex-col gap-40 sm:gap-48 md:gap-16 pt-44 pb-20 md:pt-28 md:pb-16 xl:pt-48 xl:pb-28 bg-cover bg-no-repeat bg-fixed bg-intro md:bg-radial ">
        {/*Intro when it's in pc or medium screens*/}
        <div className=" hidden md:flex relative flex-col sm:text-3xl md:text-5xl xl:text-6xl font-semibold">
          <div
            className="grid gap-4 text-stone-900 drop-shadow-md"
            data-animate>
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
              <img
                src={introFree}
                alt=""
                className="max-w-24 lg:max-w-40"
                data-animate
              />
            </div>
          </div>
        </div>
        {/*Intro when it's in mobile device*/}
        <div className="flex md:hidden" data-animate>
          <p
            className="text-2xl min-[380px]:text-3xl sm:text-4xl rounded-full p-4 -translate-y-10 font-bold text-stone-50 "
            data-animate>
            Sua fonte{" "}
            <span className="text-stone-50 bg-red rounded-full px-6">
              Gratuita
            </span>{" "}
            de novidades no mundo da arquitetura
          </p>
        </div>
        <div data-animate>
          <a
            onClick={() => {
              downloadEdition();
            }}
            href={edition}
            target="_blank"
            rel="noreferrer"
            className={`py-2 px-4 rounded-full shadow-md text-xl hover:text-stone-400 ${
              downloaded
                ? "bg-[#75CE56]  text-[#28521a] "
                : "bg-red  text-stone-200"
            } cursor-pointer`}>
            {isDownloading && "Baixando..."}
            {downloaded && "Arquivo Baixado!"}
            {!isDownloading && !downloaded && "Ver última edição"}
          </a>
        </div>
      </section>
    </article>
  );
};

export default Intro;
