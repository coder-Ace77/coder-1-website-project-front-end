import NavBar from "../components/nav_bar";
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';
import '../css/Home.css';

const Home = () => {

    return (
        <div className="home">
            <NavBar />
            <div className="main-container">
                <LeftSection/>
                <RightSection/>
            </div>
        </div>
    );
}

export default Home;
