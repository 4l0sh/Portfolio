import { Fragment, useEffect, useState } from 'react';
import Folders from '../folders/folders';
import sound from '../../images/sound.png';
import wifi from '../../images/wifi.png';
import bluetooth from '../../images/bluetooth.png';
import startMenu from '../../images/startMenu.png';
import MenuComponent from '../components/start/startMenu';
import './style.css';
const MainPage = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  useEffect(() => {
    function startTime() {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      m = checkTime(m);
      const clockElement = document.getElementById('clock') as HTMLElement;
      clockElement.innerHTML = h + ':' + m;
      setTimeout(startTime, 500);
    }
    function checkTime(i: any) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    }
    startTime();
  }, []);

  const showMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='Window'>
          <Folders />
        </div>
        {isStartMenuOpen && (
          <div className='startMenuContainer'>
            <MenuComponent />
          </div>
        )}
        <div className='Window'></div>
        <div className='taskBar'>
          <div onClick={showMenu} className='startMenuIcon'>
            <img className='winIco' src={startMenu} alt='win' />
          </div>
          <div className='taskActionsContainer'>
            <div className='taskIcons'>
              <img className='sIcon' src={sound} alt='' />
              <img className='sIcon' src={wifi} alt='' />
              <img className='sIcon' src={bluetooth} alt='' />
            </div>
            <div className='clock'>
              <h4 id='clock'></h4>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;
