import { FunctionComponent } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { CountryType } from "./root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowLeft,
  faArrowLeftLong,
  faBackspace,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

export const countryLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<CountryType[]> => {
  const result = await fetch(
    `https://restcountries.com/v3.1/name/${params.name}`
  );
  if (!result.ok) throw Error("Something went wrong");
  const country = await result.json();
  return country;
};
interface CountryDetailPageProps {}

const CountryDetailPage: FunctionComponent<CountryDetailPageProps> = () => {
  const [country] = useLoaderData() as CountryType[];
  console.log(country);
  return (
    <>
      <div className="ml-6 mt-10 pb-14 grid grid-cols-1 gap-14 place-items-start">
        <button className="bg-dark-blue py-1 px-5 rounded-sm ">
          <FontAwesomeIcon icon={faArrowLeftLong} className="mr-2" />
          Back
        </button>
        <img src={country.flags.png} alt="" />
        <p className="font-extrabold text-lg">{country.name.common}</p>
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col gap-2">
            <p>
              <span>Native Name: </span>
              <span className="font-light">Sample Name</span>
            </p>
            <p>
              <span>Population: </span>
              <span className="font-light">{country.population}</span>
            </p>
            <p>
              <span>Region: </span>
              <span className="font-light">{country.region}</span>
            </p>
            <p>
              <span>Sub Region: </span>
              <span className="font-light">{country.subregion}</span>
            </p>
            <p>
              <span>Capital: </span>
              <span className="font-light">{country.capital}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <span>Top Level Domain: </span>
              <span className="font-light">{country.tld}</span>
            </p>
            <p>
              <span>Currencies: </span>
              <span className="font-light">currency</span>
            </p>
            <p>
              <span>Languages: </span>
              <span className="font-light">Languages</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-extrabold">Border Countries:</p>
            <div className="flex gap-2">
              {country.borders.map((country) => (
                <button className="py-1 px-6 rounded-sm bg-dark-blue">
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetailPage;
