import React from "react";
import { Coins, Plant } from "@phosphor-icons/react";

const Signature = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isValid, setIsValid] = React.useState<boolean>();
  const [hasBlur, setHasBlur] = React.useState<boolean>(false);

  const subscribeEmail = () => {
    console.log("Enviou");
  };

  const checkEmail = () => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    const test = emailRegex.test(email);
    setIsValid(test);
  };

  return (
    <section className="py-20 px-2 sm:px-10 grid  grid-cols-2 md:grid-cols-4 gap-y-14 md:gap-y-20">
      <h2 className="text-3xl md:text-5xl font-semibold text-stone-50 col-span-2 md:col-span-2 md:col-start-2">
        Descomplique seu acesso.
      </h2>

      <div className="grid gap-4 sm:gap-10 sm:grid-cols-2 grid-rows-2 col-span-full p-4 justify-items-center">
        <div className="grid sm:justify-self-end max-w-[320px] md:max-w-[420px] gap-6 justify-items-center bg-red-dark py-4 md:py-6 px-4 rounded-xl row-span-2 text-[#75CE56] sm:text-red-light sm:hover:text-[#75CE56] transition-colors duration-1000">
          <Plant className="text-5xl sm:text-6xl" />
          <p className="text-lg sm:text-xl text-stone-100  leading-relaxed">
            Projeto de universítários para universitários, cresça conosco e nos
            ajude a difundir os conceitos da Arquitetura!
          </p>
        </div>
        <div className="grid sm:justify-self-start max-w-[320px] md:max-w-[420px] gap-6 justify-items-center bg-red-dark py-6 px-4 rounded-xl row-span-2 text-[#DDB245]  sm:text-red-light sm:hover:text-[#DDB245] transition-colors duration-1000">
          <Coins className="text-5xl sm:text-6xl" />
          <p className="text-lg sm:text-xl text-stone-100 leading-relaxed">
            Aprenda conosco e nos ajude a desenvolver cada vez mais área. O
            melhor, é 100% grátis!
          </p>
        </div>
      </div>

      <form
        onSubmit={subscribeEmail}
        className="col-span-2 md:col-start-2 grid justify-center">
        <div className="max-w-[200px] grid justify-center gap-10">
          <label htmlFor="email" className="text-3xl text-stone-50 cursor-text">
            Não perca tempo!
          </label>

          <input
            type="text"
            title="Nome"
            placeholder="Seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="bg-transparent pt-4 pb-2 pr-2 pl-0 text-stone-50 border-b-4 text-center placeholder:text-center focus:placeholder:text-stone-50 border-stone-400 focus:border-stone-50"
            required
          />

          <input
            type="email"
            title="Email"
            placeholder="email@hotmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (hasBlur) checkEmail();
            }}
            onBlur={() => {
              checkEmail();
              if (!hasBlur) setHasBlur(true);
            }}
            className={`bg-transparent pt-4 pb-2 pr-2 pl-0 text-stone-50 border-b-4 text-center placeholder:text-center ${
              !hasBlur &&
              "focus:placeholder:text-stone-50 border-stone-400 focus:border-stone-50"
            } ${isValid == true && "border-emerald-500"} ${
              isValid == false && "placeholder:text-red-500 border-red-500"
            }`}
            required
          />

          <div>
            <button
              className="bg-white disabled:opacity-50 hover:bg-stone-300 py-2 px-12 rounded-full text-xl"
              disabled={
                isValid != true || nome.length == 0 || email.length == 0
              }>
              Assinar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Signature;
