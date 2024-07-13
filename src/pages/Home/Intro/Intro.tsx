import { useContext } from "react";
import { BlogContext } from "../../../contexts/BlogContext";
import React from "react";

const Intro = () => {
  // const [bg, setBg] = useState(0);
  const editions = useContext(BlogContext)!.editions;
  // const ref = useRef<HTMLDivElement>(null);
  // const bgs = [
  //   { image: "bg-[url('./src/assets/bg/bg-0.jpg')]" },
  //   { image: "bg-[url('./src/assets/bg/bg-1.jpg')]" },
  //   { image: "bg-[url('./src/assets/bg/bg-2.jpg')]" },
  //   { image: "bg-[url('./src/assets/bg/bg-3.jpg')]" },
  //   { image: "bg-[url('./src/assets/bg/bg-4.jpg')]" },
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (bg < bgs.length - 1) setBg((v) => v + 1);
  //     else setBg(0);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, 10 * 1000);
  // }, [bg, bgs.length]);

  if (!editions) return;
  return (
    <section
      id="editions"
      aria-label="Introdução"
      className={`intro text-white flex flex-col items-center justify-center gap-12 max-h-[620px] h-[90vh] md:h-[60vh] lg:h-[75vh] xl:h-[90vh] `}>
      <div className="absolute left-0 top-0 w-full h-full bg-stone-900">
        <div className="w-full h-full bg-[url('./assets/bg/bg-0.jpg')] bg-cover bg-center"></div>
      </div>
      <h1 className="text-5xl md:text-6xl z-20 ">
        Projetarq
        <br />
        Magazine
      </h1>
      <a
        href={editions[0].edition}
        className="z-20  border-2 flex flex-col w-fit h-fit justify-item-center py-1 px-4 border-white md:hover:scale-125 transition">
        <p>Nova</p>
        <p>Edição</p>
      </a>
    </section>
  );
};

export default Intro;
