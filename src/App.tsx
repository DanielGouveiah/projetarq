import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import ErrorPage from "./pages/ErrorPage";
import FirebaseInit from "./FirebaseInit";
import { IEditions, IPosts } from "./Types/Types";
import { BlogProvider } from "./contexts/BlogContext";
import Loading from "./pages/Blog/Loading";

function App() {
  const [posts, setPosts] = useState<Array<IPosts>>([]);
  const [editions, setEditions] = useState<Array<IEditions>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const firebase = FirebaseInit();

  const loadData = useCallback(async () => {
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
      const data = await loadData();
      setPosts(data.blogs as Array<IPosts>);
      setEditions(data.editions as Array<IEditions>);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white">
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <BlogProvider value={{ posts, editions }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="blog/:blogId?" element={<Blog />} />
              <Route path="404" element={<ErrorPage />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </BrowserRouter>
        </BlogProvider>
      )}
    </div>
  );
}

export default App;
