import { Fragment, useState } from 'react';
import emailjs from '@emailjs/browser';
import notePad from '../../../images/notePad.png';
import close from '../../../images/close.png';
import send from '../../../images/send.png';
import navigationSound from '../../../sfx/navigation.mp3';
import github from '../../../images/github.png';
import instagram from '../../../images/instagram.png';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [message, setMessage] = useState<String>('');
  const submitHandler = (e: any) => {
    e.preventDefault();
    const SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Ali',
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const redirect = () => {
    location.href = 'https://www.github.com/4l0sh';
  };
  const toInstagram = () => {
    location.href = 'https://www.instagram.com/3li.tahir';
  };

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
          alt='Note pad'
        />
        <p className='fileName'>Contact Me </p>
      </div>
      <div onDoubleClick={redirect} className='fileBox'>
        <img className='file' src={github} alt='github' />
        <p className='fileName'>View My Github</p>
      </div>
      <div onDoubleClick={toInstagram} className='fileBox'>
        <img className='file' src={instagram} alt='github' />
        <p className='fileName'>Visit my Instagram</p>
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
            <input
              onChange={(e) => setName(e.target.value)}
              className='formInput'
              type='text'
              id='name'
              name='name'
            />

            <label htmlFor='email'>Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='formInput '
              type='email'
              id='email'
              name='email'
              style={{ width: '80%' }}
            />

            <label htmlFor='message'>Message:</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className='formInput'
              id='message'
              name='message'
            />

            <button
              className='submitBtn'
              onClick={(e) => {
                submitHandler(e);
                setIsFormOpen(false);
              }}
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
