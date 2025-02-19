import { Fragment } from 'react';
import guitar from '../../../images/guitar.png';
import ball from '../../../images/ball.png';
import controller from '../../../images/controller.png';
import tv from '../../../images/tv.png';

const Hobbies = () => {
  return (
    <Fragment>
      <div className='fileBox'>
        <img className='file' src={guitar} alt='' />
        <p className='fileName'>Guitar</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={ball} alt='' />
        <p className='fileName'>Football</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={controller} alt='' />
        <p className='fileName'>Gaming</p>
      </div>
      <div className='fileBox'>
        <img className='file' src={tv} alt='' />
        <p className='fileName'>TV</p>
      </div>
    </Fragment>
  );
};

export default Hobbies;
