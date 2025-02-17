import { Fragment } from 'react';
import close from '../../images/close.png';
import maximize from '../../images/maximize.png';
import minimize from '../../images/minimize.png';
import errorIco from '../../images/errorIco.png';
import './winError.css';

const ErrorWin = ({ onClose }: any) => {
  return (
    <Fragment>
      <div className='errorContainer'>
        <div className='windowHeader'>
          <h4 className='windowTitle'>Windows XP</h4>
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

        <div className='errorContent'>
          <div className='errorMessage'>
            <img className='errorIco' src={errorIco} alt='' />
            <p className='errorTitle'>Error: Application Not Found</p>
          </div>
          <button onClick={onClose} className='okButton'>
            OK
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ErrorWin;
