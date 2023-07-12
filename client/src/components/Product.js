import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineHeart, AiOutlineShoppingCart, AiTwotoneStar } from 'react-icons/ai';
import { HiViewGridAdd } from 'react-icons/hi';
import { Link, useNavigate } from "react-router-dom";
const Product = (props) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  return (
    <div className='image boxShadow cursor-pointer'>
      <div className="overflow-hidden relative">
        <div className='bg-white '>
        <img className='w-full' src={props.picture[0].url} alt='product_Pic'/>
        </div>
        <>
          {
            (props.discount) && (
              <div className='absolute top-7 left-7 bg-red-400 w-[50px] h-[50px] flex items-center justify-center rounded-full transform -rotate-45'>
                <h1 className='text-white font-medium'>Sale</h1>
              </div>
            )
          }
        </>
          <>
            {
            (user) ? (
              <>
                {
                  (user.isAdmin) ? (
                    <div className='AddIcons absolute  left-0 bg-slate-300 w-full flex items-center justify-center h-10 text-lg'>
                      <Link to={`/product/${props._id}`} className='flex items-center gap-1 hover:text-blue-600'>
                        <HiViewGridAdd />
                        <h1>View</h1>
                      </Link>
                    </div>
                  ): (
                      <div >
                        <div className='heartIcon absolute top-6  text-blue-600 border w-[30px] h-[30px] rounded-full border-blue-600 flex items-center justify-center hover:text-white hover:bg-blue-600'>
                          <AiOutlineHeart/>
                        </div>
                        <div className='AddIcons absolute h-10 left-0 bg-slate-300 w-full flex items-center'>
                          <div className='flex-1 flex items-center justify-center border-r'>
                            <div className='flex items-center hover:text-blue-600 text-sm'>
                              <AiOutlineShoppingCart />
                              <h1>Add To Cart</h1>
                            </div>
                          </div>
                          <div className='flex-1 flex items-center justify-center'>
                            <Link to={`/product/${props._id}`} className='flex items-center hover:text-blue-600 text-md'>
                              <HiViewGridAdd />
                              <h1>View</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                  )
                }
              </>
            ): (
                    <div >
                        <div className='heartIcon absolute top-6  text-blue-600 border w-[30px] h-[30px] rounded-full border-blue-600 flex items-center justify-center hover:text-white hover:bg-blue-600' onClick={()=>navigate("/login")}>
                          <AiOutlineHeart/>
                        </div>
                        <div className='AddIcons absolute h-10 left-0 bg-slate-300 w-full flex items-center'>
                          <div className='flex-1 flex items-center justify-center border-r'>
                            <Link to="/login" className='flex items-center hover:text-blue-600 text-sm'>
                              <AiOutlineShoppingCart />
                              <h1>Add To Cart</h1>
                            </Link>
                          </div>
                          <div className='flex-1 flex items-center justify-center'>
                            <Link to={`/product/${props._id}`} className='flex items-center hover:text-blue-600 text-md'>
                              <HiViewGridAdd />
                              <h1>View</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                  )
                }
          </>
      </div>
      <div className='p-2'>
        <span className='text-sm text-slate-400 tracking-wide'>{props.category}</span>
        <h1 className='mb-2 h-[50px] text-gray-700'>{props.name}</h1>
        <div className="w-full h-[70px] overflow-hidden mb-2">
          <span className='w-full h-full line-clamp-3 text-slate-600'>{props.description}</span>
        </div>
        <div className='flex items-center gap-2'>
          <h1 className='text-2xl font-semibold text-blue-600'>${props.price}</h1>
          {
            (props.discount) && (<h1 className='text-lg font-medium text-slate-300'>Was ${props.discount}</h1>)
          }
        </div>
      </div>
    </div>
  );
}

export default Product;
