import { FunctionComponent } from "react";
import CountryCard from "./CountryCard";

interface CountryListProps {}

const CountryList: FunctionComponent<CountryListProps> = () => {
  return (
    <>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </>
  );
};

export default CountryList;
