import React from 'react'
import rightIconImage from '../../Images/Right (1).svg';
import africawomanImg from '../../Images/beautiful-african-woman-floral-coat-outdoors 1.svg'

const GetOffer = () => {
  return (
    <section className='getoffer-big-con'>
    <div className="getoffer-con">
    <h1 className='getoffer-title'>Unlock Your Style with 20% Off!</h1>
      <p className='getoffer-para'>Noma Couture Creations is giving out an exclusive discount. Use code NOMA20 at checkout to enjoy 20% off your first purchase. Hurry, this offer is for a limited time only!</p>
      <button className='getoffer-button'>Get Offer <img src={rightIconImage} alt="" /> </button>
    </div>
    <div className='getoffer-img-con'>
        <img className='getoffer-img' src={africawomanImg} alt="" />
    </div>
    </section>
  )
}

export default GetOffer
