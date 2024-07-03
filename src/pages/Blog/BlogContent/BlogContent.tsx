import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import BlogHeader from "../BlogHeader";
import BlogPosts from "./BlogPosts";
import BlogPage from "./BlogPage";

const BlogContent = () => {
  const param = useParams();
  return (
    <>
      <BlogHeader />
      {param.blogId ? <BlogPage /> : <BlogPosts />}
      <Footer dark blog />
    </>
  );
};

export default BlogContent;
