import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { HiViewGridAdd } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useAddToCartMutation } from '../services/appApi';
const Product = (props) => {
  const themToasty = {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const [addToCart, { isSuccess }] = useAddToCartMutation();
  const addTocart = (user, product, price) => {
    addToCart({ userId: user, productId: product, price });
    toast.success( "Product Add To Cart", themToasty )
  }
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
                        <div className='AddIcons absolute  bg-slate-200 w-full'>
                    <div className="flex items-center justify-between">
                            <button onClick={() => addTocart(user._id, props._id, props.price)} className=' flex items-center justify-center text-blue-700 text-sm hover:underline w-[49%] border-r gap-1 hover:text-yellow-500 h-[40px]'>
                      <AiOutlineShoppingCart />
                      <h3>Add To Cart</h3>
                      </button>
                      <Link to={`/product/${props._id}`}
                        className=' flex items-center justify-center text-sm hover:underline text-blue-700 w-[49%] gap-1 hover:text-yellow-500 h-[40px]'>
                      <HiViewGridAdd />
                      <h3>View</h3>
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
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
    </div>
  );
}

export default Product;
