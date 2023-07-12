import React from 'react';
import Slider from "react-slick";
import { brand1,brand2,brand3,brand4,brand5,brand6,brand7,brand8,brand9 } from '../utilites';
const Brands = () => {
     var settings = {
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
return (
    <div className="my-[60px] px-[50px]">
         <Slider {...settings} className=''>
          <div className="">
            <img src={brand1} alt='brand'/>
          </div>
          <div className="">
            <img src={brand2} alt='brand'/>
          </div>
          <div className="">
            <img src={brand3} alt='brand'/>
          </div>
          <div className="">
            <img src={brand4} alt='brand'/>
          </div>
          <div className="">
            <img src={brand5} alt='brand'/>
          </div>
          <div className="">
            <img src={brand6} alt='brand'/>
          </div>
          <div className="">
            <img src={brand7} alt='brand'/>
          </div>
          <div className="">
            <img src={brand8} alt='brand'/>
          </div>
          <div className="">
            <img src={brand9} alt='brand'/>
          </div>
        </Slider>
    </div>
    );
}

export default Brands;
