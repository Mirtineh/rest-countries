import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useState } from "react";

interface FilterDropdownProps {}

const FilterDropdown: FunctionComponent<FilterDropdownProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative w-1/2 hover:cursor-pointer">
        <div className="flex items-center justify-between w-full bg-dark-blue text-white py-4 px-4 rounded-md">
          <p>Filter by Region</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
        {isOpen ? (
          <>
            <button
              className="fixed inset-0 cursor-default"
              tabIndex={-1}
              onClick={() => setIsOpen((prev) => !prev)}
            ></button>
            <div className="absolute w-full bg-dark-blue my-1 rounded-md text-white py-3 px-4 cursor-pointer">
              <p className="py-1">Africa</p>
              <p className="py-1">America</p>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default FilterDropdown;
