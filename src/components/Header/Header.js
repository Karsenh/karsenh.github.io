import React from 'react';
import AnimatedWaves from './Waves/AnimatedWaves';
import Particles from 'react-particles-js';
import { Button } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import Typewriter from 'typewriter-effect';
import myPDF from './myResume.pdf';

const Header = () => {
  return (
    <div className='header-section'>
      <div className='header-content'>
        <h1>
          Hi, my name's <span style={{ fontWeight: '600' }}>Karsen</span>!
        </h1>

        <div
          style={{
            fontFamily: 'inherit',
            fontSize: '1.5rem',
            display: 'flex',
            margin: '2rem auto',
            width: '50%',
            justifyContent: 'center',
          }}
        >
          <span>{'< '}</span>
          <div style={{ fontStyle: 'italic' }}>
            <Typewriter
              options={{
                strings: [
                  'Full-Stack Web Dev',
                  'Traveler',
                  'Movie connoisseur',
                  'Meme lord',
                ],
                autoStart: true,
                loop: true,
                delay: '100',
                deleteSpeed: '75',
              }}
            />
          </div>

          <span>{' />'}</span>
        </div>

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
