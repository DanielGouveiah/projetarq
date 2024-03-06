import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { CaretRight } from "@phosphor-icons/react";

const Blog = () => {
  return (
    <div className="bg-emerald-500 bg-radial w-full h-[100vh] grid justify-center items-center">
      <Navbar fixed={false} />
      <div className="grid gap-4">
        <h1>Em breve!</h1>
        <NavLink
          to="/"
          className="text-sky-600 flex items-center gap-2 justify-center">
          Voltar ao inicio <CaretRight />
        </NavLink>
      </div>
    </div>
  );
};

export default Blog;
