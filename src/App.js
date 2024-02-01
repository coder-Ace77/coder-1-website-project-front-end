import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/sign" element={<SignIn></SignIn>} />
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}
export default App;
