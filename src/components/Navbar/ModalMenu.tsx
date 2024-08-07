import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, HandGrabbing } from "@phosphor-icons/react";
import { NavLink, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils/ScrollTo";

interface modal {
  callback: () => void;
}

const ModalMenu = ({ callback }: modal) => {
  const links = [
    {
      name: "Edições",
      target: "editions",
    },
    {
      name: "Social",
      target: "social",
    },
    {
      name: "Sobre",
      target: "about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  const [dragging, setDragging] = React.useState(false);
  const [handVisible, setHandVisible] = React.useState(false);
  const navigate = useNavigate();
  const menuArea = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHandVisible((last) => !last);
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  });

  const onTouchMove = React.useCallback(
    (e: TouchEvent) => {
      const slideMenu = (diff: number) => {
        if (menuArea.current) {
          if (diff >= 0) {
            menuArea.current.style.transform = `translate(0px, 0px)`;
            return;
          }
          if (diff < 0) {
            menuArea.current.style.transform = `translate(0px, ${diff + 20}px)`;
          }
        }
      };

      const diff = e.touches[0].screenY - window.innerHeight;
      slideMenu(diff);

      if (!dragging) return;
      e.stopPropagation();
      e.preventDefault();
    },
    [dragging]
  );

  const onMouseMove = React.useCallback(
    (e: MouseEvent) => {
      const slideMenu = (diff: number) => {
        if (menuArea.current) {
          if (diff >= 0) {
            menuArea.current.style.transform = `translate(0px, 0px)`;
            return;
          }
          if (diff < 0) {
            menuArea.current.style.transform = `translate(0px, ${diff + 20}px)`;
          }
        }
      };

      const diff = e.screenY - window.innerHeight;
      slideMenu(diff);

      if (!dragging) return;
      e.stopPropagation();
      e.preventDefault();
    },
    [dragging]
  );

  const onTouchEnd = React.useCallback(
    (e: TouchEvent) => {
      setDragging(false);
      const diff = e.changedTouches[0].screenY - window.innerHeight;
      if (menuArea.current)
        if (diff > -window.innerHeight * 0.5) {
          menuArea.current.style.transform = `translate(0px, 0px)`;
        } else if (diff < -window.innerHeight * 0.5) {
          const elementHeight = menuArea.current.offsetHeight;
          menuArea.current.style.transform = `translate(0px, -${elementHeight}px)`;
          setTimeout(() => {
            callback();
          }, 150);
        }
      e.stopPropagation();
      e.preventDefault();
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    },
    [onTouchMove, callback]
  );

  const onMouseUp = React.useCallback(
    (e: MouseEvent) => {
      setDragging(false);
      const diff = e.screenY - window.innerHeight;
      if (menuArea.current)
        if (diff > -window.innerHeight * 0.5) {
          menuArea.current.style.transform = `translate(0px, 0px)`;
        } else if (diff < -window.innerHeight * 0.5) {
          const elementHeight = menuArea.current.offsetHeight;
          menuArea.current.style.transform = `translate(0px, -${elementHeight}px)`;
          setTimeout(() => {
            callback();
          }, 150);
        }
      e.stopPropagation();
      e.preventDefault();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    },
    [onMouseMove, callback]
  );

  const touchDragInit = () => {
    setDragging(true);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
  };

  const mouseDragInit = () => {
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
      return;
    }

    navigate("/blog");
  };

  return (
    <div
      className={`modalMenu flex flex-col fixed top-[0px] left-0 max-h-svh w-screen h-screen box-border z-[100] transition-transform duration-75`}
      ref={menuArea}>
      <div className="grid grid-cols-2 justify-between w-full px-6 bg-black">
        <div className="flex items-center justify-start">
          <button
            onClick={() => callback()}
            className="py-6 pr-6 pl-1 text-stone-50 bg-transparent hover:scale-125 transition duration-400 "
            title="Fechar menu">
            <ArrowLeft size={24} weight="bold" />
          </button>
        </div>
        <div className="flex justify-end ">
          <a
            title="Logo"
            className="translate-y-1 max-w-[80px] py-4 md:hover:scale-110 transition-all cursor-pointer">
            <img src="/src/assets/logo.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="grid items-center grid-rows-2 gap-10 text-2xl bg-black w-full h-full px-6 py-2 box-border">
        <nav className="grid gap-1 max-h-[40vh] select-none text-white">
          {links.map(({ name, path, target }) => {
            return path ? (
              <NavLink
                to={path}
                key={name}
                onClick={() => menuNav()}
                className="flex text-center items-center border-b-2  border-transparent py-6 justify-between md:justify-center hover:scale-110 transition-all">
                {name}
                <ArrowRight size={24} className="block md:hidden" />
              </NavLink>
            ) : (
              <a
                key={name}
                onClick={() => menuNav(true, target)}
                className="flex text-center items-center py-6 border-b-2  border-stone-900 hover:border-stone-800 cursor-pointer justify-between md:justify-center hover:scale-110 transition-all">
                {name}
                <ArrowRight size={24} className="block md:hidden" />
              </a>
            );
          })}
        </nav>

        <div
          className=" flex items-center justify-center text-stone-50 h-1/2 self-end"
          onMouseDown={() => mouseDragInit()}
          onTouchStart={() => touchDragInit()}>
          <div
            className={`${
              handVisible ? "opacity-100" : "opacity-0"
            } transition-opacity animate-bounce duration-700`}>
            <HandGrabbing size={48} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
