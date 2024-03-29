import React from "react";
import Footer from "../../components/Footer/Footer";
import Intro from "./Intro";
import Main from "./Main";
import Navbar from "../../components/Navbar/Navbar";
import ModalMenu from "../../components/Navbar/ModalMenu";
import { showOnScroll } from "../../utils/showOnScroll";

const Home = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const ChangeIsOpen = () => {
    setMenuOpen(!menuOpen);
  };

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "8px";
    } else {
      document.body.style.overflow = "initial";
      document.body.style.paddingRight = "0px";
    }
  }, [menuOpen]);

  React.useEffect(() => {
    showOnScroll("data-animate");
  });

  return (
    <>
      <Navbar fixed={true} callback={ChangeIsOpen} />
      <Intro />
      <Main />
      <Footer />
      {menuOpen && <ModalMenu callback={ChangeIsOpen} />}
    </>
  );
};

export default Home;
