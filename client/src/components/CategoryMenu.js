import React, { useEffect, useState } from 'react';
import { categoryName } from '../utilites';
import { UpdateState } from '../features/shareSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const CategoryMenu = () => {
  const [cateName, setCateName] = useState("Last Product");
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(UpdateState(cateName))
  },[cateName])
  return (
    <div className='bg-white border-[0px]'>
            <div key="last" className='p-2 hover:bg-blue-800 text-md cursor-pointer font-medium hover:text-white border-[1px] border-b-0'>
                <label cateName="cursor-pointer" htmlFor="last_product">Last Product</label>
                <input className='hidden cursor-pointer' type='radio' id="last_product" name='cate' value="Last Product"  onChange={(e)=>setCateName(e.target.value)}/>
            </div>
      {
        categoryName.map((cate,i) => (
            <div key={i} className='p-2 hover:bg-blue-800 text-md cursor-pointer font-medium hover:text-white border-[1px] border-b-0'>
              <label cateName="cursor-pointer" htmlFor={`${cate}`}>{cate}</label>
              <input className='hidden cursor-pointer' type='radio' id={`${cate}`} name='cate' value={`${cate}`}  onChange={(e)=>setCateName(e.target.value)}/>
            </div>
        ))
      }
    </div>
  );
}

export default CategoryMenu;
