import { Fragment } from 'react';
import close from '../../../images/close.png';
import maximize from '../../../images/maximize.png';
import minimize from '../../../images/minimize.png';
import left from '../../../images/left.png';
import right from '../../../images/right.png';
import search from '../../../images/search.png';
import files from '../../../images/files.png';
import info from '../../../images/info.png';
import './skills.css';

const Skills = () => {
  return (
    <Fragment>
      <div className='windowContainer'>
        <div className='windowHeader'>
          <h4 className='windowTitle'>Skills</h4>
          <div className='windowActions'>
            <img className='windowAction' src={minimize} alt='minimize' />
            <img className='windowAction' src={maximize} alt='maximize' />
            <img className='windowAction' src={close} alt='close' />
          </div>
        </div>
        <div className='toolBar'>
          {' '}
          <button className='toolBtn'> File</button>
          <button className='toolBtn'> Edit</button>
          <button className='toolBtn'> View</button>
          <button className='toolBtn'>Tools</button>
          <button className='toolBtn'> Help</button>
        </div>

        <div className='actionsBar'>
          <div className='action'>
            <img className='search' src={left} alt='back' />
            <p className='actionText'>Back</p>
          </div>
          <div className='action'>
            <img className='search' src={right} alt='back' />
            <p className='actionText'>Next</p>
          </div>
          <div className='action'>
            <img className='search' src={search} alt='searc' />
            <p className='actionText'> Search</p>
          </div>
          <div className='action'>
            <img className='search' src={files} alt='searc' />
          </div>
        </div>
        <div className='pathBar'>
          <div className='pathAdress'>
            <p>Adress</p>
          </div>
          <div className='path'></div>
        </div>
        <div className='folderContent'>
          <div className='sideBar'>
            <div className='systemTasks'>
              <div className='systemTasksHeader'>
                <p className='tasksText'>System Tasks</p>
              </div>
              <div className='systemTasksContent'>
                <div className='taskWithIcon'>
                  <img src={info} alt='' />
                  <a href='#'>View System Information</a>
                </div>
                <div className='taskWithIcon'>
                  <img src={info} alt='' />
                  <a href='#'>Add or Remove Programs</a>
                </div>
                <div className='taskWithIcon'>
                  <img src={info} alt='' />
                  <a href='#'>Change a Setting</a>
                </div>
              </div>
            </div>
            <div className='systemTasks'>
              <div className='systemTasksHeader'>
                <p className='tasksText'>Other Places</p>
              </div>
              <div className='systemTasksContent'>
                <div className='taskWithIcon'>
                  <img src={info} alt='' />
                  <a href='#'>My Network Places</a>
                </div>
                <div className='taskWithIcon'>
                  <img src={info} alt='' />
                  <a href='#'>My Documents</a>
                </div>
                <div className='taskWithIcon'>
                  <img src={info} alt='' />
                  <a href='#'>Control Panel</a>
                </div>
              </div>
            </div>
            <div className='systemTasks'>
              <div className='systemTasksHeader'>
                <p className='tasksText'>Details</p>
              </div>
              <div className='systemTasksContent'>
                <div className='taskWithIcon'>
                  <img src={info} alt='' />
                  <a href='#'>View System Information</a>
                </div>
                <div className='taskWithIcon'>
                  <img src={info} alt='' />
                  <a href='#'>Add or Remove Programs</a>
                </div>
                <div className='taskWithIcon'>
                  <img src={info} alt='' />
                  <a href='#'>Change a Setting</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
