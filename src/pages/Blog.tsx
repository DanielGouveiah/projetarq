import { NavLink } from "react-router-dom";
import LogoSimples from "../assets/LogoSimples";

const Blog = () => {
  return (
    <div className="bg-radial h-screen grid justify-items-center items-center box-border ">
      <div className="grid gap-10 py-20 max-w-[400px] justify-items-center ">
        <NavLink to="/">
          <LogoSimples dark large />
        </NavLink>
        <div>
          <h1>Em breve!</h1>

          <NavLink
            to="/"
            className="text-sky-600 flex items-center gap-2 justify-center">
            Voltar ao inicio
          </NavLink>
        </div>

        <div className="max-w-[400px] flex flex-col gap-4 justify-self-center text-lg">
          <p>
            Nosso blog ainda está em desenvolvimento! Enquanto isso, verifique
            nossas redes sociais.
          </p>

          <div className="flex justify-center">
            <a
              rel="noopener"
              href="https://www.instagram.com/projet.arq_magazine/"
              target="_blank"
              className="bg-red py-2 px-4 rounded-full text-lg md:text-xl text-stone-50 hover:text-white hover:bg-red-dark transition-colors">
              Siga o instagram do projeto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
