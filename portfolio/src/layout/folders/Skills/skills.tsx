import { Fragment } from 'react';
import html from '../../../images/html.png';
import css from '../../../images/css.png';
import js from '../../../images/javascript.png';
import php from '../../../images/php.png';
import leaf from '../../../images/leaf.png';
import ts from '../../../images/typescript.png';
import react from '../../../images/react.png';
import './skills.css';

const Skills = () => {
  const htmlFolder = {
    fileName: 'HTML',
    fileIcon: html,
  };
  const cssFolder = {
    fileName: 'CSS',
    fileIcon: css,
  };
  const jsFolder = {
    fileName: 'JavaScript',
    fileIcon: js,
  };
  const phpFolder = {
    fileName: 'PHP',
    fileIcon: php,
  };
  const leafFolder = {
    fileName: 'MongoDB',
    fileIcon: leaf,
  };
  const tsFolder = {
    fileName: 'TypeScript',
    fileIcon: ts,
  };
  const reactFolder = {
    fileName: 'React',
    fileIcon: react,
  };
  return (
    <Fragment>
      <div className='fileBox'>
        <img className='file' src={htmlFolder.fileIcon} alt='' />
        <p className='fileName'>{htmlFolder.fileName}</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={cssFolder.fileIcon} alt='' />
        <p className='fileName'>{cssFolder.fileName}</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={jsFolder.fileIcon} alt='' />
        <p className='fileName'>{jsFolder.fileName}</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={phpFolder.fileIcon} alt='' />
        <p className='fileName'>{phpFolder.fileName}</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={leafFolder.fileIcon} alt='' />
        <p className='fileName'>{leafFolder.fileName}</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={tsFolder.fileIcon} alt='' />
        <p className='fileName'>{tsFolder.fileName}</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={reactFolder.fileIcon} alt='' />
        <p className='fileName'>{reactFolder.fileName}</p>
      </div>
    </Fragment>
  );
};

export default Skills;
