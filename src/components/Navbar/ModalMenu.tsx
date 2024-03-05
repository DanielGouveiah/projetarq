import { DotsNine } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

interface modal {
  callback: () => void;
}

const links = [
  {
    name: "Contatos",
    path: "/contatos",
  },
  {
    name: "Sobre",
    path: "/sobre",
  },
  {
    name: "Edições",
    path: "/edicoes",
  },
  {
    name: "Publicações",
    path: "/publicacoes",
  },
];

const ModalMenu = ({ callback }: modal) => {
  return (
    <div className="flex flex-col absolute top-0 left-0 w-screen h-screen box-border">
      <div className="flex justify-end w-full py-2 px-6 bg-stone-900">
        <button onClick={() => callback()} className="bg-stone-400">
          X
        </button>
      </div>

      <div className="grid grid-rows-menu gap-1 text-2xl bg-stone-900 w-full h-full px-6 py-2">
        <nav className="grid gap-4">
          {links.map(({ name, path }) => {
            return (
              <NavLink
                to={path}
                key={name}
                onClick={() => callback()}
                className="flex items-center justify-center rounded-3xl text-red-light">
                {name}
              </NavLink>
            );
          })}
        </nav>

        <div className="bg-sky-600 flex items-center justify-center text-red">
          <DotsNine size={64} />
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
