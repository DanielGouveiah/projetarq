import { Link } from "react-router-dom";
import Logo from "../../assets/logoBlog.svg?react";
import { HouseSimple } from "@phosphor-icons/react";

const BlogHeader = () => {
  return (
    <header className="flex justify-between items-center bg-black text-2xl py-2 sm:py-4 px-2 md:px-6">
      <Link to="/blog" className="flex items-center gap-2 text-stone-700 ">
        <div className=" antialiased sm:px-2 py-2 rounded-full">
          <Logo className="min-w-[120px] md:min-w-[160px] w-[10vw] h-auto" />
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/projet.arq_magazine/"
          target="_blank"
          className="text-sm md:text-lg text-stone-50 hover:text-amber-500">
          Let's talk
        </a>
        <Link to={"/"} title="Página Inicial">
          <HouseSimple size={32} className="fill-stone-50 hover:fill-sky-500" />
        </Link>
      </div>
    </header>
  );
};

export default BlogHeader;
