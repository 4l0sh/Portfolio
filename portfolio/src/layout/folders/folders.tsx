import { Fragment, useState } from 'react';
import trash from '../../images/trash.png';
import pc from '../../images/pc.png';
import folder from '../../images/folder.png';
import Counter from '../../images/CounterStrike.png';
import Window from '../components/window';
import WinError from '../components/winError';
import './folders.css';

const Folders = () => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const handleDoubleClick = (folderName: string) => {
    if (folderName === 'Skills') {
      setIsFolderOpen(true);
    }
    if (folderName === 'Recycle') {
      setIsErrorOpen(true);
    }
  };

  return (
    <Fragment>
      <div className='folders'>
        <div
          onDoubleClick={() => handleDoubleClick('Recycle')}
          className='folderContainer'
        >
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
        <div
          className='folderContainer'
          onDoubleClick={() => handleDoubleClick('Skills')}
        >
          <img className='icon' src={folder} alt='folder' />
          <p>Skills</p>
        </div>
        <div className='folderContainer'>
          <img className='icon' src={Counter} alt='Counter Strike' />
          <p>Counter Strike 1.6</p>
        </div>
      </div>
      {isFolderOpen && <Window onClose={() => setIsFolderOpen(false)} />}
      {isErrorOpen && <WinError onClose={() => setIsErrorOpen(false)} />}
    </Fragment>
  );
};

export default Folders;
