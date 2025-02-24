import { useEffect, useState } from 'react';
import dogImg from '../../../images/Rover.png';
import './assistant.css';

const messages = [
  'Hello there! 🐶',
  'Welcome to my portfolio!',
  'Feel free to explore my projects.',
  'Need help? Click on me!',
];

const Assistant = ({ onClick }: { onClick: () => void }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let messageTimer = setInterval(() => {
      setCurrentMessageIndex((prev) =>
        prev < messages.length - 1 ? prev + 1 : prev
      );
    }, 2500);

    return () => clearInterval(messageTimer);
  }, []);

  return (
    visible && (
      <div className='assistant-container' onClick={onClick}>
        <img src={dogImg} alt='Windows Assistant' className='assistant-image' />
        <div className='assistant-message'>{messages[currentMessageIndex]}</div>
      </div>
    )
  );
};

export default Assistant;
