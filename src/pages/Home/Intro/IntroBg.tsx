import React from "react";

interface IIntroBg {
  item: { image: string };
  active: number;
  index: number;
}

const IntroBg = ({ item, active, index }: IIntroBg) => {
  return (
    <div
      className={`${item.image} ${
        active == index ? "block" : "hidden"
      } w-full h-full bg-cover bg-center transition-all`}
    />
  );
};

export default IntroBg;
