import { List } from "@phosphor-icons/react";

interface menu {
  callback: () => void;
}
const MobileMenu = ({ callback }: menu) => {
  return (
    <div className="flex md:hidden justify-end">
      <button
        type="button"
        title="botão de menu"
        onClick={() => callback()}
        className="text-stone-50">
        <List size={32} weight="bold" />
      </button>
    </div>
  );
};

export default MobileMenu;
