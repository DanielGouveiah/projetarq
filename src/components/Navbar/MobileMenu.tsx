import { List } from "@phosphor-icons/react";

interface menu {
  callback: () => void;
}
const MobileMenu = ({ callback }: menu) => {
  return (
    <button
      type="button"
      title="botão de menu"
      onClick={() => callback()}
      className="text-stone-50 py-4 flex justify-start">
      <List
        size={24}
        weight="bold"
        className="md:hover:scale-110 transition-all"
      />
    </button>
  );
};

export default MobileMenu;
