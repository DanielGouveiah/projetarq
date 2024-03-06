import Ants from "../../assets/Ants";

const About = () => {
  return (
    <section className="relative py-20 px-2 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-14 md:gap-y-20">
      <div className="absolute -top-6 left-1/2 ">
        <Ants />
      </div>

      <h2 className="text-3xl md:text-5xl font-semibold text-stone-50 col-span-2 md:col-span-2 md:col-start-2">
        Sobre nós
      </h2>

      <div className=" text-stone-50 col-span-full grid md:grid-cols-4 justify-center gap-y-4 py-6">
        <div className="grid  gap-6 col-start-2 col-span-2 sm:text-start leading-loose text-lg bg-red-dark p-6 rounded-xl">
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
              href=""
              className="text-xl flex items-center gap-2 text-transparent font-semibold bg-clip-text bg-instagram hover:text-transparent hover:opacity-95">
              Visite nosso Instagram.
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-10 sm:grid-cols-2 grid-rows-2 col-span-full p-4 justify-items-center"></div>
    </section>
  );
};

export default About;
