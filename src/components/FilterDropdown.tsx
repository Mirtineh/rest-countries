import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, useEffect, useState } from "react";
import { region } from "../routes/root";

interface FilterDropdownProps {
  options: Entry[];
  onSelected: (value: region) => void;
  selected: region;
}
export interface Entry {
  label: string;
  value: region;
}

const FilterDropdown: FunctionComponent<FilterDropdownProps> = ({
  options,
  selected,
  onSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [selected]);
  const handleSelected = (option: Entry) => {
    if (option.value === selected) {
      setIsOpen(false);
    } else {
      onSelected(option.value);
    }
  };
  return (
    <>
      <div className="relative w-full hover:cursor-pointer">
        <div
          className="flex items-center justify-between w-full py-4 px-4 rounded-md"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {selected === "" ? <p>Filter by Region</p> : <p>{selected}</p>}
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        {isOpen ? (
          <>
            <button
              className="fixed inset-0 cursor-default"
              tabIndex={-1}
              onClick={() => setIsOpen((prev) => !prev)}
            ></button>
            <div className="absolute w-full my-1 rounded-md  py-3 cursor-pointer bg-white dark:bg-dark-blue">
              {options.map((option) => (
                <p
                  className="px-4 py-1 hover:bg-dark-gray dark:hover:bg-very-dark-blue"
                  onClick={() => handleSelected(option)}
                  key={option.value}
                >
                  {option.label}
                </p>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default FilterDropdown;
