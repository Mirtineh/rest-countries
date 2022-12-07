import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useContext } from "react";
import ThemeContext from "../context/themeContext";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="flex justify-between py-6 bg-white  dark:bg-dark-blue px-4 sm:px-14">
        <h1 className="font-semibold">Where in the world?</h1>
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon
            icon={isDark ? solidMoon : regularMoon}
            onClick={() => toggleTheme(!isDark)}
          />
          <p className="">Dark Mode</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
