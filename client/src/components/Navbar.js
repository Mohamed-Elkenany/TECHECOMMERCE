import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css'
import { FiLogIn } from 'react-icons/fi';
import Account from './Account';
import logo from "../images/logo/logo2.png";
import { Link } from 'react-router-dom';
import {IoMdNotificationsOutline} from "react-icons/io"
import CategoryMenu from './CategoryMenu';
import { settings } from '../utilites';
import Slider from "react-slick";
import { categoryName } from "../utilites";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import "../pages/home.css"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
import { updateUser } from '../features/userSlice';
import { AiOutlineDown, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
    const handleOpen = () => {
        setOpen(prev=>!prev)
    }
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
            <li className='page font-[500]'><Link to="/">Home</Link></li>
            <li className='page font-[500]'><Link to="/product">Products</Link></li>
            <li className='page font-[500]'><Link to="/about_us">About Us</Link></li>
            <li className='page font-[500]'><Link to="/contact_us">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      {
        !user ? (
          <div className='flex-[2] flex items-center justify-end py-2'>
              <button className="bg-blue-700 text-white px-[30px] text-lg pb-1 rounded-md" onClick={()=>navigate("/login")}>Login</button>
          </div>
        ): (
            <div className='flex-[2] flex items-center justify-between py-1'>
        <div>
          {
            (user.isAdmin) ? (
                <IoMdNotificationsOutline className='text-2xl font-medium hover:text-blue-800 cursor-pointer'/>
            ): (
                <AiOutlineShoppingCart className='text-2xl font-medium hover:text-blue-800 cursor-pointer'/>
            )
          }
        </div>
        <div className='flex items-center gap-2 relative'>
          <div className="w-[45px] h-[45px] rounded-full">
            <img className='rounded-full' src={user.image} alt='avatar'/>
          </div>
          <div className="flex items-center cursor-pointer text-md font-medium select-none" onClick={handleOpen}>
            <h1>{user.name}</h1>
            <AiOutlineDown className='mt-1 ml-1'/>
            {
              (open)&&(<Account {...user}/>)
            }
          </div>
        </div>
      </div>
        )
      }
    </div>
  );
}

export default Navbar;
