import { FunctionComponent } from "react";
import { useRouteError } from "react-router-dom";

interface ErrorPageProps {}

const ErrorPage: FunctionComponent<ErrorPageProps> = () => {
  const error: any = useRouteError();
  return (
    <>
      <div className="flex h-screen justify-center items-center bg-very-light-gray">
        <div className="flex justify-center items-center w-96 h-96 bg-white dark:bg-dark-blue shadow-md rounded-md ">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl">OOPS!</h1>
            <i>{error.statusText || error.message}</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
