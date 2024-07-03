import SearchForm from "../SearchForm";
import LastBlog from "../LastBlog";
import BlogItem from "../BlogItem";
import { scrollToTop } from "../../../utils/ScrollTo";

import { useContext } from "react";
import BlogContext from "../../../contexts/BlogContext";

const BlogPosts = () => {
  const posts = useContext(BlogContext);

  const colors = [
    "bg-cyan-600 hover:text-cyan-900 border-cyan-600",
    "bg-teal-600 hover:text-teal-900 border-teal-600",
    "bg-amber-600 hover:text-amber-900 border-amber-600",
    "bg-indigo-600 hover:text-indigo-900 border-indigo-600",
    "bg-purple-600 hover:text-purple-900 border-purple-600",
    "bg-green-600 hover:text-green-900 border-green-600",
    "bg-sky-600 hover:text-sky-900 border-sky-600",
    "bg-blue-600 hover:text-blue-900 border-blue-600",
  ];

  const getRandColor = () => {
    const rand = Math.floor(Math.random() * colors.length);
    const color = colors[rand];
    colors.splice(rand, 1);
    return color;
  };

  if (!posts.length) return <p>Loading</p>;
  return (
    <main className="grid w-full">
      <SearchForm />

      <section className="grid">
        <LastBlog value={posts[0]} color={getRandColor()} />

        <div className="grid grid-cols-1 w-full md:grid-cols-2 py-12  justify-between gap-4 md:gap-20 px-6 sm:px-10 md:px-32 bg-white">
          <p className="md:col-span-2 text-2xl">Todos os posts</p>
          {posts.map((post: object, id: number) => {
            const isPair = posts.length % 2 == 0;
            const lastOne = id == posts.length - 1;
            return (
              <BlogItem
                value={post}
                key={id}
                color={getRandColor()}
                lastOne={!isPair ? lastOne : false}
              />
            );
          })}

          <a
            className="sm:hidden text-blue-600 underline underline-offset-4 font-semibold py-6"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop(0);
            }}>
            Para o Topo
          </a>
        </div>
      </section>
    </main>
  );
};

export default BlogPosts;
