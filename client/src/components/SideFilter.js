import React, { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { categoryName } from '../utilites';
import { MdFilterList } from "react-icons/md";
const SideFilter = ({ getcheck }) => {
    const check = (e) => {
        getcheck(e.target.value);
    }
return (
    <div className='fixed left-0 top-[150px] border w-[180px] h-full px-2 py-4'>
        <div className='w-full h-full'>
            <div className="flex items-center justify-center gap-2 text-2xl font-semibold mb-12">
                <MdFilterList/>
                <h1>Filter</h1>
            </div>
            <div className='category pl-4 flex flex-col items-start justify-center gap-4'>
                <div className='all'>
                    <label htmlFor='all' className={`filterCheck  font-semiblod text-xl cursor-pointer`}>All</label>
                    <input className='hidden'  name="cate" value="all" id="all" type='radio' onChange={check}/>
                </div>
                {
                    categoryName.map((cate,i) => (
                    <div key={i} className='all flex items-center gap-1'>
                            <label htmlFor={`${cate}`} className={`filterCheck font-semibold cursor-pointer`}>{cate}</label>
                        <input className=' hidden' name="cate" id={`${cate}`} value={`${cate}`} type='radio' onChange={check}/>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
    );
}

export default SideFilter;
