import React from "react";
import { ArrowBendUpLeft, DotsNine } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../utils/ScrollTo";
import LogoSimples from "../../assets/LogoSimples";

interface modal {
  callback: () => void;
}

const links = [
  {
    name: "Sobre",
    target: "about",
  },
  {
    name: "Contatos",
    target: "contacts",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const ModalMenu = ({ callback }: modal) => {
  const [dragging, setDragging] = React.useState(false);
  const menuArea = React.useRef<HTMLInputElement>(null);

  const onMouseMove = React.useCallback(
    (e: MouseEvent) => {
      const slideMenu = (diff: number) => {
        if (menuArea.current) {
          if (diff == 0) {
            menuArea.current.style.transform = `translate(0px, 0px)`;
            return;
          }
          if (diff < 0) {
            menuArea.current.style.transform = `translate(0px, ${diff + 40}px)`;
          }
        }
      };

      const diff = e.clientY - window.innerHeight;
      slideMenu(diff);

      if (!dragging) return;
      e.stopPropagation();
      e.preventDefault();
    },
    [dragging]
  );

  const onMouseUp = React.useCallback(
    (e: MouseEvent) => {
      setDragging(false);
      const diff = e.clientY - window.innerHeight;

      if (menuArea.current)
        if (diff > -400) {
          menuArea.current.style.transform = `translate(0px, 0px)`;
        } else if (diff <= -400) {
          const elementHeight = menuArea.current.offsetHeight;
          menuArea.current.style.transform = `translate(0px, -${elementHeight}px)`;
          setTimeout(() => {
            callback();
          }, 150);
        }

      e.stopPropagation();
      e.preventDefault();
      document.removeEventListener("mousemove", onMouseMove);
    },
    [onMouseMove, callback]
  );

  const menuDragInit = () => {
    setDragging(true);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const menuNav = (scroll?: boolean, target?: string) => {
    callback();
    if (scroll && target) {
      const element = document.getElementById(target);
      if (element) {
        const top = element.getBoundingClientRect().top;
        scrollToTop(top);
      }
    }
  };

  return (
    <div
      className={`flex flex-col fixed bg-stone-900 top-[0px] left-0 w-screen h-screen box-border z-[100] transition-transform duration-75`}
      ref={menuArea}>
      <div className="grid grid-cols-2 justify-between w-full px-6 bg-stone-900">
        <div className="flex items-center justify-start">
          <button
            onClick={() => callback()}
            className="py-6 px-4 text-stone-50 hover:text-red transition-colors duration-700 "
            title="Fechar menu">
            <ArrowBendUpLeft size={32} weight="bold" />
          </button>
        </div>
        <div className="flex justify-end">
          <a href="" title="Logo" className="translate-y-1">
            <LogoSimples small />
          </a>
        </div>
      </div>

      <div className="grid grid-rows-menu gap-1 text-2xl bg-stone-900 w-full h-full px-6 py-2">
        <nav className="grid gap-4">
          {links.map(({ name, path, target }) => {
            return path ? (
              <NavLink
                to={path}
                key={name}
                onClick={() => menuNav()}
                className="flex items-center justify-center rounded-3xl text-red-light">
                {name}
              </NavLink>
            ) : (
              <a
                key={name}
                onClick={() => menuNav(true, target)}
                className="flex items-center justify-center rounded-3xl text-red-light cursor-pointer">
                {name}
              </a>
            );
          })}
        </nav>

        <div
          className=" flex items-center justify-center text-red"
          onMouseDown={() => menuDragInit()}>
          <DotsNine size={64} />
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
