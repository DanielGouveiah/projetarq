import { NavLink } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";
import LogoSimples from "../assets/LogoSimples";

const Blog = () => {
  return (
    <div className="bg-radial w-screen h-screen grid justify-items-center items-center box-content bg-red">
      <div className="grid gap-10 py-20 max-w-[400px] justify-items-center ">
        <NavLink to="/">
          <LogoSimples dark large />
        </NavLink>
        <div>
          <h1>Em breve!</h1>
          <NavLink
            to="/"
            className="text-sky-600 flex items-center gap-2 justify-center">
            Voltar ao inicio <CaretRight />
          </NavLink>
        </div>

        <div className="max-w-[400px] justify-self-center">
          <p>Nosso blog ainda está em desenvolvimento!</p>
          <p>Enquanto isso, verifique nossas redes sociais.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
