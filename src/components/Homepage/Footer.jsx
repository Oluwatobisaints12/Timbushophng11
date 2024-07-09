import React from 'react'
import nLogo from '../../Images/Frame 25.svg'
import facebookImg from '../../Images/Frame 26.svg'
import instaImg from '../../Images/Frame 27.svg'
import linkedinImg from '../../Images/Frame 28.svg'
import tweeterImg from '../../Images/Frame 29.svg'


const Footer = () => {
  return (
    <footer>
      <div className='footer-con'>
        <section className='footer-left-con'>
         
           <div className='footer-left-row'>
            <img src={nLogo} alt="" />
           <h2 className='footer-title'>Noma Couture Creations</h2>
           </div>
      
            <p className='footer-para'>Welcome to Noma Couture Creations, where African heritage meets modern couture. Our fashion house celebrates the rich tapestry of African cultures through exquisite designs that blend traditional craftsmanship with contemporary flair.</p>
        </section>
       <div className="gap-row">
       <section className='footer-sec-mid-con'>
            <h1>Contact Us</h1>
            <p>nomacouture@gmail.com</p>
            <span>(+234) 70 878 9417</span>
        </section>
        <section className='footer-third-con'>
            <h1>Our Company</h1>
            <p><a href="">About</a></p>
            <p><a href="">Shop</a></p>
            <p><a href="">Testimonials</a></p>
        </section>
       </div>
        <section className='footer-fourth-con'>
            <h1>Legal</h1>
            <p><a href="">Terms and conditions</a></p>
            <p><a href="#">Privacy</a></p>
        </section>
      </div>
      <div className="border-bottom-line"></div>
      <section className='footer-bottom-con'>
        <p><a href="">Copyrights2024 Noma Couture Creation. All rights reserved</a></p>
        <div className='bottom-row'>
        <a href=""><img src={facebookImg} alt="" /></a>
        <a href=""><img src={instaImg} alt="" /></a>
        <a href=""><img src={linkedinImg} alt="" /></a>
        <a href=""><img src={tweeterImg} alt="" /></a>
        </div>

      </section>
    </footer>
  )
}

export default Footer
