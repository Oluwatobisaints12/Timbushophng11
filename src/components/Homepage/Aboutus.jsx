import React from 'react'
import rightIconImage from '../../Images/Right.svg';
import aboutusImage from '../../Images/Frame 10.svg'


const Aboutus = () => {
  return (
    <section className='about-container-col'>
    <div className='about-container-row'>
    <div className='about-us-profile'>
        <h2 className='about-us-hero'>About us</h2>
        <h2 className='about-us-firstline'>
  Elegance in 
</h2>
<p className="new-line">Every Stitches</p>
         <p className='about-us-para'>Where African heritage meets modern couture. Our fashion house celebrates the rich tapestry of African cultures through exquisite designs that blend traditional craftsmanship with contemporary flair. From vibrant Ankara prints to hand-woven textiles, each piece at Zuri Couture Creations embodies the essence of African elegance and timeless beauty. Discover our collection and adorn yourself in the spirit of Africa's diverse and captivating fashion landscape.</p>
         <button className='button'>See more<img src={rightIconImage} alt="" className='rightIcon' /></button>

      </div>
      <div className='about-us-img-con'>
        <img src={aboutusImage} alt="" className='about-us-img'  />
        <button className='button2'>See more<img src={rightIconImage} alt="" className='rightIcon' /></button>

      </div>

    </div>
   <div className='middle-container'>
   <h2 className='about-us-midddle-title'>
  Brand New
</h2>
<p className="about-us-middle-new-line">Collection</p>
</div>
    </section>
  )
}

export default Aboutus
