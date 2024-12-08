import React from 'react'
import './Services.css'
import { Swiper,SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import { color } from 'framer-motion'
import { sliderSettings } from '../../utils/common'

const Services = () => {
  return (
    <section className="r-wrapper" id='serviceSec'>
        <div className="paddings innerWidth r-container">
            <div className="flexColStart r-head">
                <span className='orangeText'>Our Services</span>
                <span className='primaryText'>Choose the Event to be hosted by us</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButton />
                {
                    data.map((card, i)=>(
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />
                                <span className="secondaryText r-price">
                                    <span style={{color:"red"}} >Rs</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Services

const SliderButton =() =>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-button">
            <button onClick={()=>{swiper.slidePrev()}}>&lt;</button>
            <button onClick={()=>{swiper.slideNext()}}>&gt;</button>
        </div>
    )
}
