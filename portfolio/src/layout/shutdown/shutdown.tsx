import { Fragment, useEffect } from 'react';
import errorSound from '../../sfx/WindowsXPErrorSound.mp3';
import './shutdown.css';
const Shutdown = () => {
  addEventListener('keypress', () => {
    window.location.href = '/';
  });
  useEffect(() => {
    new Audio(errorSound).play();
  }, []);
  return (
    <Fragment>
      <div className='BlueScreenOfDeath'></div>
    </Fragment>
  );
};

export default Shutdown;
