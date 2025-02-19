import { Fragment } from 'react';
import disk from '../../../images/disk.png';
import rmdisk from '../../../images/rmdisk.png';
import gta from '../../../images/gta.png';
import './mypc.css';

const Mypc = () => {
  return (
    <Fragment>
      <div className='pcContainer'>
        <div className='section1'>
          <div className='sectionHeader'>
            <p className='sectionText'> Hard Disk Drives</p>
            <hr />
            <div className='filesContainer'>
              <div className='filesBox'>
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
              <div className='filesBox'>
                <img className='pcIcon' src={rmdisk} alt='' />
                <p>CD Drive</p>
              </div>
              <div className='filesBox'>
                <img className='pcIcon gta' src={gta} alt='' />
                <p>GTA San Andreas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Mypc;
