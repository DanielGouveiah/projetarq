import { createContext, ReactNode } from "react";
import { IPosts, IEditions } from "../Types/Types";

export const BlogContext = createContext<IData | undefined>(undefined);

interface IData {
  posts: IPosts[];
  editions: IEditions[];
}

interface IBlogProvider {
  children: ReactNode;
  value: IData;
}

export const BlogProvider = ({ children, value }: IBlogProvider) => {
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
