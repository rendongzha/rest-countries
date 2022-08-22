import { useContext } from "react";
import ThemeContext from "../store/theme-context";
import { Link } from "react-router-dom";

import { BsMoon, BsFillMoonFill } from "react-icons/bs";
import classes from "./Header.module.css";

const Header = () => {
  const { darkTheme, changeTheme } = useContext(ThemeContext);

  return (
    <header className={classes.header}>
      <h3>
        <Link to="/" className={classes.link}>
          Where in the world?
        </Link>
      </h3>
      <div>
        <button onClick={changeTheme} className={classes.btn}>
          {!darkTheme && <BsMoon />}
          {darkTheme && <BsFillMoonFill />}
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
