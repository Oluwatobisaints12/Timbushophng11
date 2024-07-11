import React, { useState } from 'react'
import data from '../../data/data.json'
import shoppingImage from '../../Images/Shopping Bag.svg';
import star from '../../Images/Star.svg';
import shoppingImagHover from '../../Images/shoppingImageHover.svg'
import splitUp from '../../Images/Down.svg'
import followformoreImg from '../../Images/Frame 54.svg'
import africaNativeImg from '../../Images/Frame 54 (1).svg'
import shortdressImg from '../../Images/Frame 54 (2).svg'
import ankarashortImg from '../../Images/Frame 54 (3).svg'
import titiafricaImg from '../../Images/Frame 54 (4).svg'
import africaAmericaImg from '../../Images/Frame 54 (5).svg'
import artistryImg from '../../Images/Frame 54 (6).svg'
import floraImg from '../../Images/Frame 54 (7).svg'
import removepreviewImg from '../../Images/Frame 54 (8).svg'



const gownsImages = {
     "Frame 54.svg": followformoreImg,
     "Frame 54 (1).svg": africaNativeImg,
     "Frame 54 (2).svg": shortdressImg,
     "Frame 54 (3).svg": ankarashortImg,
     "Frame 54 (4).svg": titiafricaImg,
     "Frame 54 (5).svg": africaAmericaImg,
     "Frame 54 (6).svg": artistryImg,
     "Frame 54 (7).svg": floraImg,
     "Frame 54 (8).svg": removepreviewImg,
     "Star.svg": star

}

const GownProductList = () => {
  const [isHover, setIsHover] = useState(false)
  const filteredGownProducts = data.filter(
    (product) => product.gownsImg && product.gowntitle && product.gowncost && product.gownrating && product.gownrating?.previwcount
  );

  return (
   <div className='product-list-con-col'>
    <section className='selector'>
<div className='row'>
<h2 className='selector-heading'>Shop</h2>
<img className='selector-img' src={splitUp} alt="" />
</div>
<div className='row'>
<h2 className='selector-heading'>Category</h2>
<img className='selector-img' src={splitUp} alt="" />
</div>
<div className='row'>
<h2 className='selector-hero-heading'>Gowns</h2>
<img className='selector-img' src={splitUp} alt="" />
</div>

</section>
<h1 className='gown-hero-title'>Gowns</h1>

     <main className='gown-product-card-con'>
      {filteredGownProducts.map((product, index) => (
        <div key={index} className="product-container">
          {product.gownsImg && (
            <img
              src={gownsImages[product.gownsImg]}
              alt=""
              className="product-img"
            />
          )}
          <div className='product-name-con'>
            <h2 className='product-name'>{product.gowntitle}</h2>
            <p className='product-cost'>{product.gowncost}</p>
          </div>
          <div className='product-rating-con'>
            <img src={gownsImages[product.gownrating?.gownstar]} alt="" />
            <p>{product.gownrating?.previwcount}</p>

            <p>{product.gownrating?.gowncost}</p>
          </div>

          <button
            className='product-button'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <img src={isHover ? shoppingImagHover : shoppingImage} alt="" width={20} height={20} />
            {product.buttonText}
          </button>
        </div>
      ))}
    </main>
   </div>
  );
}

export default GownProductList
