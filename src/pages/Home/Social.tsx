import { ArrowUpRight } from "@phosphor-icons/react";
import React from "react";

const Social = () => {
  return (
    <section
      id="social"
      aria-label="Demonstre seu apoio"
      className=" flex justify-center text-start md:pt-10 pb-10 md:pb-20">
      <div className="relative container grid md:grid-cols-3 gap-10 px-4 md:px-0">
        <div>
          <h1 className="text-4xl md:text-5xl md:sticky md:top-5">
            Demonstre seu apoio!
          </h1>
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <p className="text-xl md:text-2xl text-stone-600 py-2">
            Acompanhe cada passo do nosso projeto! Nos siga nas redes sociais e
            receba todas as novidades em tempo real. <br />
          </p>
          <p className="text-xl md:text-2xl text-stone-600">
            Ou se preferir, envie um email para saber mais sobre o nosso
            projeto!
          </p>
          <div className="grid gap-6">
            <h3 className="text-xl md:text-2xl py-2 font-medium">
              Nos siga nas redes sociais!
            </h3>
            <ul className="flex text-md sm:text-lg md:text-xl gap-2 md:gap-8">
              <a
                href="https://www.instagram.com/projet.arq_magazine/"
                target="_blank"
                className="flex items-center gap-2 md:hover:gap-4 md:hover:scale-110 text-white md:hover:text-rose-950 bg-stone-900 md:hover:bg-rose-500 px-8 py-3 rounded-xl transition-all">
                Instagram
                <ArrowUpRight size={20} color="currentcolor" />
              </a>
              <a
                href="mailto:projetarqmagazine@gmail.com?subject=Olá, gostaria de saber mais sobre o projeto!"
                target="_blank"
                className="flex items-center gap-2 md:hover:gap-4 md:hover:scale-110 text-white md:hover:text-red-950 bg-stone-900 touchw  md:hover:bg-red-500 px-8 py-3 rounded-xl transition-all">
                Gmail
                <ArrowUpRight size={20} color="currentcolor" />
              </a>
              {/* <a
                href=""
                className="text-white bg-orange-600 px-8 py-3 rounded-xl">
                Instagram
              </a> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
