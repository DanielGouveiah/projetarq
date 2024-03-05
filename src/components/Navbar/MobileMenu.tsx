import { List } from "@phosphor-icons/react";
import React from "react";
import ModalMenu from "./ModalMenu";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const ChangeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex md:hidden justify-end">
      <button
        type="button"
        title="botão de menu"
        onClick={() => ChangeIsOpen()}
        className="text-stone-50">
        <List size={32} weight="bold" />
      </button>

      {isOpen && <ModalMenu callback={ChangeIsOpen} />}
    </div>
  );
};

export default MobileMenu;
