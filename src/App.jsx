import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import SignIn from './pages/SignIn';
import ResizableDiv from './components/Resizeable';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/sign' element={<SignIn></SignIn>} />
        <Route path='/' element={<Home></Home>} />
        <Route path='/resizeable-divs' element={<ResizableDiv/>}/>
      </Routes>
    </div>
  );
}
export default App;
