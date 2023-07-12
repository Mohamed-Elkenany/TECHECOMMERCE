import React from 'react';
import logo from "../images/logo/logo.png"
import {FaFacebookF,FaSnapchatGhost} from "react-icons/fa"
import { BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';
const MainFooter = () => {
return (
    <div className='min-h-full px-[50px] border-t py-[80px] bg-slate-100 flex gap-10 '>
        <div className='flex flex-col'>
            <div className='flex items-center gap-1 mb-4'>
                <img className='w-[30px]' src={logo} alt='logo' />
                <h1 className='text-4xl font-semibold'>TECH</h1>
            </div>
            <div className='w-[270px] mb-4'>
                <p className='w-full text-slate-600'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
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
        <div className='HFooter flex items-start gap-32'>
            <div className="mt-1">
                <h1 className='mb-4 text-lg font-medium'>Useful Links</h1>
                <div>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-slate-500 hover:text-blue-600'><Link to="/about_us">About TECH</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link>Our Services</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link>How to shop on TECH</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link>FAQ</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link to="/contact_us">Contact us</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mt-1">
                <h1 className='mb-4 text-lg font-medium'>Customer Service</h1>
                <div>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-slate-500 hover:text-blue-600'><Link to="/about_us">Payments Methods</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link>Money-back guarantee!</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link>Returns</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link>Shipping</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link to="/contact_us">Terms and conditions</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link to="/contact_us">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mt-1">
                <h1 className='mb-4 text-lg font-medium'>My Account</h1>
                <div>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-slate-500 hover:text-blue-600'><Link to="/about_us">Sign In</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link>View Cart</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link>My Wishlist</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link>Track My Order</Link></li>
                        <li className='text-slate-500 hover:text-blue-600'><Link to="/contact_us">Help</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default MainFooter;
