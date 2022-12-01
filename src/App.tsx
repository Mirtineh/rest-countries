import { Route, Routes } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
