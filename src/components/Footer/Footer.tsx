import { NavLink } from "react-router-dom";
import LogoSimples from "../../assets/LogoSimples";
import { scrollToTop } from "../../utils/ScrollTo";

interface Ifooter {
  dark?: boolean;
  blog?: boolean;
}

const Footer = ({ dark = false, blog = false }: Ifooter) => {
  return (
    <footer
      className={`sticky ${
        dark ? "bg-black border-sky-900" : " bg-red-dark border-red "
      } border-t-2 py-12 md:px-20 md:py-6 flex items-center flex-col gap-4 md:flex-row justify-between `}>
      <NavLink to={blog ? "/blog" : "/"} onClick={() => scrollToTop(0)}>
        <LogoSimples />
      </NavLink>
      <p className="text-stone-400">
        <a
          href="https://www.instagram.com/projet.arq_magazine/"
          target="_blank"
          className="hover:text-amber-500">
          Projetarq Magazine
        </a>{" "}
        © Alguns direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
