import { useEffect } from "react";
import BlogContent from "./BlogContent/BlogContent";
import { scrollToTop } from "../../utils/ScrollTo";

const Blog = () => {
  useEffect(() => {
    scrollToTop(0);
    document.body.style.overflow = "initial";
    document.body.style.paddingRight = "0px";
  }, []);

  return (
    <div className="flex justify-center flex-col bg-white">
      <div className="flex justify-center flex-col">
        <BlogContent />
      </div>
    </div>
  );
};

export default Blog;
