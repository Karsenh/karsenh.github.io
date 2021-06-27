import React from 'react';

const Footer = () => {
  const date = new Date();
  const currYear = date.getFullYear();

  return (
    <div className='footer-section'>
      <p>Karsen Hansen | {currYear}</p>
    </div>
  );
};

export default Footer;
