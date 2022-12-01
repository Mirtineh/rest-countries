import { FunctionComponent } from "react";
import { useLoaderData } from "react-router-dom";
import { CountriesType } from "../routes/root";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";

interface CountryListProps {}

const CountryList: FunctionComponent<CountryListProps> = () => {
  const countriestype = useLoaderData() as CountriesType;
  const countries = countriestype.countries;
  console.log(countries);
  return (
    <>
      <div className="my-8 mx-3">
        <SearchBar />
        {countries.map((country) => {
          return <CountryCard key={country.name.common} country={country} />;
        })}
      </div>
    </>
  );
};

export default CountryList;
