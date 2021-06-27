import React from 'react';
import PortfolioCard from './PortfolioCards/PortfolioCard';
import { Projects } from './PortfolioCards/PortfolioCardData';

const Portfolio = () => {
  return (
    <div className='portfolio-section'>
      <h1 className='section-title'>My Portfolio</h1>
      <div className='portfolio-content'>
        {Projects.map((project, index) => {
          return (
            <PortfolioCard
              key={index}
              title={project.title}
              platform={project.platform}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
