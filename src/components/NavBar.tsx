import {
  faClose,
  faCloudMoon,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <>
      <div className="flex justify-between py-6 bg-dark-blue text-white px-4 sm:px-14">
        <h1 className="font-semibold">Where in the world?</h1>
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faMoon} />
          <p className="">Dark Mode</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
