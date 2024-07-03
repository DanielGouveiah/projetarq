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
}

const LastBlog = ({ value, color }: Post) => {
  return (
    <Link
      to={`/blog/${value.id}`}
      state={value}
      className="py-12 px-2 sm:px-10 md:px-20 bg-blog">
      <p className="text-stone-500 text-2xl text-start py-6 sm:hidden">
        Último post
      </p>
      <div className="relative grid md:grid-cols-4 box-border">
        <div
          className="block w-full h-[40vh] md:h-[100vh] bg-stone-400 md:col-span-3 bg-no-repeat bg-cover bg-center grayscale rounded"
          style={{ backgroundImage: `url("${value.header_image}")` }}
        />
        <div
          className={`grid gap-2 ${color} text-white md:absolute md:max-w-[400px] text-start right-10 top-1/3 p-4 rounded shadow-blog`}>
          <h2 className="text-3xl ">{value.title}</h2>
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

export default LastBlog;
