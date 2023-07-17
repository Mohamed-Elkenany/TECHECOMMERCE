import React from 'react';
import { useSelector } from "react-redux";
import { AiTwotoneStar } from 'react-icons/ai';
const LikeProduct = () => {
    const rateArray = [1, 2, 3, 4, 5];
    const user = useSelector(state => state.user);
    console.log(user);
    const products = useSelector(state => state.product);
    const userLike = user.like;
    const likeProducts = products.filter(product => userLike[product._id] != null);
    console.log(likeProducts);
return (
    <div className='pt-[80px]'>
        <div className='px-[50px]'>
            <div className='text-center bg-blue-600 py-1 mb-4'>
                <h1 className='text-white text-2xl font-medium'>Your Interested Product</h1>
            </div>
            <div className='products min-h-screen px-[70px]'>
                {
                    likeProducts.map((product, i) => (
                        <div className='boxShadow mb-4 h-[230px] flex items-start rounded-md'>
                            <div className='h-full overflow-hidden rounded-md flex-1 flex items-center justify-center'>
                                <img className='w-full rounded-md' src={product.picture[0].url} />
                            </div>
                            <div className='pt-[20px]  flex-[3] flex flex-col items-center h-full'>
                                <div className='mb-1'>
                                    <h1 className='text-lg font-medium text-slate-500'>{product.name}</h1>
                                </div>
                                <div className='mb-1'>
                                    <div className='rateStar flex items-center gap-1 mt-1'> { rateArray.map((rate, i) => ( <div key={i}> { (product.rate
                                     >= rate) ? (
                                        <AiTwotoneStar className=' text-yellow-500' /> ): (
                                        <AiTwotoneStar className=' text-gray-300' /> ) }
                                    </div> )) } </div>
                                </div>
                                <div className='mb-1'>
                                    <span className='font-bold text-blue-600'>${product.price}</span>
                                </div>
                                <div className='mb-2'>
                                    <p className='text-center text-sm text-slate-500 w-[700px]'>{product.description}</p>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <button className='border border-blue-600 w-[150px] h-[40px] font-medium text-blue-600 hover:text-white hover:bg-blue-600'>ADD TO CART</button>
                                    <button className='border w-[150px] border-red-600 h-[40px] font-medium text-red-600 hover:text-white hover:bg-red-600'>REMOVE</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
);
}

export default LikeProduct;
