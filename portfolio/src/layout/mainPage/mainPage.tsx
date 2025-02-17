import { Fragment } from 'react';
import icon from '../../images/icon.png';
import Folders from '../folders/folders';
import './style.css';
const MainPage = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='Window'>
          <Folders />
        </div>
        <div className='taskBar'>
          <div className=' startMenuIcon'>
            <img className='`winIco' src={icon} alt='win' /> start
          </div>
          <h2 className='test'> Clock</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;
