import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import CountryList from "../components/CountryList";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

interface RootProps {}

const Root: FunctionComponent<RootProps> = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Root;
