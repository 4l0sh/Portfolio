import { Fragment } from 'react';
import calculator from '../../../images/calculatorFolder.png';
import Github from '../../../images/pixelGithub.png';
import PixelWeatherawi from '../../../images/pxArt.png';
import SignupApp from '../../../images/signupApp.png';

const Projects = () => {
  const calculatorFolder = {
    fileName: 'Caclulator App',
    fileIcon: calculator,
  };
  const githubFolder = {
    fileName: 'Github Finder',
    fileIcon: Github,
  };
  const weatherFolder = {
    fileName: 'Weather App',
    fileIcon: PixelWeatherawi,
  };
  const signupFolder = {
    fileName: 'Signup App',
    fileIcon: SignupApp,
  };

  const redirect = () => {
    window.location.href = 'https://alawicalculatorapp.netlify.app/';
  };
  const redirectGithub = () => {
    window.location.href = 'https://alawigithubfinder.netlify.app/';
  };
  const redirectWeather = () => {
    window.location.href = 'https://weatherawi.netlify.app/';
  };
  const redirectSignup = () => {
    window.location.href = 'https://aliexpress.techdev.nl/';
  };
  return (
    <Fragment>
      <div onDoubleClick={redirect} className='fileBox'>
        <img className='file' src={calculatorFolder.fileIcon} alt='html' />
        <p className='fileName'>{calculatorFolder.fileName}</p>
      </div>
      <div onDoubleClick={redirectGithub} className='fileBox'>
        <img className='file' src={githubFolder.fileIcon} alt='html' />
        <p className='fileName'>{githubFolder.fileName}</p>
      </div>
      <div onDoubleClick={redirectWeather} className='fileBox'>
        <img className='file' src={weatherFolder.fileIcon} alt='html' />
        <p className='fileName'>{weatherFolder.fileName}</p>
      </div>
      <div onDoubleClick={redirectSignup} className='fileBox'>
        <img className='file' src={signupFolder.fileIcon} alt='html' />
        <p className='fileName'>{signupFolder.fileName}</p>
      </div>
    </Fragment>
  );
};

export default Projects;
