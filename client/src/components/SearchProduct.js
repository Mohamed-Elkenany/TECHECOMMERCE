import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
const SearchProduct = ({searchbar}) => {
    return (
    <div className=" flex items-center fixed z-[999] top-[80px] left-1/2 transform -translate-x-1/2 w-[350px] h-[40px] bg-slate-50 rounded-2xl">
        <input type='text' placeholder="Search Here...." className='flex-[7] h-full w-full bg-transparent rounded-l-2xl outline-none pl-4 text-md' onChange={(e)=>searchbar(e.target.value)}/>
        <div className='flex-1 bg-blue-600 w-full h-full rounded-r-2xl flex items-center justify-center cursor-pointer'>
            <BsSearch className=' text-white text-lg font-medium'/>
        </div>
    </div>
);
}

export default SearchProduct;
