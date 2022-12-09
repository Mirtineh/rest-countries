import { FunctionComponent } from "react";

interface NoResultFoundProps {}

const NoResultFound: FunctionComponent<NoResultFoundProps> = () => {
  return (
    <>
      <div className="flex-auto flex justify-center items-center h-full">
        <p>No Results Found</p>
      </div>
    </>
  );
};

export default NoResultFound;
