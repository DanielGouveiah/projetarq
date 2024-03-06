import About from "./About";
import Contacts from "./Contacts";
import Signature from "./Signature";

const Main = () => {
  return (
    <main className="z-50 sticky shadow-main border-t-2 border-red-dark home-main ">
      <Signature />
      <About />
      <Contacts />
    </main>
  );
};

export default Main;
