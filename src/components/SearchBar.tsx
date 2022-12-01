import {
  faArrowCircleDown,
  faArrowDown,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import FilterDropdown from "./FilterDropdown";

interface SearchBarProps {}

const SearchBar: FunctionComponent<SearchBarProps> = () => {
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
        <FilterDropdown />
      </div>
    </>
  );
};

export default SearchBar;
