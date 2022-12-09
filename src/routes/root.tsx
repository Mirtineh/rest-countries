import { FunctionComponent, useContext, useState } from "react";
import {
  LoaderFunction,
  Outlet,
  ScrollRestoration,
  useLoaderData,
} from "react-router-dom";
import axios from "axios";

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
export const rootLoader = async (): Promise<CountryType[]> => {
  try {
    const { data } = await axios.get<CountryType[]>(
      "https://restcountries.com/v3.1/all"
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      throw Error();
    } else {
      console.log("unexpected error: ", error);
      throw Error();
    }
  }
};

const Root: FunctionComponent<RootProps> = () => {
  const [isDark, setIsDark] = useState(false);
  const value = { isDark, toggleTheme: setIsDark };
  return (
    <>
      <ThemeContext.Provider value={value}>
        <div className={"font-space " + (isDark ? "dark" : "")}>
          <div className="bg-very-light-gray dark:bg-very-dark-blue text-very-dark-blue-2 dark:text-white min-h-screen">
            <div className="flex flex-col min-h-screen">
              <NavBar />
              <Outlet />
            </div>
          </div>
          <ScrollRestoration />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Root;
