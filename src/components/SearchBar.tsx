import {
  faArrowCircleDown,
  faArrowDown,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useContext } from "react";
import { region } from "../routes/root";
import FilterDropdown, { Entry } from "./FilterDropdown";
import ThemeContext from "../context/themeContext";

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
      <div className="flex flex-col sm:flex-row justify-between gap-8">
        <label className="flex items-center sm:w-[475px] py-4 rounded-md bg-white shadow-sm dark:bg-dark-blue text-dark-gray dark:text-white">
          <FontAwesomeIcon icon={faSearch} className=" basis-1/4" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for a country..."
            className="dark:bg-dark-blue font-light w-full focus:outline-none"
          />
        </label>
        <div className="w-60 bg-white dark:bg-dark-blue shadow-sm">
          <FilterDropdown
            selected={region}
            options={options}
            onSelected={(region) => onRegionChange(region)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
