import { FunctionComponent } from "react";
import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

import { CountryType } from "./root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

type CountryWithNeighbours = {
  country: CountryType;
  neighbours: CountryType[];
};

export const countryLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<CountryWithNeighbours> => {
  try {
    const { data } = await axios.get<CountryType[]>(
      `https://restcountries.com/v3.1/name/${params.name}`
    );
    const [country] = data;
    const { data: neighbours } = country.borders
      ? await axios.get<CountryType[]>("https://restcountries.com/v3.1/alpha", {
          params: { codes: country.borders.toString() },
        })
      : { data: [] };
    return {
      country,
      neighbours,
    };
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
interface CountryDetailPageProps {}

const CountryDetailPage: FunctionComponent<CountryDetailPageProps> = () => {
  const navigate = useNavigate();
  const { country, neighbours } = useLoaderData() as CountryWithNeighbours;

  //filters
  const native = country.languages ? Object.keys(country.languages)[0] : null;
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : null;
  const getCurrency = () => {
    const currenciesKeys = country.currencies
      ? Object.keys(country.currencies)
      : null;
    if (!currenciesKeys) return null;
    let currencies: string[] = [];
    currenciesKeys.forEach((key) => {
      currencies.push(country.currencies[key].name);
    });
    return currencies.join(", ");
  };
  return (
    <>
      <div className="mx-6 sm:mx-16 mt-10 pb-14 grid grid-cols-1 sm:grid-cols-2  gap-14 gap-x-20 place-items-start">
        <button
          className="bg-white dark:bg-dark-blue py-1 px-5 rounded-sm sm:col-span-2 shadow-md"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className="mr-2" />
          Back
        </button>
        <img
          src={country.flags.svg}
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <p className="font-extrabold text-3xl sm:col-span-2">
            {country.name.common}
          </p>
          <div className="flex flex-col gap-2">
            {native ? (
              <p>
                <span className="font-semibold">Native Name: </span>
                <span className="font-light">
                  {country.name.nativeName[native].common}
                </span>
              </p>
            ) : null}

            <p>
              <span className="font-semibold">Population: </span>
              <span className="font-light">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              <span className="font-light">{country.region}</span>
            </p>
            {country.subregion ? (
              <p>
                <span className="font-semibold">Sub Region: </span>
                <span className="font-light">{country.subregion}</span>
              </p>
            ) : null}

            {country.capital ? (
              <p>
                <span className="font-semibold">Capital: </span>
                <span className="font-light">{country.capital}</span>
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              <span className="font-light">{country.tld}</span>
            </p>
            {country.currencies ? (
              <p>
                <span className="font-semibold">Currencies: </span>
                <span className="font-light">{getCurrency()}</span>
              </p>
            ) : null}

            {country.languages ? (
              <p>
                <span className="font-semibold">Languages: </span>
                <span className="font-light">{languages}</span>
              </p>
            ) : null}
          </div>
          {neighbours.length > 0 ? (
            <div className="flex flex-col gap-4 sm:col-span-2">
              <p className="font-extrabold">Border Countries:</p>
              <div className="flex flex-wrap gap-2">
                {neighbours.map((neighbor) => (
                  <Link
                    to={`/countries/${neighbor.name.common}`}
                    key={neighbor.name.common}
                  >
                    <Button
                      key={neighbor.name.common}
                      label={neighbor.name.common}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CountryDetailPage;
