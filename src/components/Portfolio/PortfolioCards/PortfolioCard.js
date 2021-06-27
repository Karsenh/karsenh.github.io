import React from 'react';
import { Button } from '@material-ui/core';
import { GoLogoGithub } from 'react-icons/go';

const PortfolioCard = ({ title, platform, description, link }) => {
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
    </div>
  );
};
export default PortfolioCard;
