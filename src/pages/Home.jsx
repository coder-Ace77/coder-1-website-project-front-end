import React, { useEffect, useState } from 'react';
import '../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { FaCommentDots } from 'react-icons/fa';
import request from "../control/api";
import boy from '../img/boy.png';

const Home = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [greetingMessage, setGreetingMessage] = useState('');
  const [showGreetingDialog, setShowGreetingDialog] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/sign');
  };

  useEffect(() => {
    let loadingInterval;
    let apiInterval;
    let greetingTimeout;

    const increaseLoadingProgress = () => {
      loadingInterval = setInterval(() => {
        setLoadingProgress((prev) => (prev < 90 ? prev + 1 : prev));
      }, 1000);
    };

    const apiCall = async () => {
      try {
        const response = await request.get('/');
        if (response.status === 200) {
          clearInterval(apiInterval);
          clearInterval(loadingInterval);
          setLoadingProgress(100);
          setIsButtonEnabled(true);
          clearTimeout(greetingTimeout);
        }
      } catch (error) {
        console.error("API request failed, retrying...");
      }
    };

    increaseLoadingProgress();
    apiInterval = setInterval(apiCall, 1000);

    greetingTimeout = setTimeout(() => {
      setGreetingMessage("Hi! Server start may take up to 50s.");
      setShowGreetingDialog(true);
    }, 3000);

    return () => {
      clearInterval(loadingInterval);
      clearInterval(apiInterval);
      clearTimeout(greetingTimeout);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="cube-container">
        <div className="cube">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face left"></div>
          <div className="cube-face right"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>

      <div className="overlay-content">
        <h1>
          <span className="text-highlight-yellow">#Welcome</span> to the{' '}
          <span className="text-highlight-green">coding</span> master
        </h1>
        <button
          className="explore-btn"
          onClick={handleGetStarted}
          disabled={!isButtonEnabled}
        >
          {isButtonEnabled ? 'Get started' : 'Loading...'}
        </button>
      </div>

      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${loadingProgress}%` }}></div>
      </div>
      <div className="img-boy">
        <img src={boy} alt="BOY" />
      </div>

      {showGreetingDialog && (
        <div className="greeting-container">
          <div className="greeting-dialog">
            <div className="greeting-icon">
              <FaCommentDots size={40} />
            </div>
            <div className="greeting-message">{greetingMessage}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
