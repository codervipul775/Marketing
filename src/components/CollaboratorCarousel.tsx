import React from 'react';

const logos = [
  'https://via.placeholder.com/150x50?text=Logo+1',
  'https://via.placeholder.com/150x50?text=Logo+2',
  'https://via.placeholder.com/150x50?text=Logo+3',
  'https://via.placeholder.com/150x50?text=Logo+4',
  'https://via.placeholder.com/150x50?text=Logo+5',
  'https://via.placeholder.com/150x50?text=Logo+6',
  'https://via.placeholder.com/150x50?text=Logo+7',
  'https://via.placeholder.com/150x50?text=Logo+8',
];

const CollaboratorCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {logos.map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo} alt={`Collaborator ${index + 1}`} className="h-12" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className="carousel-item" key={index + logos.length}>
            <img src={logo} alt={`Collaborator ${index + 1}`} className="h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaboratorCarousel;