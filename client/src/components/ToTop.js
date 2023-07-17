import React, { useEffect,useState } from 'react';
import {BiArrowToTop} from "react-icons/bi"
const ToTop = () => {
    const topTop = () => {
        window.scroll({
            top: 0,
            behavior:"smooth",
        })
    }
return (
    <div className='fixed z-[999] top-[50%] right-1 bg-slate-400 hover:bg-blue-600 cursor-pointer rounded-full w-[40px] h-[40px] flex items-center justify-center' onClick={topTop}>
        <BiArrowToTop className='text-white text-2xl'/>
    </div>
    );
}

export default ToTop;
