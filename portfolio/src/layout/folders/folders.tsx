import { Fragment, useState } from 'react';
import trash from '../../images/trash.png';
import pc from '../../images/pc.png';
import folder from '../../images/folder.png';
import './folders.css';

const Folders = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div className='folders'>
        <div className='folderContainer'>
          <img className='icon' src={trash} alt='folder' />
          <p>Recycle Bin</p>
        </div>
        <div className='folderContainer'>
          <img className='icon' src={pc} alt='folder' />
          <p>My PC</p>
        </div>
        <div className='folderContainer'>
          <img className=' icon' src={folder} alt='folder' />
          <p>New Folder</p>
        </div>
        <div className='folderContainer'>
          <img className='icon' src={folder} alt='folder' />
          <p>Contact</p>
        </div>
        <div className='folderContainer'>
          <img className='icon' src={folder} alt='folder' />
          <p>Resume</p>
        </div>
        <div className='folderContainer'>
          <img className='icon' src={folder} alt='folder' />
          <p>Skills</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Folders;
