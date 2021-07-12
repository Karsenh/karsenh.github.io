import React from 'react';
import { Button } from '@material-ui/core';
import { GoLogoGithub } from 'react-icons/go';
import { FaRegEye } from 'react-icons/fa';

const PortfolioCard = ({ title, platform, description, link, demoLink }) => {
  return (
    <div className='portfolio-card'>
      <h1>{title}</h1>
      <h2>{platform}</h2>
      <hr />
      <p>{description}</p>
      <a href={link}>
        <Button variant='outlined' style={{ padding: '0 2rem' }}>
          <GoLogoGithub size={40} />
        </Button>
      </a>
      {demoLink && (
        <a href={demoLink}>
          <Button
            variant='contained'
            style={{
              color: 'rgb(4, 238, 218)',
              backgroundColor: 'rgb(0, 80, 126)',
            }}
          >
            <FaRegEye size={25} />
          </Button>
        </a>
      )}
    </div>
  );
};
export default PortfolioCard;
