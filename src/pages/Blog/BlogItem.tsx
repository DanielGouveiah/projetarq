import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

interface Post {
  value: {
    title?: string;
    header_image?: string;
    read_time?: string;
    id?: string;
    author?: string;
  };
  color: string;
  lastOne: boolean;
}
const BlogItem = ({ value, color, lastOne }: Post) => {
  return (
    <Link
      to={`/blog/${value.id}`}
      state={value}
      className={`grid ${lastOne ? "col-span-full justify-center" : " "}`}>
      <div
        className={`grid grid-rows-items md:grid-rows-2 box-border w-full ${
          lastOne ? "max-w-[560px]" : ""
        }`}>
        <div
          className={`block w-full md:max-h-[600px] bg-stone-400 bg-no-repeat bg-cover bg-center grayscale rounded shadow-blog`}
          style={{ backgroundImage: `url("${value.header_image}")` }}
        />
        <div
          className={`grid gap-2 ${color} text-stone-100 text-start md:right-1/4 md:top-1/3 py-4 px-6 rounded shadow-blogItem`}>
          <h2 className="text-2xl ">{value.title}</h2>
          <span>Tempo de leitura: {value.read_time} minutos</span>
          <span>
            Por <span className="font-semibold">{value.author}</span>
          </span>

          <ArrowRight size={32} className="justify-self-end" />
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
