import React from 'react';
import {FaFacebookF,FaSnapchatGhost} from "react-icons/fa"
import { BsInstagram, BsYoutube, BsTwitter,BsArrowRight } from "react-icons/bs";
import { banner2 } from "../utilites";
const LastDeals = () => {
    return (
    <div className="my-[60px] px-[50px] h-[350px] relative">
        <div className='w-full h-full'>
            <img className='w-full h-full' src={banner2} alt='banner'/>
        </div>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex items-center  w-[90%] h-[90%] bg-white ">
            <div className='flex-1 border-r border-slate-300'>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-3xl mb-1'>Shop Social</h2>
                    <div className='text-center mb-2'>
                        <p className="text-lg text-slate-400">Donec nec justo eget felis facilisis fermentum.</p>
                        <p className="text-lg text-slate-400">Aliquam porttitor mauris sit amet orci.</p>
                    </div>
                <div className='social flex items-center gap-3 mt-2'>
                    <div className='w-[40px] h-[40px] flex items-center justify-center bg-blue-600 text-white rounded-full hover:text-blue-600 hover:bg-white hover:border hover:border-blue-600 cursor-pointer'>
                        <FaFacebookF/>
                    </div>
                    <div className='w-[40px] h-[40px] flex items-center justify-center bg-red-700 text-white rounded-full hover:text-red-700 hover:bg-white hover:border hover:border-red-700 cursor-pointer'>
                        <BsInstagram/>
                    </div>
                    <div className='w-[40px] h-[40px] flex items-center justify-center bg-blue-400 text-white rounded-full hover:text-blue-400 hover:bg-white hover:border hover:border-blue-400 cursor-pointer'>
                        <BsTwitter/>
                    </div>
                    <div className='w-[40px] h-[40px] flex items-center justify-center bg-red-600 text-white rounded-full hover:text-red-600 hover:bg-white hover:border hover:border-red-600 cursor-pointer'>
                        <BsYoutube/>
                    </div>
                    <div className='w-[40px] h-[40px] flex items-center justify-center bg-yellow-400 text-white rounded-full hover:text-yellow-400 hover:bg-white hover:border hover:border-yellow-400 cursor-pointer'>
                        <FaSnapchatGhost/>
                    </div>
                </div>
            </div>
            </div>
            <div className='flex-1'>
                <div className='flex flex-col text-center items-center justify-center'>
                    <h1 className='text-4xl font-medium'>Get the Latest Deals</h1>
                    <span className='text-slate-500'>and</span>
                    <span className='text-slate-500 text-lg'>receive <span className='text-blue-600'>$20 coupon</span> for first shopping</span>
                    <div className='flex items-center w-[320px] h-[40px] mt-2'>
                        <input type='email' placeholder='Enter your Email Address' className='flex-[4] rounded-l-2xl border-2 outline-none py-1  h-full pl-2 placeholder:text-lg'/>
                        <button className="bg-blue-600 h-full flex-1 flex items-center justify-center text-white rounded-r-2xl"><BsArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default LastDeals;
