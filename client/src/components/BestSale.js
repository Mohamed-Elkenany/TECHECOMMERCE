import React, { useEffect } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart, AiTwotoneStar } from 'react-icons/ai';
import { HiViewGridAdd } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "../axios"
import { useDispatch,useSelector } from "react-redux";
import { updataProduct } from '../features/productSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useAddToCartMutation } from '../services/appApi';
const BestSale = () => {
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
    const rateArray = [1, 2, 3, 4, 5];
    const dispatch = useDispatch;
    const products = useSelector(state => state.product);
    const user = useSelector(state => state.user);
    const filterPorDis = products.filter(product => {
        if (product.rate >= 3) {
            return product;
        }
    })
    const [addToCart, { isSuccess }] = useAddToCartMutation();
    const addTocart = (user, product, price) => {
    addToCart({ userId: user, productId: product, price });
    toast.success( "Product Add To Cart", themToasty )
  }
    useEffect(() => {
        axios.get("/product")
            .then(data => dispatch(updataProduct(data)))
            .catch(e => console.log(e.message));
    }, [dispatch]);
return (
    <div className="bg-slate-50">
      <div className="text-center my-[60px] pt-[30px]  ">
        <h1 className="text-2xl font-bold">Top Selling Products</h1>
      </div>
      <div className='mb-[20px]'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={20}
      slidesPerView={4}
    >
      {
        filterPorDis.map((product,i)=>(
      <SwiperSlide key={i} className='mb-[60px] cursor-pointer'>
        <div className=' image'>
          {
          (user) ? (
          <div>
            {
                (user.isAdmin) ? (
                  <div className='border flex justify-center flex-col  boxShadow rounded-md'>
                    <div className="w-full relative overflow-hidden">
                        <img className='w-full rounded-md bg-white' src={product.picture[0].url} />
                        <div>
                            <div>
                                <div className='AddIcons absolute bg-slate-300 h-[40px] w-full flex items-center justify-center'>
                                  <Link to={`/product/${product._id}`} className='flex items-center hover:text-yellow-700'>
                                    <HiViewGridAdd/>
                                    <span className='text-semibold'>View</span>
                                  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  <div>
                      <div className='bottom px-4'>
                            <span className='text-slate-400 tracking-wide'>{product.category}</span>
                            <h1 className='h-14 text-lg'>{product.name}</h1>
                                {
                                  (product.discount) ? (
                                  <div className='flex items-center gap-3'>
                                    <h1 className='text-xl font-bold text-yellow-600'>${product.price}</h1>
                                    <h1 className='text-xl font-bold text-slate-300'>Was ${product.discount}</h1>
                                  </div>
                                  ): (
                                    <h1 className='text-xl font-bold text-yellow-600'>${product.price}</h1>
                                  )
                              }
                              <div className='flex items-center mb-2'>
                                {
                              rateArray.map((rate, i) => (
                            <div key={i}>
                              {
                              (product.rate >= rate) ? (
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
                  </div>
                ): (
                    <div className='border flex justify-center flex-col  boxShadow rounded-md'>
                    <div className="w-full relative overflow-hidden">
                        <img className='w-full rounded-md bg-white' src={product.picture[0].url} />
                        <div>
                            <div className='heartIcon top-6 absolute w-[30px] h-[30px] rounded-full border text-blue-600 hover:text-white hover:bg-blue-600 border-blue-600 flex items-center justify-center cursor-pointer'>
                              <AiOutlineHeart className='text-lg '/>
                            </div>
                            <div className='AddIcons absolute  bg-slate-200 w-full'>
                    <div className="flex items-center justify-between">
                      <button onClick={()=>addTocart(user._id,product._id,product.price)} className=' flex items-center justify-center text-blue-700 text-sm hover:underline w-[49%] border-r gap-1 hover:text-yellow-500 h-[40px]'>
                      <AiOutlineShoppingCart />
                      <h3>Add To Cart</h3>
                      </button>
                      <Link to={`/product/${product._id}`}
                        className=' flex items-center justify-center text-sm hover:underline text-blue-700 w-[49%] gap-1 hover:text-yellow-500 h-[40px]'>
                      <HiViewGridAdd />
                      <h3>View</h3>
                      </Link>
                    </div>
                  </div>
                        </div>
                    </div>
                  <div>
                      <div className='bottom px-4'>
                            <span className='text-slate-400 tracking-wide'>{product.category}</span>
                            <h1 className='h-14 text-lg'>{product.name}</h1>
                                {
                                  (product.discount) ? (
                                  <div className='flex items-center gap-3'>
                                    <h1 className='text-xl font-bold text-yellow-600'>${product.price}</h1>
                                    <h1 className='text-xl font-bold text-slate-300'>Was ${product.discount}</h1>
                                  </div>
                                  ): (
                                    <h1 className='text-xl font-bold text-yellow-600'>${product.price}</h1>
                                  )
                              }
                              <div className='flex items-center mb-2'>
                                {
                              rateArray.map((rate, i) => (
                            <div key={i}>
                              {
                              (product.rate >= rate) ? (
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
                  </div>
              )
            }
          </div>
          ): (
            <div className='border flex justify-center flex-col  boxShadow rounded-md'>
                    <div className="w-full relative overflow-hidden">
                        <img className='w-full rounded-md bg-white' src={product.picture[0].url} />
                        <div>
                            <div className='heartIcon absolute top-6 right-6 w-[30px] h-[30px] rounded-full border text-blue-600 hover:text-white hover:bg-blue-600 border-blue-600 flex items-center justify-center cursor-pointer'>
                              <AiOutlineHeart className='text-lg '/>
                            </div>
                            <div>
                                <div className='AddIcons absolute bg-slate-300 h-[40px] w-full flex items-center justify-between py-1 px-[30px]'>
                                  <Link to="/login" className='flex items-center border-r flex-2 mr-4 hover:text-yellow-700'>
                                    <AiOutlineShoppingCart/>
                                    <span className='text-semibold mr-2'>Add To Cart</span>
                                  </Link>
                                  <Link to={`/product/${product._id}`} className='flex flex-1 mr-6 items-center justify-end hover:text-yellow-700'>
                                    <HiViewGridAdd/>
                                    <span className='text-semibold'>View</span>
                                  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  <div>
                      <div className='bottom px-4'>
                            <span className='text-slate-400 tracking-wide'>{product.category}</span>
                            <h1 className='h-14 text-lg'>{product.name}</h1>
                                {
                                  (product.discount) ? (
                                  <div className='flex items-center gap-3'>
                                    <h1 className='text-xl font-bold text-yellow-600'>${product.price}</h1>
                                    <h1 className='text-xl font-bold text-slate-300'>Was ${product.discount}</h1>
                                  </div>
                                  ): (
                                    <h1 className='text-xl font-bold text-yellow-600'>${product.price}</h1>
                                  )
                              }
                              <div className='flex items-center mb-2'>
                                {
                              rateArray.map((rate, i) => (
                            <div key={i}>
                              {
                              (product.rate >= rate) ? (
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
                  </div>
          )
        }
        </div>
      </SwiperSlide>
      ))
      }
    </Swiper>
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

export default BestSale;
