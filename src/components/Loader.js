import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div id='loader' className='text-center mt-5'>
    <div className='loader-text'>Uploading...</div>
    <div className='loader-bar'></div>
  </div>
  );
};

export default Loader;
