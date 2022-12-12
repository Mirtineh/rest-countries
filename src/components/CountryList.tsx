import { FunctionComponent, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CountryType, region } from "../routes/root";
import CountryCard from "./CountryCard";
import NoResultFound from "./NoResulFound";
import SearchBar from "./SearchBar";

interface CountryListProps {}

const CountryList: FunctionComponent<CountryListProps> = () => {
  const countries = useLoaderData() as CountryType[];
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState<region>("");

  const filteredCountries = countries.filter((country) => {
    if (region === "") {
      return country.name.common
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    }
    return (
      country.name.common.toLowerCase().includes(searchValue.toLowerCase()) &&
      country.region === region
    );
  });
  return (
    <>
      <div className="flex-auto flex flex-col my-8 mx-3 sm:mx-20">
        <SearchBar
          searchValue={searchValue}
          region={region}
          onSearchChange={(value) => setSearchValue(value)}
          onRegionChange={(region) => setRegion(region)}
        />
        {filteredCountries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 sm:gap-y-20 justify-items-center place-content-between mt-7 sm:mt-16">
            {filteredCountries.map((country) => {
              return (
                <Link
                  to={`countries/${encodeURI(country.name.common)}`}
                  key={country.name.common}
                >
                  <CountryCard key={country.name.common} country={country} />
                </Link>
              );
            })}
          </div>
        ) : (
          <NoResultFound />
        )}
      </div>
    </>
  );
};

export default CountryList;
