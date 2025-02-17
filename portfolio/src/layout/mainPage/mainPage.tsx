import { Fragment } from 'react';
import icon from '../../images/icon.png';
import Folders from '../folders/folders';
import sound from '../../images/sound.png';
import wifi from '../../images/wifi.png';
import bluetooth from '../../images/bluetooth.png';
import './style.css';
const MainPage = () => {
  // function startTime() {
  //   const today = new Date();
  //   let h = today.getHours();
  //   let m = today.getMinutes();
  //   m = checkTime(m);
  //   const clockElement = document.getElementById('clock') as HTMLElement;
  //   clockElement.innerHTML = h + ':' + m;
  //   const t = setTimeout(startTime, 500);
  // }
  // function checkTime(i: any) {
  //   if (i < 10) {
  //     i = '0' + i;
  //   }
  //   return i;
  // }
  // startTime();

  return (
    <Fragment>
      <div className='container'>
        <div className='Window'>
          <Folders />
        </div>
        <div className='taskBar'>
          <div className='startMenuIcon'>
            <img className='winIco' src={icon} alt='win' /> start
          </div>
          <div className='taskActionsContainer'>
            <div className='taskIcons'>
              <img className='sIcon' src={sound} alt='' />
              <img className='sIcon' src={wifi} alt='' />
              <img className='sIcon' src={bluetooth} alt='' />
            </div>
            <div className='clock'>
              <h2 id='clock'></h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;
