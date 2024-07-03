import { ArrowLeft, ArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useLocation } from "react-router-dom";

interface IPost {
  title?: string;
  author?: string;
  header_image?: string;
  read_time?: string;
  id?: string;
  content?: [object: IContent, object: IContent];
  tags?: [string];
  last_update?: { seconds: number };
  created_at?: { seconds: number };
}

interface IContent {
  value: string;
  type: string;
}

const BlogPage = () => {
  const [data, setData] = useState<IPost>({});
  const [showReturn, setShowReturn] = useState<boolean>(false);

  const { state } = useLocation();
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth" });
    setData(state);
  }, [state]);

  useEffect(() => {
    const updateReturn = () => {
      if (window.scrollY > 100) setShowReturn(true);
      else setShowReturn(false);
    };
    document.addEventListener("scroll", updateReturn);
    return () => document.removeEventListener("scroll", updateReturn);
  }, []);

  const getDate = () => {
    if (data.created_at) {
      const date = new Date(data.created_at.seconds * 1000);

      const formatedDate = date.toLocaleDateString("pt-br", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return formatedDate;
    }
  };

  if (!data) <p>Loading...</p>;
  return (
    <div className="flex justify-center flex-col bg-white">
      <div className="flex justify-center flex-col">
        <div className="grid justify-center py-12 px-2 sm:px-10 md:px-20 w-full ">
          <div className="relative grid box-border justify-items-center gap-12">
            <div className="w-full flex flex-col items-center">
              <div
                className="block w-full h-[20vh] md:h-[20vh] bg-stone-400 bg-no-repeat bg-cover bg-center grayscale rounded shadow-md my-4"
                style={{ backgroundImage: `url("${data.header_image}")` }}
              />

              <h2 className="grid justify-items-center gap-6 text-3xl md:text-4xl text-stone-900 font-semibold max-w-[32ch] after:block after:w-1/3 after:h-2 after:rounded after:bg-cyan-600">
                {data.title}
              </h2>
            </div>

            <div className="markdown relative text-start md:max-w-[80vw] lg:max-w-[60vw]">
              <ReactMarkdown
                children={
                  data.content
                    ? data.content!.find((c) => c.type == "text")!.value
                    : ""
                }
              />
            </div>
          </div>
          <div className="">
            <ul className="pt-12 px-4 flex flex-wrap gap-2 justify-center text-sm md:text-md">
              {data.tags !== undefined &&
                data.tags.map((tag, id) => (
                  <li
                    className="bg-stone-300 text-stone-900 py-1 px-2 rounded-full"
                    key={id}>
                    {tag}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="bg-sky-900 py-4 px-2 text-stone-50">
          <p className="text-md">
            Por <span className="font-semibold">{data.author}</span>
          </p>
          <p className="text-sm">Publicado em: {getDate()}</p>
        </div>
      </div>

      <Link
        to="/blog"
        className={`hidden md:block bg-black w-fit fixed aspect-square z-50 top-1/2 ${
          showReturn ? "left-10" : "-translate-x-10 opacity-0"
        } p-2 rounded-full shadow-md transition`}>
        <ArrowLeft size={24} color="white" />
      </Link>
      <Link
        to="/blog"
        className={`md:hidden bg-black w-fit fixed aspect-square z-50 top-10 ${
          showReturn ? "left-5" : "-translate-x-10 opacity-0"
        } p-2 rounded-full shadow-md transition`}>
        <ArrowLeft size={24} color="white" />
      </Link>

      <button
        onClick={() => {
          document.body.scrollIntoView({ behavior: "smooth" });
        }}
        className={` bg-blue-900 w-fit fixed aspect-square z-50 bottom-10  right-5 ${
          showReturn ? " " : "translate-x-40 opacity-0"
        } p-2 rounded-full shadow-md transition`}>
        <ArrowUp size={24} color="white" />
      </button>
    </div>
  );
};

export default BlogPage;
