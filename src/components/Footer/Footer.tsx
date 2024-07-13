import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../utils/ScrollTo";
import logo from "../../assets/logo.svg";

interface Ifooter {
  dark?: boolean;
  blog?: boolean;
}

const Footer = ({ dark = false, blog = false }: Ifooter) => {
  return (
    <footer
      className={`${
        dark ? "bg-black border-sky-900" : " bg-red-dark border-red "
      } border-t-2 py-12 md:px-20 md:py-6 flex items-center flex-col gap-4 md:flex-row justify-between `}>
      <NavLink to={blog ? "/blog" : "/"} onClick={() => scrollToTop(0)}>
        <img
          src={logo}
          alt=""
          className=" block min-w-[60px] sm:max-w-[32px] md:max-w-[60px] lg:max-w-[80px] drop-shadow-logo md:hover:scale-110 transition-all"
        />
      </NavLink>
      <p className="text-stone-400">
        <a
          href="https://www.instagram.com/projet.arq_magazine/"
          target="_blank"
          className="hover:text-amber-500 md:hover:scale-110 transition-all">
          Projetarq Magazine
        </a>{" "}
        © Alguns direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
