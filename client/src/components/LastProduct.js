import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart, AiTwotoneStar } from 'react-icons/ai';
import { HiViewGridAdd } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAddToCartMutation } from "../services/appApi";
const LastProduct = (props) => {
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
  const[like,setLike]=useState(false)
  const user = useSelector(state => state.user);
  const rateArray = [1, 2, 3, 4, 5];
  const [addToCart, { isSuccess }] = useAddToCartMutation();
  const AddTocart = () => {
    addToCart({userId:user._id,productId:props._id,price:props.price})
    toast.success( "Product Add To Cart", themToasty )
  }
  return (
    <div>
      {
        (user) ? (
          <div>
            {
              (user.isAdmin) ? (
              <div className='lastProduct cursor-pointer boxShadow rounded-md'>
              <div className='image relative overflow-hidden'>
                <img className='rounded-md w-full' src={props.picture[0].url} alt="product"/>
              <div className='icons'>
                <div className='AddIcons absolute  bg-slate-200 w-full'>
                  <div className="flex items-center justify-center">
                      <Link to={`/product/${props._id}`} className=' flex items-center justify-center text-sm hover:underline text-blue-700 w-[49%] gap-1 hover:text-yellow-500 h-[40px]'>
                        <HiViewGridAdd />
                        <h3>View</h3>
                      </Link>
                  </div>
                </div>
              </div>
              </div>
              <div className='px-[20px] pb-[10px]'>
                <span className=' text-slate-300 tracking-wide hover:text-black text-[15px]'>{props.category}</span>
                <h3 className='text-lg h-[60px]'>{props.name}</h3>
                <span className=' text-2xl font-bold text-yellow-600'>${props.price}</span>
                <div className='rateStar flex items-center gap-1 mt-1'>
                  {
                    rateArray.map((rate, i) => (
                      <div key={i}>
                        {
                          (props.rate >= rate) ? (
                        <AiTwotoneStar className=' text-yellow-500'/>
                        ): (
                        <AiTwotoneStar className=' text-gray-300'/>
                      )
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
              ): (
                  <div className='lastProduct cursor-pointer boxShadow rounded-md'>
              <div className='image relative overflow-hidden'>
                <img className='rounded-md w-full' src={props.picture[0].url} alt="product" />
                <div className='icons'>
                        <div  className={`heartIcon absolute top-6 h-[30px] w-[30px] border border-${like ? `none` : 'blue-700'} flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white text-${like ? `white` : 'blue-700'} bg-${like ? `blue-700` : 'white'}`}>
                    <AiOutlineHeart className=' font-semibold' />
                  </div>
                  <div className='AddIcons absolute  bg-slate-200 w-full'>
                    <div className="flex items-center justify-between">
                      <button onClick={AddTocart} className=' flex items-center justify-center text-blue-700 text-sm hover:underline w-[49%] border-r gap-1 hover:text-yellow-500 h-[40px]'>
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
              </div>
              <div className='px-[20px] pb-[10px]'>
                <span className=' text-slate-300 tracking-wide hover:text-black text-[15px]'>{props.category}</span>
                <h3 className='text-lg h-[60px]'>{props.name}</h3>
                <span className=' text-2xl font-bold text-yellow-600'>${props.price}</span>
                <div className='rateStar flex items-center gap-1 mt-1'> { rateArray.map((rate, i) => ( <div key={i}> { (props.rate
                    >= rate) ? (
                    <AiTwotoneStar className=' text-yellow-500' /> ): (
                    <AiTwotoneStar className=' text-gray-300' /> ) }
                  </div> )) } </div>
              </div>
            </div>
              )
            }
          </div>
        ): (
            <div className='lastProduct cursor-pointer boxShadow rounded-md'>
              <div className='image relative overflow-hidden'>
                <img className='rounded-md w-full' src={props.picture[0].url} alt="product" />
                <div className='icons'>
                  <div
                    className='heartIcon absolute top-6 h-[30px] w-[30px] border border-blue-700 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white text-blue-700 ' onClick={()=>navigate("/login")}>
                    <AiOutlineHeart className=' font-semibold' />
                  </div>
                  <div className='AddIcons absolute  bg-slate-200 w-full'>
                    <div className="flex items-center justify-between">
                      <Link to="/login"
                        className=' flex items-center justify-center text-blue-700 text-sm hover:underline w-[49%] border-r gap-1 hover:text-yellow-500 h-[40px]'>
                      <AiOutlineShoppingCart />
                      <h3>Add To Cart</h3>
                      </Link>
                      <Link to={`/product/${props._id}`}
                        className=' flex items-center justify-center text-sm hover:underline text-blue-700 w-[49%] gap-1 hover:text-yellow-500 h-[40px]'>
                      <HiViewGridAdd />
                      <h3>View</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-[20px] pb-[10px]'>
                <span className=' text-slate-300 tracking-wide hover:text-black text-[15px]'>{props.category}</span>
                <h3 className='text-lg h-[60px]'>{props.name}</h3>
                <span className=' text-2xl font-bold text-yellow-600'>${props.price}</span>
                <div className='rateStar flex items-center gap-1 mt-1'> { rateArray.map((rate, i) => ( <div key={i}> { (props.rate
                    >= rate) ? (
                    <AiTwotoneStar className=' text-yellow-500' /> ): (
                    <AiTwotoneStar className=' text-gray-300' /> ) }
                  </div> )) } </div>
              </div>
            </div>
        )
      }
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
  )
}

export default LastProduct;
