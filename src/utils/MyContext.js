import { createContext } from "react";

//context
export const MainContext = createContext();

export const MyContext = ({ children }) => {

  return (
    <MainContext.Provider>{children}</MainContext.Provider>
  );
};
