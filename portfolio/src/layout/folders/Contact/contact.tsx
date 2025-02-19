import { Fragment, useState } from 'react';
import emailjs from '@emailjs/browser';
import notePad from '../../../images/notePad.png';
import close from '../../../images/close.png';
import send from '../../../images/send.png';
import navigationSound from '../../../sfx/navigation.mp3';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [message, setMessage] = useState<String>('');
  const submitHandler = (e: any) => {
    e.preventDefault();
    const serviceId = 'service_q1kpjaa';
    const templateId = 'template_3iirzvy';
    const publicKey = 'bx1wylxgJ4JFJG2Ys';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Ali',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  };

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
          alt='Note pad'
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
              className='formInput'
              type='email'
              id='email'
              name='email'
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
