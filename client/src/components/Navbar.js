import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css'
import Account from './Account';
import logo from "../images/logo/logo2.png";
import { Link, NavLink } from 'react-router-dom';
import {IoMdNotificationsOutline} from "react-icons/io"
import CategoryMenu from './CategoryMenu';
import "../pages/home.css"
import {  useSelector } from 'react-redux';
import { AiOutlineDown, AiOutlineHeart, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  const user = useSelector(state => state.user);
  console.log(user)
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  return (
    <div className='fixed top-0 left-0 z-[999] w-full h-[55px] flex bg-slate-100 px-[50px]'>
      <div className='flex-[4] flex gap-2'>
        <div className='logo'>
          <Link to="/" className='flex items-center gap-1 min-h-full'>
            <img src={logo} alt='logo' />
            <h1 className='text-2xl font-semibold'>TECH</h1>
          </Link>
        </div>
        <div className='category max-h-full cursor-pointer mr-3 relative' onMouseEnter={()=>setOpenCat(true)} onMouseLeave={()=>setOpenCat(false)}>
          <div className=' bg-slate-200 h-full flex items-center gap-1 px-10 py-2 font-medium hover:bg-blue-500 hover:text-white' >
            <AiOutlineMenu />
            <h1>Category</h1>
            <AiOutlineDown className='mt-1'/>
          </div>
            {
            openCat && (
              <CategoryMenu/>
              )
            }
        </div>
        <div className="pages">
          <ul className='flex items-center min-h-full gap-10'>
            <li className='page font-[500]'><NavLink to="/">Home</NavLink></li>
            <li className='page font-[500]'><NavLink to="/product">Products</NavLink></li>
            <li className='page font-[500]'><NavLink to="/about_us">About Us</NavLink></li>
            <li className='page font-[500]'><NavLink to="/contact_us">Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
      {
        !user ? (
          <div className='flex-[2] flex items-center justify-end py-2'>
            <button className="bg-blue-700 text-white px-[30px] text-lg pb-1 rounded-md" onClick={() => navigate("/login")}>Login</button>
          </div>
        ) : (
            <div className='flex items-center gap-2 w-[360px]'>
              <div>
                {
                  (user.isAdmin) ? (<IoMdNotificationsOutline className='text-2xl font-medium hover:text-blue-800 cursor-pointer' />) : (
                    <div className="flex items-center gap-3">
                    <Link to={`/${user._id}/cart`} className='relative w-[30px] h-[30px] flex items-center justify-center rounded-full text-blue-600 hover:text-white hover:bg-blue-600'>
                      {
                            (user.cart.count !== 0) && (
                              <div className="absolute -top-2 -left-1 w-5 h-5 font-medium flex items-center justify-center bg-white rounded-full text-sm z-[999]">
                                <h1 className='  text-slate-600'>{user.cart.count}</h1>
                              </div>
                            )
                      }
                        <AiOutlineShoppingCart className='text-xl font-medium  cursor-pointer'/>
                      </Link>
                      <Link to="/like_product" className='w-[30px] h-[30px] flex items-center justify-center rounded-full text-blue-600 hover:text-white hover:bg-blue-600'>
                      <AiOutlineHeart className='text-xl font-medium cursor-pointer' />
                    </Link>
                    </div>
                  )
                }
              </div>
              <div className='w-[45px] h-[45px] ml-16'>
                <img className='w-full h-full rounded-full object-fit' src={user.image} alt='avatar'/>
              </div>
              <div>
                <button className='flex items-center gap-1' onClick={()=> !open ? setOpen(true) : setOpen(false)}>
                  <h1>{user.name}</h1>
                  <AiOutlineDown/>
                </button>
              </div>
              {
                open && <Account  setOpen={setOpen}/>
              }
            </div>
        )
      }
    </div>
  );
}

export default Navbar;
