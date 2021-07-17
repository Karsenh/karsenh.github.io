import React from 'react';
import AnimatedWaves from './Waves/AnimatedWaves';
import Particles from 'react-particles-js';
import { Button } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import myPDF from './myResume.pdf';

const Header = () => {
  return (
    <div className='header-section'>
      <div className='header-content'>
        <h1>
          Hi, my name's <span style={{ fontWeight: '600' }}>Karsen</span>!
        </h1>
        <Button
          onClick={() => (window.location.href = myPDF)}
          className='resume-btn'
          variant='outlined'
          color='primary'
        >
          <DescriptionIcon style={{ marginRight: '1rem' }} /> Download Resume
        </Button>
      </div>
      <Particles
        style={{ position: 'absolute', left: '0', top: '0', opacity: '50%' }}
      />
      <AnimatedWaves />
    </div>
  );
};

export default Header;
