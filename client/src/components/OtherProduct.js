import React, { useEffect, useState } from 'react';
import axios from "../axios"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updataProduct } from '../features/productSlice';
const OtherProduct = (props) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product);
    const productFilter = products.filter((product) => {
        if (props._id !== product._id && props.category === product.category)
            return (product);
    })
    useEffect(() => {
        axios.get('/product').then(data=> dispatch(updataProduct(data)))
    },[dispatch])
return (
    <>
        {
            (productFilter.length === 0) ? (
                <div className='flex-1'>
                    <h1 className='text-2xl font-semibold text-gray-800'>No other product yet...</h1>
                </div>
            ): (
            <>
                {
                            productFilter.map((product, i) => (
                        <Link key={i} to={`/product/${product._id}`}>
                <div className='image boxShadow cursor-pointer w-[250px]'>
        <div className="overflow-hidden relative">
        <div className='bg-white w-[250px]'>
        <img className='w-full' src={product.picture[0].url} alt='product_Pic'/>
        </div>
        <>
        {
            (product.discount) && (
            <div className='absolute top-7 left-7 bg-red-400 w-[50px] h-[50px] flex items-center justify-center rounded-full transform -rotate-45'>
                <h1 className='text-white font-medium'>Sale</h1>
            </div>
            )
        }
        </>
        
    </div>
    <div className='p-2 flex flex-col items-start'>
        <span className='text-sm text-slate-400 tracking-wide'>{product.category}</span>
        <h1 className='mb-2 h-[50px] text-gray-700 text-start'>{product.name}</h1>
        <div className="w-full h-[70px] text-start overflow-hidden mb-2">
        <span className='w-full h-full line-clamp-3 text-slate-600'>{product.description}</span>
        </div>
        <div className='flex items-center gap-2'>
        <h1 className='text-2xl font-semibold text-blue-600'>${product.price}</h1>
        {
            (product.discount) && (<h1 className='text-lg font-medium text-slate-300'>Was ${product.discount}</h1>)
        }
        </div>
    </div>
    </div>
            </Link>
                    ))
                }
            </>
            )
        }
    </>
    );
}

export default OtherProduct;
