import React from 'react';
import payments from "../images/payments.png"
const Footer = () => {
  return (
    <div className='border-t h-[50px] px-[50px]'>
      <div className='flex items-center justify-between my-[20px]'>
        <div className=''>
        <p className='text-slate-400 text-sm'>Copyright <span>&copy;</span> 2019 Molla Store. All Rights Reserved.</p>
      </div>
      <div>
        <img src={payments} alt="payment"/>
      </div>
      </div>
    </div>
  );
}

export default Footer;
