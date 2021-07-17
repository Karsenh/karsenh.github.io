import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='about-top-left-social-icons'>
      <a className='github-icon' href='https://github.com/Karsenh'>
        <FaGithub size={45} />
      </a>
      <a
        className='instagram-icon'
        href='https://www.instagram.com/realkarsen/'
      >
        <FaInstagram size={45} />
      </a>
      <a className='linkedin-icon' href='https://www.linkedin.com/in/karsenh/'>
        <FaLinkedin size={45} />
      </a>
    </div>
  );
};

export default SocialIcons;
