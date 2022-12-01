import { FunctionComponent } from "react";
import { LoaderFunction, Outlet, useLoaderData } from "react-router-dom";
import CountryList from "../components/CountryList";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

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
  region: string;
  subRegion: string;
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
}
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
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Root;
