import {
  faArrowCircleDown,
  faArrowDown,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import FilterDropdown, { Entry } from "./FilterDropdown";

interface SearchBarProps {}

const SearchBar: FunctionComponent<SearchBarProps> = () => {
  const options: Entry[] = [
    { label: "Africa", value: "Africa" },
    { label: "Asia", value: "Americas" },
    { label: "Americas", value: "Americas" },
    { label: "Europe", value: "Europe" },
    { label: "Oceania", value: "Oceania" },
  ];
  return (
    <>
      <div className="flex flex-col gap-8">
        <label className="flex items-center just py-4 bg-dark-blue rounded-md">
          <FontAwesomeIcon icon={faSearch} className="text-white basis-1/4" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="bg-dark-blue text-white font-light w-full focus:outline-none"
          />
        </label>
        <FilterDropdown
          options={options}
          onSelected={(value) => console.log(value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
