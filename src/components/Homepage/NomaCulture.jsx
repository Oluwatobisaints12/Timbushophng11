import React from 'react';
import raquelImage from '../../Images/raquel-santana.svg';
import glassesImage from '../../Images/download (7) 1.svg';
import capmenImage from '../../Images/download (8) 1.svg';
import kinimoImage from '../../Images/Nai  Kimono 1.svg';
import rightIconImage from '../../Images/Right.svg';




const NomaCulture = () => {
  return (
    <div className="noma-culture-container">
      <div className="noma-culture-header">
        <h1 className='main-hero-title'>Noma Couture Creations</h1>
        <p className='main-title'>
          Welcome to Noma Couture Creations, where African heritage meets modern couture. 
          Our fashion house celebrates the rich tapestry of African cultures through exquisite 
          designs that blend traditional craftsmanship with contemporary flair.
        </p>
      </div>
      <section className="noma-culture-section">
        <div className="image-container">
          <img className='raquel-img' src={raquelImage} alt="Raquel Santana" />
          <button className='absolute-button2'>Explore <img className='explore-icon' src={rightIconImage} alt="" /></button>

        </div>
        <div className="column-container">
         
            <img src={glassesImage} alt="Glasses" />
         
        
            <img src={capmenImage} alt="Capmen" />
         
        </div>
        <div className="relative-container">
          <img src={kinimoImage} alt="Kinimo" className='relative-container-img' />
          <div className="absolute-button-container">
          <button className='absolute-button'>Explore <img src={rightIconImage} alt="" /></button>
        </div>
        </div>
        
      </section>
     
    </div>
  );
};

export default NomaCulture;
