import { Fragment } from 'react';
import resume from '../../../images/resume.png';

const Resume = () => {
  return (
    <Fragment>
      <div className='fileBox'>
        <img className='file' src={resume} alt='' />
        <p className='fileName'>My Resume</p>
      </div>
    </Fragment>
  );
};

export default Resume;
