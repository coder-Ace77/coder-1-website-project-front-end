import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import SignIn from "./pages/Auth";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import QuestionList from "./components/Problems";
import AddQuestion from "./pages/AddQuestion";
import ProfilePage from "./pages/Profile";

function App() {
  useEffect(() => { }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/sign" element={<SignIn></SignIn>} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/question_list" element={<QuestionList></QuestionList>} />
        <Route path="/add_question" element={<AddQuestion></AddQuestion>}/>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}/>
      </Routes>
    </div>
  );
}
export default App;
