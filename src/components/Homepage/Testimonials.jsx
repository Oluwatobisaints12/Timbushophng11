import React from 'react'
import arrowLeft from '../../Images/Frame 22.svg'
import arrowRight from '../../Images/Frame 23.svg'
import data from '../../data/data.json'
import quoteImg from '../../Images/Quote.svg'
import mercyImg from '../../Images/Mask group.svg'
import reviewStar from '../../Images/Star.svg'

const testimonialImg = {
    "Quote.svg": quoteImg,
    "Mask group.svg": mercyImg,
    "Star.svg": reviewStar
}
const Testimonials = () => {
    const testimonials = data.filter(testimonial => testimonial.quoteImg && testimonial.coverImage && testimonial.reviewCount)
  return (
    <div className='testimonial-big-con'>
     <div className="testimonial-heading-con">
     <div className='testimonial-heading'>
       <h1>Testimonials</h1>
       <p>What our customers say about us:</p>
       </div>
        <div className='arrowpointer'>
        <img width={48} src={arrowRight} alt="" />
        <img width={48} src={arrowLeft} alt="" />

        </div>
     </div>
     <div className='testimonial-card-con'>
     {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          {testimonial.quoteImg && (
                        <img
                            src={testimonialImg[testimonial.quoteImg]}
                            alt=""
                            className="testimonial-img"
                        />
                    )}
          <p className='card-title'>{testimonial.title}</p>
         <div className='bottom-testimonial'>
         <img
          width={82}
          height={82}
            src={testimonialImg[testimonial.coverImage]}
            alt="Cover"
            className="cover-img"
          />
         <div className='bottom-col'>
         <p className='botom-line-name'>{testimonial.name}</p>
          <div className="star-container">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={testimonialImg[testimonial.reviewCount]}
                alt="star"
                style={index === 4 ? { filter: 'hue-rotate(180deg)' } : {}}
                className="star-img"
              
              />
            ))}
          </div>
         </div>
         </div>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Testimonials
