import { FunctionComponent } from "react";
import { Link, useLoaderData } from "react-router-dom";
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
        <div className="grid grid-cols-1 gap-10 justify-items-center mt-7">
          {countries.map((country) => {
            return (
              <Link to={`countries/${country.name.common}`}>
                <CountryCard key={country.name.common} country={country} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CountryList;
