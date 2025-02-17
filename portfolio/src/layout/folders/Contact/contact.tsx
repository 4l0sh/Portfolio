import { Fragment, useState } from 'react';
import notePad from '../../../images/notePad.png';
import close from '../../../images/close.png';
import send from '../../../images/send.png';
import navigationSound from '../../../sfx/navigation.mp3';
import './contact.css';

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <Fragment>
      <div className='fileBox'>
        <img
          onDoubleClick={() => {
            new Audio(navigationSound).play();
            setIsFormOpen(true);
          }}
          className='file'
          src={notePad}
          alt=''
        />
        <p className='fileName'>Contact Me </p>
      </div>

      {isFormOpen && (
        <div className='formContainer'>
          <div className='formHeader'>
            <div className='formHeaderText'>Send Me A Message</div>
            <div className='formHeaderActions'>
              <img
                onClick={() => setIsFormOpen(false)}
                className='windowAction'
                src={close}
                alt='close'
              />
            </div>
          </div>
          <div className='toolBar'></div>
          <form className='form'>
            <label htmlFor='name'>Name:</label>
            <input className='formInput' type='text' id='name' name='name' />

            <label htmlFor='email'>Email:</label>
            <input className='formInput' type='email' id='email' name='email' />

            <label htmlFor='message'>Message:</label>
            <textarea className='formInput' id='message' name='message' />

            <button
              className='submitBtn'
              onClick={() => setIsFormOpen(false)}
              type='submit'
            >
              Send
              <img className='sendIcon' src={send} alt='' />
            </button>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default Contact;
