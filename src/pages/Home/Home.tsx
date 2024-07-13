import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ModalMenu from "../../components/Navbar/ModalMenu";
import Intro from "./Intro/Intro";
import IntroEdtions from "./Intro/Editions/IntroEdtions";
import Social from "./Social";
import Footer from "../../components/Footer/Footer";
import Newsletter from "./Newsletter";
import About from "./About";
import AboutBlog from "./AboutBlog";

const Home = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const ChangeIsOpen = () => {
    setMenuOpen((v) => !v);
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

  // React.useEffect(() => {
  //   showOnScroll("data-animate");
  // });

  return (
    <>
      <Navbar callback={ChangeIsOpen} />
      <Intro />
      <IntroEdtions />
      <Social />
      <Newsletter />
      <AboutBlog />
      <About />
      <Footer dark />
      {menuOpen && <ModalMenu callback={ChangeIsOpen} />}
    </>
  );
};

export default Home;
