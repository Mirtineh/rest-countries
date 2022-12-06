import { FunctionComponent } from "react";
import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { CountryType } from "./root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
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
  const { country, neighbours } = useLoaderData() as CountryWithNeighbours;
  const navigate = useNavigate();
  return (
    <>
      <div className="ml-6 mt-10 pb-14 grid grid-cols-1 gap-14 place-items-start">
        <button
          className="bg-dark-blue py-1 px-5 rounded-sm "
          onClick={() => navigate(-1)}
        >
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
          {neighbours ? (
            <div className="flex flex-col gap-4">
              <p className="font-extrabold">Border Countries:</p>
              <div className="flex gap-2">
                {neighbours.map((neighbor) => (
                  <Link
                    to={`/countries/${neighbor.name.common}`}
                    key={neighbor.name.common}
                  >
                    <Button
                      key={neighbor.name.common}
                      label={neighbor.name.common}
                      onClick={() => console.log("how are you")}
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
