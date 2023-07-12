import React, {useState} from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import {Link} from "react-router-dom"
import '../pages/home.css'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
const Account = (props) => {
    const dispatch = useDispatch();
return (
    <div className='boxShadow absolute bg-white left-0 w-full rounded-md top-[60px] px-[12px] pb-1'>
        {
            (props.isAdmin) ?
                (
                <div>
                    <div className=' border-b py-1'>
                        <div className='flex items-center gap-1 text-sm '>
                            <h4>Email</h4>
                            <AiOutlineDown className='text-sm'/>
                        </div>
                            <h4 className="text-sm hover:bg-slate-200">{props.email}</h4>
                        </div>
                        <div className=' border-b pb-1 mt-1 hover:bg-slate-200'>
                            <h4 className="text-sm"><Link>Order</Link></h4>
                        </div>
                        <div className=' border-b pb-1 mt-1 hover:bg-slate-200'>
                            <h4 className="text-sm"><Link to={`/${props._id}/create_product`}>Create product</Link></h4>
                        </div>
                        <div className=' border-b pb-1 mt-1 hover:bg-slate-200'>
                            <h4 className="text-sm"><Link>Setting</Link></h4>
                        </div>
                        <div className='pb-1'>
                        <div className=" flex items-center gap-1 mt-1 cursor-pointer hover:bg-slate-200" onClick={()=>dispatch(logout())}>
                            <FiLogOut />
                            <h4 className="text-sm">Logout</h4>
                        </div>
                    </div>
                </div>
                )
                :
                (
                    <div>
                        <div className=' border-b pb-1'>
                        <div className='flex items-center gap-1 text-md'>
                            <h4>Email</h4>
                            <AiOutlineDown className='text-sm'/>
                        </div>
                        <h4>{props.email}</h4>
                        </div>
                        <div className=' border-b pb-1 mt-1'>
                            <h4><Link>Cart</Link></h4>
                        </div>
                        <div className=' border-b pb-1 mt-1'>
                        <h4><Link>Setting</Link></h4>
                        </div>
                        <div className='pb-1'>
                        <div className=" flex items-center gap-1 mt-1 cursor-pointer" onClick={()=>dispatch(logout())}>
                            <FiLogOut />
                            <h4>Logout</h4>
                            </div>
                        </div>
                    </div>
                )
        }
    </div>
    );
}

export default Account;