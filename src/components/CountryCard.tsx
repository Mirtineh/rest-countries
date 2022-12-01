import { FunctionComponent } from "react";
import { CountryType } from "../routes/root";

interface CountryCardProps {
  country: CountryType;
}

const CountryCard: FunctionComponent<CountryCardProps> = ({ country }) => {
  return (
    <>
      <p className="text-white">{country.name.common}</p>
    </>
  );
};

export default CountryCard;
