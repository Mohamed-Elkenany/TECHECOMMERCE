import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import image from "../images/bg-2.jpg";
import CountDownTimer from './CountDownTimer';
import ProductDiscount from './ProductDiscount';
const DealsAndOutlet = () => {
  
  return (
    <div>
      <div className='text-center mb-[30px]'>
        <h1 className='text-4xl font-medium mb-3'>Deals & Outlets</h1>
        <span className='text-lg tracking-wide text-slate-400'>Today's deal and more</span>
      </div>
      <div className='flex items-center gap-4'>

        <div className='relative flex-1'>
          <img src={image} alt='banner'/>
          <div className=' absolute top-4 left-8 h-full flex flex-col justify-around'>
            <div>
              <h2 className='text-red-400 text-2xl font-medium'>Deal of the Day.</h2>
              <span className='text-slate-400'>Limited quantities.</span>
            </div>
            <div>
              <h2 className='text-lg w-[250px] mb-1'>Home Smart Speaker with Google Assistant</h2>
              <h1 className='text-red-400 text-2xl font-light'>$129.00 <span className="font-normal text-slate-300">Was $150.99</span></h1>
              <button className='mt-3'>
                <Link to="/product" className='flex items-center gap-3 text-yellow-500'>
                  <h2>Shop Now</h2>
                  <BsArrowRight className='text-sm'/>
                </Link>
              </button>
            </div>
              <CountDownTimer/>
          </div>
        </div>
          <ProductDiscount/>
      </div>
    </div>
  );
}

export default DealsAndOutlet;
