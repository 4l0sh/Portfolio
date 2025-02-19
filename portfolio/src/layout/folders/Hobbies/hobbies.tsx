import { Fragment } from 'react';
import guitar from '../../../images/guitar.png';
import ball from '../../../images/ball.png';
import controller from '../../../images/controller.png';
import tv from '../../../images/tv.png';
import coding from '../../../images/coding.png';
import photography from '../../../images/photography.png';

const Hobbies = () => {
  return (
    <Fragment>
      <div className='fileBox'>
        <img className='file' src={coding} alt='TV' />
        <p className='fileName'>Coding</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={guitar} alt='Guitar' />
        <p className='fileName'>Guitar</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={ball} alt='Football' />
        <p className='fileName'>Football</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={controller} alt='Gaming' />
        <p className='fileName'>Gaming</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={tv} alt='TV' />
        <p className='fileName'>TV</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={photography} alt='TV' />
        <p className='fileName'>Photography</p>
      </div>
    </Fragment>
  );
};

export default Hobbies;
