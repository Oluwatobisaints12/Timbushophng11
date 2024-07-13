import React, { useState } from 'react';
import data from '../../data/data.json';
import frame15 from '../../Images/Frame 15.svg';
import frame15_1 from '../../Images/Frame 15 (1).svg';
import frame15_2 from '../../Images/Frame 15 (2).svg';
import shoppingImage from '../../Images/Shopping Bag.svg';
import star from '../../Images/Star.svg';
import shoppingImagHover from '../../Images/shoppingImageHover.svg'

const images = {
    'Frame 15.svg': frame15,
    'Frame 15 (1).svg': frame15_1,
    'Frame 15 (2).svg': frame15_2,

    'Star.svg': star
};

const Cards = () => {
    const [isHover, setIsHover] = useState(false)
    const products = data.filter(product => product.coverImage);

    return (
        <div className='product-card-big-con'>
            <section className='new-product'> 
                <h1 className='new-product-heading'>New Arrivals</h1>
                <p className='new-product-view'><a href="" className='new-product-link'>See all</a></p>
            </section>
          <div className='product-card-con'>
          {products.map((product, index) => (
                <div key={index} className="product-container">
                    {product.coverImage && (
                        <img
                            src={images[product.coverImg]}
                            alt={product.title || product.title2 || product.title3}
                            className="product-img"
                        />
                    )}
                    <div className='product-name-con'>
                        <h2 className='product-name'>{product.title || product.title2 || product.title3}</h2>

                        <p className='product-cost'>{product.cost}</p>
                    </div>

                    <div className='product-rating-con'>
                        <img src={images[product.rating?.star || product.rating2?.star2 || product.rating3?.star3]} alt="" />
                        <p>{product.rating?.count || product.rating2?.count2 || product.rating3?.count3}</p>
                    </div>


                    <button className='product-button'
                    onMouseEnter={()=> setIsHover(true)}
                    onMouseLeave={()=> setIsHover(false)}
                    ><img src={isHover ? shoppingImagHover : shoppingImage} alt="" width={20} height={20} />Add to cart</button>

                </div>
            ))}

          </div>
        </div>
    );
};

export default Cards;
