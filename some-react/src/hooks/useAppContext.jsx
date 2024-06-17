import { createContext, useContext, useState } from "react";

const titleColorContext = createContext();

const useTitleColorContext = () => useContext(titleColorContext);

const AppContext = ({ children }) => {
  const [titleColor, setTitleColor] = useState("");

  return (
    <titleColorContext.Provider value={{ titleColor, setTitleColor }}>
      {children}
    </titleColorContext.Provider>
  );
};

export { AppContext, titleColorContext, useTitleColorContext };
