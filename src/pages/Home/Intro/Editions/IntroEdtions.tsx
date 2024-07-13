import React, { useContext } from "react";
import EditionItem from "./EditionItem";
import { BlogContext } from "../../../../contexts/BlogContext";
import { ArrowDown } from "@phosphor-icons/react";

const IntroEdtions = () => {
  const editions = useContext(BlogContext)!.editions;

  if (!editions) return;
  return (
    <div className="flex flex-col items-center justify-center w-full md:py-0 ">
      <div className="container grid -translate-y-1/4">
        <ul className="editions gap-4 md:gap-10 flex flex-grow-0 flex-nowrap md:grid md:grid-cols-3 overflow-x-scroll md:overflow-x-hidden md:place-self-center pt-4 px-4">
          <EditionItem data={editions[0] ? editions[0] : null} />
          <EditionItem data={editions[1] ? editions[1] : null} />
          <EditionItem data={editions[2] ? editions[2] : null} />
        </ul>
      </div>
      <div className="-translate-y-12 md:hidden">
        <ArrowDown size={32} className=" animate-bounce" />
      </div>
    </div>
  );
};

export default IntroEdtions;
