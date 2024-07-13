import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import MobileMenu from "./MobileMenu";
// import { scrollToTop } from "../../utils/ScrollTo";

interface nav {
  callback: () => void;
}

const Navbar = ({ callback }: nav) => {
  // const scrollPage = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     const top = element.getBoundingClientRect().top;
  //     scrollToTop(top);
  //     console.log(top);
  //   }
  // };

  return (
    <header
      className={`z-50 grid w-full absolute bg-zinc-900 bg-opacity-30 backdrop-blur-md justify-items-center border-b border-black`}>
      <nav className="container grid grid-cols-2 md:grid-cols-3 items-center px-4 md:px-0 justify-between w-full">
        <MobileMenu callback={callback} />

        <NavLink
          to="/"
          className="flex justify-end md:justify-center md:hover:scale-110 transition-all">
          <img
            src={logo}
            alt=""
            className="block max-w-[80px] md:max-w-[60px] lg:max-w-[80px] drop-shadow-logo"
          />
        </NavLink>

        <NavLink
          to="/blog"
          className="justify-self-end hidden md:flex items-center text-lg text-white bg-orange-600 my-4 px-12 py-1 rounded-md md:hover:scale-110 transition-all">
          Blog
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
