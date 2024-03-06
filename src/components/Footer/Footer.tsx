import { NavLink } from "react-router-dom";
import LogoSimples from "../../assets/LogoSimples";
import { scrollToTop } from "../../utils/ScrollTo";

const Footer = () => {
  return (
    <footer className="sticky bg-red-dark border-t-2 border-red py-12 md:px-20 md:py-6 flex items-center flex-col gap-4 md:flex-row justify-between ">
      <NavLink to="/" onClick={() => scrollToTop(0)}>
        <LogoSimples />
      </NavLink>
      <p className="text-stone-400">
        Projetarq Magazine © Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
