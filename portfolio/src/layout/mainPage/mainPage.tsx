import { Fragment, useEffect } from 'react';
import Folders from '../folders/folders';
import sound from '../../images/sound.png';
import wifi from '../../images/wifi.png';
import bluetooth from '../../images/bluetooth.png';
import startMenu from '../../images/startMenu.png';
import './style.css';
const MainPage = () => {
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

  return (
    <Fragment>
      <div className='container'>
        <div className='Window'>
          <Folders />
        </div>
        <div className='taskBar'>
          <div className='startMenuIcon'>
            <img className='winIco' src={startMenu} alt='win' />
          </div>
          <div className='taskActionsContainer'>
            <div className='taskIcons'>
              <img className='sIcon' src={sound} alt='' />
              <img className='sIcon' src={wifi} alt='' />
              <img className='sIcon' src={bluetooth} alt='' />
            </div>
            <div className='clock'>
              <h3 id='clock'></h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;
