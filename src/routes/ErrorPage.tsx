import { FunctionComponent } from "react";
import { useRouteError } from "react-router-dom";

interface ErrorPageProps {}

const ErrorPage: FunctionComponent<ErrorPageProps> = () => {
  const error: any = useRouteError();
  console.log(error);
  return (
    <>
      <h1>{error.statusText || error.message}</h1>
    </>
  );
};

export default ErrorPage;
