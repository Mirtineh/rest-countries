import { FunctionComponent } from "react";
import { CountryType } from "../routes/root";

interface CountryCardProps {
  country: CountryType;
}

const CountryCard: FunctionComponent<CountryCardProps> = ({ country }) => {
  return (
    <>
      <div className="max-w-[256px] h-full bg-white dark:bg-dark-blue shadow rounded-md hover:cursor-pointer">
        <span className="block w-full h-40">
          <img
            src={country.flags.png}
            alt=""
            className="h-full  object-cover rounded-t-md"
          />
        </span>
        <div className="mx-7">
          <p className="text-lg font-extrabold my-6">{country.name.common}</p>
          <div className="flex flex-col gap-1 mb-12">
            <p className="text-sm">
              <span className="font-semibold">Population: </span>
              <span className="font-light">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p className="text-sm">
              <span className="font-semibold">Region: </span>
              <span className="font-light">{country.region}</span>
            </p>
            <p className="text-sm">
              <span className="font-semibold">Capital: </span>
              <span className="font-light">{country.capital}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
