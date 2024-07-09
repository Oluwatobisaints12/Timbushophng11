import React from 'react'
import Ashanti from '../../Images/Frame 11.svg'
import suitImage from '../../Images/Frame 12.svg'
import loveImage from '../../Images/love.svg';
import shoppingImage from '../../Images/Shopping Bag.svg';
import leftArrow from '../../Images/Left.svg'
import rightArrow from '../../Images/Left (1).svg'


const ShoppingStyle = () => {
  return (
    <div className='style-con'>
     <section className='style-inner-con'>
   <div className='mobile-view-row'>
   <h1 className='style-number'>01</h1>
     <div className='ashanti-img-con'>
     <img src={Ashanti}alt="Ashanti style pic" className='ashanti-img' />

     </div>
   </div>
      <div className='style-title-con'>
      <h1>Ashanti Ruffle 3 piece set (Green)</h1>
      <p>Girls night out Festivals Casual hangouts Birthday celebration High-end formal events Off the shoulder Crop top Ruffled shoulder detail Elastic band Bottom Wide leg pants Smocked hips High waist Ruffle detail Handmade 100% African cotton wax Model is wearing a size medium Packaging What`s in the box? 1 Ashanti Ruffle Crop Top 1 pair of Ashanti Ruffle Pants 1 Matching Headwrap</p>
      <div className='ashanti-date'>
      <h3>Release date</h3>
      <h3>03-08-2024</h3>
      </div>
      </div>
     </section>

     <section className='style-inner-con'>
     <div className='style-sec-title-con'>
      <h1>Silk Styled Ankara Suit (Green)</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Sed diam turpis ornare sed ut non sed. Dui egestas dictumst dolor libero lacus at semper congue. Adipiscing in in nisi neque ipsum et dictum sed. Amet sollicitudin eu molestie tellus amet.</p>
      <h3>$200</h3>

      <div className='ashanti-button'>
       <button className='ashanti-butt'><img src={shoppingImage} alt="" width={20} height={20} />Add to cart</button>
       <button  className='ashanti-butt'><img src={loveImage}alt="" width={20} height={20} />Add to Wishlist</button>
      </div>
      </div>
    <div className='ashanti-logic'>
    <h1 className='style-number'>02</h1>
     <div className='ashanti-img-con'>
     <img src={suitImage}alt="Ashanti style pic" className='ashanti-img' />

     </div>
    </div>
    
     </section>
     <div className='pagination-arrow'>
        <img width={28} height={28}src={leftArrow} alt="" />
        <img width={28} height={28} src={rightArrow} alt="" />
      </div>
    </div>
  )
}

export default ShoppingStyle
