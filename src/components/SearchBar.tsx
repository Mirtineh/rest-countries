import {
  faArrowCircleDown,
  faArrowDown,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { region } from "../routes/root";
import FilterDropdown, { Entry } from "./FilterDropdown";

interface SearchBarProps {
  searchValue: string;
  region: region;
  onSearchChange: (value: string) => void;
  onRegionChange: (value: region) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  searchValue,
  onSearchChange,
  onRegionChange,
  region,
}) => {
  const options: Entry[] = [
    { label: "All", value: "" },
    { label: "Africa", value: "Africa" },
    { label: "Asia", value: "Asia" },
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
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for a country..."
            className="bg-dark-blue text-white font-light w-full focus:outline-none"
          />
        </label>
        <FilterDropdown
          selected={region}
          options={options}
          onSelected={(region) => onRegionChange(region)}
        />
      </div>
    </>
  );
};

export default SearchBar;
