import { NavLink, useNavigate } from "react-router-dom";
import notFound from "../assets/notfound.svg";
import React from "react";

const ErrorPage = () => {
  const [time, setTime] = React.useState(10);
  const navigate = useNavigate();

  const countDown = () => {
    const interval = setInterval(() => {
      if (time <= 1) {
        clearInterval(interval);
        navigate("/");
        return;
      }

      setTime(time - 1);
    }, 1000);
    return interval;
  };

  React.useEffect(() => {
    const interval = countDown();

    return () => clearInterval(interval);
  });

  return (
    <div className="bg-radial h-screen grid justify-items-center items-center box-border ">
      <div className="grid gap-10 py-20 max-w-[400px] justify-items-center ">
        <NavLink to="/">
          <img
            src={notFound}
            alt="Pagina não encontrada"
            className="sm:max-w-lg md:max-w-xs"
          />
        </NavLink>
        <div>
          <h1 className=" text-7xl sm:text-8xl">404</h1>
          <h2 className="text-2xl">Página não encontrada</h2>

          <NavLink
            to="/"
            className="text-sky-600 flex items-center gap-2 justify-center">
            Voltar ao inicio
          </NavLink>
        </div>

        <div className="max-w-[400px] flex flex-col gap-4 justify-self-center text-lg">
          <p>Redirecionando para o início em {time}s...</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
