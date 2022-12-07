import { FunctionComponent, useContext, useState } from "react";
import { LoaderFunction, Outlet, useLoaderData } from "react-router-dom";
import CountryList from "../components/CountryList";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import ThemeContext from "../context/themeContext.js";
interface RootProps {}

export interface CountryType {
  name: {
    common: string;
    nativeName: {
      [index: string]: {
        common: string;
      };
    };
  };
  population: number;
  capital: string[];
  region: region;
  subregion: string;
  tld: string[];
  currencies: {
    [index: string]: {
      name: string;
    };
  };
  languages: {
    [index: string]: string;
  };
  borders: string[];
  flags: {
    png: string;
    svg: string;
  };
}
export type region = "Asia" | "Africa" | "Americas" | "Europe" | "Oceania" | "";
export interface CountriesType {
  countries: CountryType[];
}
export const rootLoader = async (): Promise<CountriesType> => {
  const result = await fetch("https://restcountries.com/v3.1/all");
  if (!result.ok) throw Error("Something went wrong");
  const countries = await result.json();
  return { countries };
};

const Root: FunctionComponent<RootProps> = () => {
  const [isDark, setIsDark] = useState(false);
  const value = { isDark, toggleTheme: setIsDark };
  return (
    <>
      <ThemeContext.Provider value={value}>
        <div className={"font-space " + (isDark ? "dark" : null)}>
          <div className="bg-very-light-gray dark:bg-very-dark-blue text-very-dark-blue-2 dark:text-white min-h-screen">
            <NavBar />
            <Outlet />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Root;
