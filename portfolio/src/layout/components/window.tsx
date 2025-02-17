import { Fragment } from 'react';
import close from '../../images/close.png';
import maximize from '../../images/maximize.png';
import minimize from '../../images/minimize.png';
import left from '../../images/left.png';
import right from '../../images/right.png';
import search from '../../images/search.png';
import files from '../../images/files.png';
import info from '../../images/info.png';
import addprograms from '../../images/addprograms.png';
import controlPanel from '../../images/controlPanel.png';
import sharedDocuments from '../../images/sharedDocuments.png';
import customize from '../../images/customize.png';
import disk from '../../images/disk.png';
import github from '../../images/githubIcon.png';
import './window.css';
import Skills from '../folders/Skills/skills';
import Resume from '../folders/Resume/resume';
import Contact from '../folders/Contact/contact';

const Window = ({
  folderName,
  onClose,
}: {
  folderName: string;
  onClose: () => void;
}) => {
  const renderContent = () => {
    switch (folderName) {
      case 'Skills':
        return <Skills />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <div className='windowContainer'>
        <div className='windowHeader'>
          <h4 className='windowTitle'>{folderName}</h4>
          <div className='windowActions'>
            <img className='windowAction' src={minimize} alt='minimize' />
            <img className='windowAction' src={maximize} alt='maximize' />
            <img
              className='windowAction'
              src={close}
              alt='close'
              onClick={onClose}
            />
          </div>
        </div>

        <div className='toolBar'>
          <button className='toolBtn'>File</button>
          <button className='toolBtn'>Edit</button>
          <button className='toolBtn'>View</button>
          <button className='toolBtn'>Tools</button>
          <button className='toolBtn'>Help</button>
        </div>

        <div className='actionsBar'>
          <div className='action'>
            <img className='search' src={left} alt='back' />
            <p className='actionText'>Back</p>
          </div>
          <div className='action'>
            <img className='search' src={right} alt='next' />
            <p className='actionText'>Next</p>
          </div>
          <div className='action'>
            <img className='search' src={search} alt='search' />
            <p className='actionText'>Search</p>
          </div>
          <div className='action'>
            <img className='search' src={files} alt='files' />
            <p className='actionText'>Files</p>
          </div>
        </div>

        <div className='pathBar'>
          <div className='pathAdress'>
            <p>Address</p>
          </div>
          <div className='path'>
            <p className='pathText'>C://{folderName}</p>
          </div>
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
                  <img className='sIcon' src={addprograms} alt='' />
                  <a href='#'>Add or Remove Programs</a>
                </div>
                <div className='taskWithIcon'>
                  <img className='sIcon' src={controlPanel} alt='' />
                  <a href='#'>Control Panel</a>
                </div>
              </div>
            </div>
            <div className='systemTasks'>
              <div className='systemTasksHeader'>
                <p className='tasksText'>Other Places</p>
              </div>
              <div className='systemTasksContent'>
                <div className='taskWithIcon'>
                  <img className='sIcon' src={sharedDocuments} alt='' />
                  <a href='#'>Shared Documents</a>
                </div>
                <div className='taskWithIcon'>
                  <img className='sIcon' src={customize} alt='' />
                  <a href='#'>Customization Options</a>
                </div>
                <div className='taskWithIcon'>
                  <img className='sIcon' src={disk} alt='' />
                  <a href='#'>Disk Management</a>
                </div>
              </div>
            </div>
            <div className='systemTasks'>
              <div className='systemTasksHeader'>
                <p className='tasksText'>Details</p>
              </div>
              <div className='systemTasksContent'>
                <div className='taskWithIcon'>
                  <img className='sIcon' src={github} alt='' />
                  <a href='https://www.github.com/4l0sh'>View My Github</a>
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
          <div className='filesContainer'>
            {folderName === 'Recycle' || folderName === 'Counter' ? (
              <p>Folder content for {folderName}</p>
            ) : (
              renderContent()
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Window;
