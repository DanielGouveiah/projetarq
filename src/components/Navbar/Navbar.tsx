import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import logoSm from "../../assets/logoSm.png";
import { CaretRight } from "@phosphor-icons/react";
import MobileMenu from "./MobileMenu";
import { scrollToTop } from "../../utils/ScrollTo";

interface nav {
  fixed: boolean;
}

interface links {
  title: string;
  id: string;
  nav: boolean;
}

const Navbar = ({ fixed = false }: nav) => {
  const links = [
    { title: "Sobre", id: "about", nav: false },
    { title: "Contatos", id: "contacts", nav: false },
    { title: "Blog", id: "Blog", nav: true },
  ];

  const scrollPage = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top;
      scrollToTop(top);
      console.log(top);
    }
  };

  return (
    <header
      className={`z-50 grid ${
        fixed ? "fixed" : "absolute top-0"
      } grid-flow-col grid-cols-2 lg:grid-cols-3 w-full items-center py-1 px-2 sm:py-2 sm:px-6 md:px-12 xl:px-24`}>
      <nav className="justify-self-start hidden lg:flex gap-4 text-lg text-stone-800">
        {links.map(({ title, id, nav }: links) => {
          return (
            <div>
              {!nav ? (
                <a onClick={() => scrollPage(id)} className="cursor-pointer">
                  {title}
                </a>
              ) : (
                <NavLink to="/blog">{title}</NavLink>
              )}
            </div>
          );
        })}
      </nav>

      <NavLink to="/" className="flex justify-start lg:justify-center">
        <img
          src={logo}
          alt=""
          className="hidden md:block md:max-w-[140px] drop-shadow-logo"
        />

        <img
          src={logoSm}
          alt=""
          className="block md:hidden aspect-square max-w-[48px] sm:max-w-[60px] drop-shadow-logo"
        />
      </NavLink>

      <NavLink
        to="/contatos"
        className="justify-self-end hidden md:flex items-center gap-1 text-xl font-regular text-red hover:text-red-dark">
        <span className="relative after:bottom-0.5 after:block after:w-2/3 after:h-[2px] after:bg-current after:absolute after:rounded-md">
          Começar
        </span>
        <CaretRight weight="bold" />
      </NavLink>

      <MobileMenu />
    </header>
  );
};

export default Navbar;
