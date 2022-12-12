import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

interface NoResultFoundProps {}

const NoResultFound: FunctionComponent<NoResultFoundProps> = () => {
  return (
    <>
      <div className="flex-auto flex justify-center items-center h-full">
        <div className="flex justify-center items-center bg-white w-96 h-96 shadow-md">
          <div className="flex flex-col items-center gap-4">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-10 h-10 text-dark-gray"
            />
            <p className="font-extrabold">No Results Found</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoResultFound;
