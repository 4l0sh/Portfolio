import { Fragment, useState } from 'react';
import disk from '../../../images/localDisk.png';
import rmdisk from '../../../images/rmdisk.png';
import gta from '../../../images/gta.png';
import { handleDoubleClick } from '../folders';
import WinError from '../../components/winError';
import './mypc.css';

const Mypc = () => {
  const [_, setIsFolderOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [__, setFolder] = useState<string | null>(null);

  const rickroll = () => {
    window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0', '_blank');
  };
  return (
    <Fragment>
      <div className='pcContainer'>
        <div className='section1'>
          <div className='sectionHeader'>
            <p className='sectionText'> Hard Disk Drives</p>
            <hr />
            <div className='filesContainer'>
              <div onDoubleClick={rickroll} className='filesBox'>
                <img className='pcIcon' src={disk} alt='' />
                <p>Local Disk (C:)</p>
              </div>
            </div>
          </div>
        </div>
        <div className='section1'>
          <div className='sectionHeader'>
            <p className='sectionText'> Removable Disks </p>
            <hr />
            <div className='filesContainer'>
              <div onDoubleClick={rickroll} className='filesBox'>
                <img className='pcIcon' src={rmdisk} alt='' />
                <p>CD Drive</p>
              </div>
              <div
                onDoubleClick={() => {
                  handleDoubleClick(
                    'GTA',
                    setFolder,
                    setIsFolderOpen,
                    setIsErrorOpen
                  );
                }}
                className='filesBox'
              >
                <img className='pcIcon gta' src={gta} alt='' />
                <p>GTA San Andreas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isErrorOpen && <WinError onClose={() => setIsErrorOpen(false)} />}
    </Fragment>
  );
};

export default Mypc;
