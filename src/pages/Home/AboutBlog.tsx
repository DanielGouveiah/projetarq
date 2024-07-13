import React, { useContext } from "react";
import LastBlog from "../Blog/LastBlog";
import { BlogContext } from "../../contexts/BlogContext";
import { ArrowRight } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const AboutBlog = () => {
  const posts = useContext(BlogContext)!.posts;
  return (
    <section className="flex justify-center h-fit">
      <div className="container px-4  pb-12 md:pb-0">
        <div className="md:-translate-y-24">
          <LastBlog
            value={posts[0]}
            color="bg-rose-500 hover:text-rose-900 border-rose-500"
            blog={false}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <NavLink
            to={"/blog"}
            className="w-fit md:-translate-y-14 bg-rose-500 text-white flex gap-2 items-center py-2 px-6 rounded-lg shadow-lg hover:gap-4 hover:scale-110 transition-all">
            Conheça nosso Blog
            <ArrowRight size={20} />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutBlog;
