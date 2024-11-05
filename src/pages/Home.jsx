import React, { useEffect, useState } from 'react';
import '../css/Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaCommentDots } from 'react-icons/fa';
import request from "../control/api";
import boy from '../img/boy.png';

const Home = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [greetingMessage, setGreetingMessage] = useState('');
  const [loadingFast, setLoadingFast] = useState(false);
  const [showGreetingDialog, setShowGreetingDialog] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/sign');
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await request.get('/');
        if (response.status === 200) {
          setLoadingFast(true);
        }
      } catch (error) {
        console.error("API request failed");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loadingFast) {
      const loadingInterval = setInterval(() => {
        setLoadingProgress((prev) => (prev < 90 ? prev + 1 : prev));
      }, 1000);

      return () => clearInterval(loadingInterval);
    } else {
      const fastLoadingDuration = 1000; // Decreased from 2000 to 1000 milliseconds
      const initialProgress = loadingProgress;

      const fastLoadingInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          const increment = (100 - initialProgress) / (fastLoadingDuration / 100);
          return prev < 100 ? prev + increment : 100;
        });
      }, 100);

      setTimeout(() => {
        clearInterval(fastLoadingInterval);
        setIsButtonEnabled(true);
      }, fastLoadingDuration);
    }
  }, [loadingFast, loadingProgress]);

  useEffect(() => {
    const typingMessage = "Hi! Server start may take up to 50s.";
    let index = 0;

    const typingInterval = setInterval(() => {
      setGreetingMessage((prev) => prev + typingMessage[index]);
      index += 1;

      if (index === typingMessage.length - 1) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreetingDialog(true);
    }, 2000);

    return () => clearTimeout(timer);
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
