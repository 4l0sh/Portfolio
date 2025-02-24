import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import startupSound from '../../sfx/windows-xp-startup.mp3';
import './startup.css';

const Startup = () => {
  const messages = [
    'Hello There!😊',
    'Welcome to My Portfolio! ',
    'My name is Ali',
    'I am a Full Stack Student 📚',
    'Starting up... 🚀',
  ];

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (index < messages.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        const audio = new Audio(startupSound);
        audio.play();
        audio.volume = 0.5;
        audio.loop = false;
        navigate('/mainPage');
      }, 2000);
    }
  }, [index, navigate]);

  return (
    <div className='startupContainer'>
      <div className='messages'>
        <h3 className='message'>{messages[index]}</h3>
      </div>
    </div>
  );
};

export default Startup;
