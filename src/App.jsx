import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import SignIn from './pages/SignIn';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/sign' element={<SignIn></SignIn>} />
        <Route path='/' element={<Home></Home>} />
      </Routes>
    </div>
  );
}
export default App;
