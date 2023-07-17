import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import {Link, useNavigate} from "react-router-dom"
import '../pages/home.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
const Account = ({setOpen}) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOut = () => {
        setOpen(false)
        navigate("/")
        setTimeout(() => {
            dispatch(logout());
        },1000)
    }
return (
    <div className=' absolute top-[60px] bg-white boxShadow w-[250px] right-4 z-[999] px-2 py-1 rounded-md'>
        <div className=' border-b pb-1 pl-1'>
            <h1 className='flex items-center gap-1'>
                <span>Email</span>
                <AiOutlineDown/>
            </h1>
            <h1 className='text-sm'>{user.email}</h1>
        </div>
        <div className=' border-b pb-1'>
            {
                (user.isAdmin) ? (
                    <Link className='' onClick={()=>setOpen(false)}>
                        <div className=' hover:bg-blue-600 hover:text-white pl-1 rounded-md'>
                            <h1>Order</h1>
                        </div>
                    </Link>
                ) : (
                    <>
                            <Link to="/orders" onClick={() => setOpen(false)}>
                        <div className=' hover:bg-blue-600 pb-1 border-b hover:text-white pl-1 rounded-md'>
                            <h1>Your orders</h1>
                        </div>
                    </Link>
                    <Link to={`/${user._id}/Cart`} onClick={() => setOpen(false)}>
                        <div className=' hover:bg-blue-600  hover:text-white pl-1 rounded-md'>
                            <h1>Cart</h1>
                        </div>
                            </Link>
                        </>
                )
            }
        </div>
        {
            (user.isAdmin) && (
                <div className=' border-b pb-1'>
                    <Link to={`/${user._id}/create_product`} onClick={() => setOpen(false)}>
                        <div className=' hover:bg-blue-600 hover:text-white pl-1 rounded-md'>
                            <h1>Create Product</h1>
                        </div>
                    </Link>
                </div>
            )
        }
        <div className=' border-b pb-1'>
            <Link className='' onClick={() => setOpen(false)}>
                <div className=' hover:bg-blue-600 hover:text-white pl-1 rounded-md'>
                    <h1>Sitting</h1>
                </div>
            </Link>
        </div>
        <div className='pb-1'>
            <button className='w-full' onClick={handleLogOut}>
                <div className=' flex items-center gap-1 hover:bg-blue-600 hover:text-white pl-1 rounded-md'>
                    <FiLogOut/>
                    <h1>LogOut</h1>
                </div>
            </button>
        </div>
    </div>
    );
}

export default Account;