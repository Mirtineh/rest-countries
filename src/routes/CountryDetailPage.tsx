import { FunctionComponent } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { CountryType } from "./root";

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
  const country = useLoaderData() as CountryType[];
  console.log(country);
  return (
    <>
      <h1>{country[0].name.common}</h1>
    </>
  );
};

export default CountryDetailPage;
