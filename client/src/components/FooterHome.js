import React from 'react';
import logo from "../images/logo/logo.png"
import { BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const FooterHome = () => {
return (
    <div className='min-h-full px-[50px] mb-[80px] mt-[120px] flex gap-10 '>
        <div className='flex flex-col'>
            <div className='flex items-center gap-1 mb-4'>
                <img className='w-[30px]' src={logo} alt='logo' />
                <h1 className='text-4xl font-semibold'>TECH</h1>
            </div>
            <div className='w-[270px] mb-4'>
                <p className='w-full text-slate-600'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
            </div>
            <div className='flex items-center justify-center gap-2 border h-[80px] w-[270px]'>
                <BsTelephone className='text-2xl text-blue-600'/>
                <div>
                    <p className='text-sm text-slate-600'>Got Question? Call us 24/7</p>
                    <h1 className="font-medium text-xl tracking-wide hover:text-blue-500 cursor-pointer">+0123456789</h1>
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

export default FooterHome;
