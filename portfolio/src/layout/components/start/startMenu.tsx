import { Fragment, useState } from 'react';
import guitarIcon from '../../../images/guitarIcon.png';
import explorer from '../../../images/explorer.png';
import minesweeper from '../../../images/minesweeper.png';
import cards from '../../../images/cards.png';
import email from '../../../images/email.png';
import notepad from '../../../images/notepad.png';
import winplayer from '../../../images/winplayer.png';
import messenger from '../../../images/messenger.png';
import right from '../../../images/right-green.png';
import myDocuments from '../../../images/myDocuments.png';
import sharedDocuments from '../../../images/sharedDocuments.png';
import movies from '../../../images/movies.png';
import music from '../../../images/music.png';
import pictures from '../../../images/pictures.png';
import settings from '../../../images/settings.png';
import controlPanel from '../../../images/controlPanel.png';
import security from '../../../images/security.png';
import printer from '../../../images/printer.png';
import help from '../../../images/helpIco.png';
import search from '../../../images/search.png';
import logoff from '../../../images/logoff.png';
import shuttown from '../../../images/shutdown.png';
import windowsIcon from '../../../images/windowsIcon.png';
import restart from '../../../images/restart.png';
import standby from '../../../images/standby.png';
import './startMenu.css';
const StartMenu = () => {
  const [isShutDownOpen, setIsShutDownOpen] = useState(false);
  return (
    <Fragment>
      <div className='startMenu'>
        <div className='menuHeader'>
          <img className='userIcon' src={guitarIcon} alt='' />
          <h4>User</h4>
        </div>
        <div className='menuActionsContainer'>
          <div className='menu1'>
            <div className='menuAction'>
              <img src={explorer} alt='' />
              <p>Internet Explorer</p>
            </div>
            <div className='menuAction'>
              <img id='email' src={email} alt='' />
              <p id='emailtxt'>E-mail</p>
            </div>
            <hr />
            <div className='menuAction'>
              <img src={minesweeper} alt='' />
              <p>minesweeper</p>
            </div>
            <div className='menuAction'>
              <img src={cards} alt='' />
              <p>Cards</p>
            </div>
            <div className='menuAction'>
              <img src={notepad} alt='' />
              <p>Notepad</p>
            </div>
            <div className='menuAction'>
              <img src={winplayer} alt='' />
              <p>Windows Media Player </p>
            </div>
            <div className='menuAction'>
              <img src={messenger} alt='' />
              <p>Windows Messenger </p>
            </div>
            <div className='allPrograms'>
              <p>All Programs</p>
              <img src={right} alt='' />
            </div>
          </div>
          <div className='menu2'>
            <div className='menu2Action'>
              <img src={sharedDocuments} alt='' />
              <p>Shared Documents </p>
            </div>
            <div className='menu2Action'>
              <img src={myDocuments} alt='' />
              <p>My Documents </p>
            </div>
            <div className='menu2Action'>
              <img src={movies} alt='' />
              <p>My Movies </p>
            </div>
            <div className='menu2Action'>
              <img src={pictures} alt='' />
              <p>My Pictures </p>
            </div>
            <div className='menu2Action'>
              <img src={music} alt='' />
              <p>My Music </p>
            </div>
            <hr />
            <div className='menu2Action'>
              <img src={settings} alt='' />
              <p>Settings </p>
            </div>
            <div className='menu2Action'>
              <img src={controlPanel} alt='' />
              <p>Control Panel </p>
            </div>
            <div className='menu2Action'>
              <img src={security} alt='' />
              <p>Security </p>
            </div>
            <div className='menu2Action'>
              <img src={printer} alt='' />
              <p>Printers And Faxes </p>
            </div>
            <hr />
            <div className='menu2Action'>
              <img src={help} alt='' />
              <p>Help And Support </p>
            </div>
            <div className='menu2Action'>
              <img src={search} alt='' />
              <p>Search </p>
            </div>
          </div>
        </div>
        <div className='windowsActions'>
          <div className='windowsAction'>
            <img src={logoff} alt='' />
            <p>Log Off </p>
          </div>
          <div
            onClick={() => setIsShutDownOpen(!isShutDownOpen)}
            className='windowsAction'
          >
            <img src={shuttown} alt='' />
            <p>Shut Down </p>
          </div>
          {isShutDownOpen && (
            <div className='shutDownMenu'>
              <div className='shutDownHeader'>
                <p>Shut Down Windows</p>
                <img src={windowsIcon} alt='' />
              </div>
              <div className='shutDownContent'>
                <div className='shutDownAction'>
                  <img id='standbyIcon' src={standby} alt='' />
                  <p>Stand By</p>
                </div>
                <div className='shutDownAction'>
                  <img src={shuttown} alt='' />
                  <p>Shut Down </p>
                </div>
                <div className='shutDownAction'>
                  <img id='restartIcon' src={restart} alt='' />
                  <p>Restart </p>
                </div>
              </div>
              <div className='shutDownFooter'>
                {' '}
                <button
                  onClick={() => setIsShutDownOpen(!isShutDownOpen)}
                  className='cancelBtn'
                >
                  {' '}
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default StartMenu;
