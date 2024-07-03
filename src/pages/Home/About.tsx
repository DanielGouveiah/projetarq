import Ants from "../../assets/Ants";

const About = () => {
  return (
    <section
      className="relative py-10 sm:py-20 px-2 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-y-14 md:gap-y-20"
      id="about">
      <div className="absolute -top-16 sm:-top-6 left-1/2 ">
        <Ants />
      </div>

      <h2 className="text-3xl md:text-5xl font-semibold text-stone-50 col-span-2 md:col-span-2 md:col-start-2">
        Sobre nós
      </h2>

      <div className=" text-stone-50 col-span-full grid md:grid-cols-4 justify-center gap-y-4 py-6">
        <div className="grid gap-6 col-start-2 col-span-2 leading-loose text-base sm:text-lg bg-red-dark p-6 rounded-xl">
          <p>
            Nasceu em{" "}
            <span className="text-emerald-300">Recife, Pernambuco</span>, a
            Projetarq Magazine, uma revista de arquitetura com um olhar fresco e
            inovador. Criada por um grupo de universitárias apaixonadas pela
            área, a revista busca trazer ao público uma visão jovem e
            contemporânea da arquitetura, com foco na valorização da cultura e
            identidade pernambucana.
          </p>

          <div className="grid justify-center">
            <a
              rel="noopener"
              href="https://www.instagram.com/projet.arq_magazine/"
              className="text-xl flex items-center gap-2 text-transparent font-semibold bg-clip-text bg-instagram hover:text-transparent hover:opacity-95">
              Visite nosso Instagram.
            </a>
          </div>
        </div>

        <div className="grid md:col-start-2 col-span-3 md:col-span-2">
          <ul className="grid grid-cols-2 gap-y-0 py-10">
            <li className="grid justify-center bg-red-dark border-r-2 border-b-2 border-red rounded-xl rounded-r-none rounded-bl-none py-2">
              <div className="grid w-[120px] md:w-[200px] justify-center gap-2 bg-red-dark py-2 px-10 rounded-xl">
                <span className="text-xl md:text-2xl lg:text-3xl">2023</span>
                <h3 className="text-stone-400 text-lg md:text-xl">Criação</h3>
              </div>
            </li>
            <li className="grid justify-center bg-red-dark  border-b-2 border-red rounded-xl rounded-l-none rounded-br-none py-2 ">
              <div className="grid w-[120px] md:w-[200px] justify-center gap-2 bg-red-dark py-2 px-10 rounded-xl">
                <span className="text-xl md:text-2xl lg:text-3xl">5</span>
                <h3 className="text-stone-400 text-lg md:text-xl">
                  Integrantes
                </h3>
              </div>
            </li>
            <li className="grid justify-center bg-red-dark border-r-2 border-red rounded-xl rounded-r-none rounded-tl-none py-2 ">
              <div className="grid w-[120px] md:w-[200px] justify-center gap-2 bg-red-dark py-2 px-10 rounded-xl">
                <span className="text-xl md:text-2xl lg:text-3xl bg-clip-text bg-recife text-transparent">
                  Recife
                </span>
                <h3 className="text-stone-400 text-lg md:text-xl bg-clip-text bg-instagram ">
                  Cidade
                </h3>
              </div>
            </li>
            <li className="grid justify-center bg-red-dark border-red rounded-xl rounded-l-none rounded-tr-none py-2 ">
              <div className="grid w-[120px] md:w-[200px] justify-center gap-2 bg-red-dark py-2 px-10 rounded-xl">
                <span className="text-xl md:text-2xl lg:text-3xl">1</span>
                <h3 className="text-stone-400 text-lg md:text-xl">Edições</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute -bottom-6 left-1/2">
        <Ants />
      </div>
    </section>
  );
};

export default About;
