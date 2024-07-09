import React from 'react'
import vectorImage from '../../Images/Profile.svg';
import notificationImage from '../../Images/Notification.svg';
import frameImage from '../../Images/Frame 1.svg';
import searchImage from '../../Images/Search.svg';
import loveImage from '../../Images/love.svg';
import shoppingImage from '../../Images/Shopping Bag.svg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header >
      <section className='header_main_sec'>
      <div className='header_main_right'>
      <img src={vectorImage} alt="" className='profile_img'/>
      <img src={notificationImage} alt="" className='notification_img'/>
      </div>
      <div>
      <img src={frameImage} alt="" />

      </div>
      <div className='header_main_left'>
        <img src={searchImage} alt="" className='search_img' />
        <img src={loveImage} alt="" className='love_img'/>
        <img src={shoppingImage} alt="" className='shopping_img' />
      </div>

      </section>
      <section className='header_secondary'>
         <nav>
          <ul>
            <li className='hero_list'><a href="">Home</a></li>
            <li className='hero_list'><a href="">About</a></li>
            <li className='hero_list'><Link to="/shoppingPage">Shop</Link></li>
            <li className='hero_list'><a href="">Testimonials</a></li>
          </ul>
         </nav>
      </section>
    </header>
  )
}


export default Header
