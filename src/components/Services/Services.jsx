import React from 'react'
import './Services.css'
import { Swiper,SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import { color } from 'framer-motion'
import { sliderSettings } from '../../utils/common'
import { Link, useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();

    const handleSwiperClick = (details) => {
        console.log("engayo miss"+details.name);
        const phoneNumber = "9342386606";
        const encodedMessage = "Hi! I need more details on " + details.name; 
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.location.href = whatsappUrl; 
      };
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
                                {/* <Link to="/pages/Service/Service" className='button-bgw'>Get more details</Link> */}
                                <button className='button-bgw' onClick={()=>{handleSwiperClick(card)}}>Get more details</button>
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
