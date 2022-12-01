import { FunctionComponent } from "react";
import CountryList from "../components/CountryList";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <CountryList />
    </>
  );
};

export default Home;