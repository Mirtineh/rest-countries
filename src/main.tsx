import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { rootLoader } from "./routes/root";
import ErrorPage from "./routes/ErrorPage";
import CountryList from "./components/CountryList";
import CountryDetailPage, { countryLoader } from "./routes/CountryDetailPage";
const router = createBrowserRouter([
  {
    path: "/rest-countries/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CountryList />,
        loader: rootLoader,
      },
      {
        path: "countries/:name",
        element: <CountryDetailPage />,
        loader: countryLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
