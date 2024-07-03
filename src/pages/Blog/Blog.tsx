import { useCallback, useEffect, useState } from "react";

import BlogContent from "./BlogContent/BlogContent";
import BlogLoading from "./BlogLoading";
import FirebaseInit from "../../FirebaseInit";
import BlogContext from "../../contexts/BlogContext";

interface IPosts {
  title?: string;
  header_image?: string;
  read_time?: string;
  id?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Array<IPosts>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const firebase = FirebaseInit("blog");

  const loadBlogs = useCallback(async () => {
    setIsLoading(true);
    const data = await firebase.init().then((r) => r);
    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(timeout);
    }, 2500);
    return data;
  }, [firebase]);

  useEffect(() => {
    (async () => {
      const data = await loadBlogs();
      setPosts(data as Array<object>);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center flex-col bg-white">
      <BlogLoading isLoading={isLoading} />
      <div className="flex justify-center flex-col">
        <BlogContext.Provider value={posts}>
          <BlogContent />
        </BlogContext.Provider>
      </div>
    </div>
  );
};

export default Blog;
