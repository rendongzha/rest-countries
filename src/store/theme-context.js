import { useState, createContext } from "react";

const ThemeContext = createContext({
  darkTheme: false,
  changeTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const context = {
    darkTheme: darkTheme,
    changeTheme: () => {
      setDarkTheme((prevTheme) => !prevTheme);
    },
  };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
