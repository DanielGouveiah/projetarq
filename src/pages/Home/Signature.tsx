import { Coins, Plant } from "@phosphor-icons/react";

const Signature = () => {
  return (
    <section className="home-main py-20 px-10 grid  grid-cols-2 md:grid-cols-4 gap-14 md:gap-20">
      <h2 className="text-3xl md:text-5xl font-semibold text-stone-50 col-span-2 md:col-span-2 md:col-start-2">
        Descomplique seu acesso.
      </h2>

      <div className="grid gap-4 sm:gap-10 sm:grid-cols-2 grid-rows-2 col-span-2 md:col-start-2 p-4">
        <div className="grid gap-6 justify-items-center bg-red-dark py-4 md:py-6 px-4 rounded-xl row-span-2 text-red-light hover:text-[#75CE56] transition-colors duration-1000">
          <Plant size={64} />
          <p className="text-xl text-stone-100  leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            esse assumenda illo perspiciatis, veniam blanditiis.
          </p>
        </div>
        <div className="grid gap-6 justify-items-center bg-red-dark py-6 px-4 rounded-xl row-span-2 text-red-light hover:text-[#DDB245] transition-colors duration-1000">
          <Coins size={64} />
          <p className="text-xl text-stone-100 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            esse assumenda illo perspiciatis, veniam blanditiis.
          </p>
        </div>
      </div>

      <form action="" className="col-span-2 md:col-start-2 grid justify-center">
        <div className="max-w-[200px] grid justify-center gap-10">
          <label htmlFor="email" className="text-3xl text-stone-50 cursor-text">
            Não perca tempo!
          </label>
          <input
            type="email"
            title="Email"
            placeholder="email@hotmail.com"
            className="bg-transparent pt-4 pb-2 pr-2 pl-0 text-stone-50 border-b-4 text-center placeholder:text-center focus:placeholder:text-stone-50 border-stone-400 focus:border-stone-50"
            required
          />
          <div>
            <button className="bg-white hover:bg-stone-300 py-2 px-12 rounded-full text-xl ">
              Assinar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Signature;
