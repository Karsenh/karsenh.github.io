import React from 'react';
import profilePic from '../../images/profilePic.jpg';
import SocialIcons from './SocialIcons/SocialIcons';
import { FaHtml5, FaJava, FaJs, FaPython } from 'react-icons/fa';

const About = () => {
  return (
    <div className='about-section'>
      <h1 className='section-title'>About me</h1>
      <div className='about-top-row'>
        <div className='about-top-left'>
          <img className='profile-pic' src={profilePic} alt='' />
          <SocialIcons />
        </div>
        <div className='about-top-right'>
          <p>
            My name is <span className='custom-name-span'>Karsen Hansen</span>.
          </p>
          <p>
            <span className='bold-span'>Computer Science</span> Graduate of{' '}
            <span className='bold-span'>Gonzaga University</span> in Spokane
            Washington.
          </p>
          <hr />
          <p>
            I'm a passionate full-stack web developer, specializing in React.js
            with over three years of OOP experience across several programming
            languages.
            <br />
            <br />I enjoy learning new stuff related to web development on
            YouTube & Udemy in my free time, in addition to binge watching shows
            on Netflix & Hulu.
          </p>
          <div className='about-top-right-language-icons'>
            <FaJs size={25} />
            <FaJava size={25} />
            <FaPython size={25} />
            <FaHtml5 size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
