import { useEffect } from "react";
import LogoSimples from "../../assets/LogoSimples";
import { Spinner } from "@phosphor-icons/react";

const BlogLoading = ({ isLoading = true }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "8px";
    } else {
      document.body.style.overflow = "initial";
      document.body.style.paddingRight = "0px";
    }
  });

  return (
    <div
      className={`fixed z-50 bg-stone-900 top-0 ${
        isLoading ? "left-0" : "-translate-x-full"
      } left-0 w-screen h-screen box-border grid justify-center items-center transition duration-700`}>
      <div className="grid justify-items-center items-center gap-4 md:gap-12 ">
        <LogoSimples extraLarge light />
        <Spinner size={32} className="animate-spin text-stone-400" />
      </div>
    </div>
  );
};

export default BlogLoading;
