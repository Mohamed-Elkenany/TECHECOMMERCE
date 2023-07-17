import React, { useEffect, useState } from 'react';
import { categoryName } from '../utilites';
import { UpdateState } from '../features/shareSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const CategoryMenu = () => {
  const [cateName, setCateName] = useState("Last Product");
  const check = (e) => {
    setCateName(e.target.value);
  }
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(UpdateState(cateName))
  },[cateName])
  return (
    <div className='bg-white flex flex-col items-start border'>
      <button key="Last Product" value="Last Product" onClick={check} className='p-2 border-b w-full hover:bg-blue-600 hover:text-white'>Last Product</button>
      {
        categoryName.map((cate,i) => (
          <button key={i} value={cate} onClick={check} className='p-2 border-b w-full hover:bg-blue-600 hover:text-white'>{cate}</button>
        ))
      }
    </div>
  );
}

export default CategoryMenu;
