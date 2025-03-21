import { Fragment, useState } from 'react';
import trash from '../../images/trash.png';
import pc from '../../images/pc.png';
import folderIco from '../../images/folder.png';
import Counter from '../../images/CounterStrike.png';
import hobbiesFolder from '../../images/hobbiesFolder.png';
import tree from '../../images/tree.png';
import Window from '../components/window';
import WinError from '../components/winError';
import errorSound from '../../sfx/windows-xp-error.mp3';
import navigationSound from '../../sfx/navigation.mp3';
import briefcase from '../../images/briefcase.png';
import MSN from '../../images/MSN.png';
import './folders.css';

export const handleDoubleClick = (
  folderName: string,
  setFolder: (folder: string | null) => void,
  setIsFolderOpen: (isOpen: boolean) => void,
  setIsErrorOpen: (isOpen: boolean) => void
) => {
  if (
    ['Skills', 'Resume', 'Contact', 'MyPc', 'Hobbies', 'Projects'].includes(
      folderName
    )
  ) {
    setFolder(folderName);
    setIsFolderOpen(true);
    new Audio(navigationSound).play();
  } else if (['Recycle', 'Counter', 'GTA'].includes(folderName)) {
    new Audio(errorSound).play();
    setIsErrorOpen(true);
  }
};
const Folders = () => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [folder, setFolder] = useState<string | null>(null);

  return (
    <Fragment>
      <div className='folders'>
        <div
          onDoubleClick={() =>
            handleDoubleClick(
              'Recycle',
              setFolder,
              setIsFolderOpen,
              setIsErrorOpen
            )
          }
          className='folderContainer'
        >
          <img className='icon' src={trash} alt='Recycle Bin' />
          <p>Recycle Bin</p>
        </div>
        <div
          onDoubleClick={() =>
            handleDoubleClick(
              'MyPc',
              setFolder,
              setIsFolderOpen,
              setIsErrorOpen
            )
          }
          className='folderContainer'
        >
          <img className='icon' src={pc} alt='My PC' />
          <p>My PC</p>
        </div>
        <div
          onDoubleClick={() =>
            handleDoubleClick(
              'Hobbies',
              setFolder,
              setIsFolderOpen,
              setIsErrorOpen
            )
          }
          className='folderContainer'
        >
          <img className='icon' src={hobbiesFolder} alt='New Folder' />
          <p>Hobbies</p>
        </div>
        <div
          onDoubleClick={() =>
            handleDoubleClick(
              'Contact',
              setFolder,
              setIsFolderOpen,
              setIsErrorOpen
            )
          }
          className='folderContainer'
        >
          <img className='icon' src={folderIco} alt='Contact' />
          <p>Contact</p>
        </div>
        <div
          onDoubleClick={() =>
            handleDoubleClick(
              'Resume',
              setFolder,
              setIsFolderOpen,
              setIsErrorOpen
            )
          }
          className='folderContainer'
        >
          <img className='icon' src={briefcase} alt='Resume' />
          <p>Resume</p>
        </div>
        <div
          onDoubleClick={() =>
            handleDoubleClick(
              'Skills',
              setFolder,
              setIsFolderOpen,
              setIsErrorOpen
            )
          }
          className='folderContainer'
        >
          <img className='icon' src={tree} alt='Skills' />
          <p>Skills</p>
        </div>
        <div
          onDoubleClick={() =>
            handleDoubleClick(
              'Projects',
              setFolder,
              setIsFolderOpen,
              setIsErrorOpen
            )
          }
          className='folderContainer'
        >
          <img className='icon' src={MSN} alt='Projects' />
          <p>Projects</p>
        </div>
        <div
          onDoubleClick={() =>
            handleDoubleClick(
              'Counter',
              setFolder,
              setIsFolderOpen,
              setIsErrorOpen
            )
          }
          className='folderContainer'
        >
          <img className='icon' src={Counter} alt='Counter Strike 1.6' />
          <p>Counter Strike 1.6</p>
        </div>
      </div>

      {isFolderOpen && folder && (
        <Window folderName={folder} onClose={() => setIsFolderOpen(false)} />
      )}
      {isErrorOpen && <WinError onClose={() => setIsErrorOpen(false)} />}
    </Fragment>
  );
};

export default Folders;
