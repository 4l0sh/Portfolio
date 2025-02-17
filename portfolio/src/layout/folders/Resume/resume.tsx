import { Fragment } from 'react';
import resume from '../../../images/resume.png';

const Resume = () => {
  const handleDownload = () => {
    const pdfUrl = './resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Fragment>
      <div onDoubleClick={handleDownload} className='fileBox'>
        <img className='file' src={resume} alt='' />
        <p className='fileName'>My Resume</p>
      </div>
    </Fragment>
  );
};

export default Resume;
