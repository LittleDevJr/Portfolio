import React from 'react';
import '../style/feature.scss'; 

function Feature({ imageSrc, description }) {
  return (
    <div className="feature">
      <img src={imageSrc} alt={description} className="feature-img" />
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default Feature;
