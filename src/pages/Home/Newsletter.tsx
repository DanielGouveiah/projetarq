import { NavLink } from "react-router-dom";

const Newsletter = () => {
  return (
    <section
      aria-label="Newsletter"
      className="flex justify-center text-start bg-black text-white pt-20 pb-20 md:pb-40">
      <div className="relative container grid md:grid-cols-3 gap-10 px-4 md:px-0">
        <div>
          <h1 className=" text-4xl md:text-5xl md:sticky md:top-5">
            Não fique de fora!
          </h1>
        </div>
        <div className="col-span-2 flex flex-col gap-8">
          <p className="text-xl md:text-2xl text-stone-200 py-2">
            Em breve, lançaremos nossa Newsletter, o portal definitivo para você
            se manter por dentro de tudo o que rola no fascinante mundo da
            arquitetura.
          </p>
          <p className="text-xl md:text-2xl text-stone-200 py-2">
            Enquanto isso, aproveite para acompanhar nosso blog!
          </p>
          <NavLink
            to={"/blog"}
            className="w-fit text-lg md:text-xl bg-orange-600 px-4 rounded-lg py-2 text-white hover:scale-110 transition-all">
            Ver Blog
          </NavLink>

          {/* <form action="" className="flex flex-col gap-8">
            <div className="flex gap-4 text-stone-400 items-center checkbox ">
              <input type="checkbox" name="termos" id="terms" />
              <label htmlFor="terms" className="cursor-pointer">
                Eu concordo com os termos de privacidade e blabalbal
              </label>
            </div>

            <div className="flex gap-4 text-stone-400">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu melhor Email"
                className="bg-stone-200 text-stone-900 placeholder:text-stone-600 px-4 py-2 rounded-lg"
              />
              <button
                type="submit"
                className="bg-orange-600 px-4 rounded-lg -translate-x-16 text-white">
                Inscreva-se
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
