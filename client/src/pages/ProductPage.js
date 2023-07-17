import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "../axios"
import Loading from '../components/Loading';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import OtherProduct from '../components/OtherProduct';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useDeleteProductMutation, useIncreaseProductCartByAmountMutation } from '../services/appApi';
import { AiTwotoneStar } from 'react-icons/ai';
import MainFooter from '../components/MainFooter';
const ProductPage = () => {
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
  const rateArray = [1, 2, 3, 4, 5];
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const params = useParams();
  const [product, setProduct] = useState();
  const [image, setImage] = useState("");
  const [imageArray, setImageArray] = useState("");
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const id = params.id;
  const [deleteProduct, { isError, error, isLoading }] = useDeleteProductMutation();
  const [increaseProductCartByAmount,{isSuccess}] = useIncreaseProductCartByAmountMutation();
  const addTocart = (user, product, price,amount) => {
    increaseProductCartByAmount({ userId: user, productId: product, price, amount})
    toast.success( "Product Add To Cart", themToasty )
  }
  const DeleteProduct =  () => {
    deleteProduct(id).then(data => {
      if (data !== {}) {
        toast.success( "Product deleted successfully ", themToasty )
        setTimeout(() => {
          navigate("/")
        },1500)
      }
    }).catch(e=>console.log(e))
  }
  useEffect(() => {
    axios.get(`/product/${id}`).then(pro => {
      setProduct(pro.data)
      setImageArray(pro.data.picture)
      setImage(pro.data.picture[0].url)
      window.scroll(0,0)
    })
  }, [id])
  return (
    <div className="min-h-screen">
      {
        (!product) ? (
          <div className='relative min-h-[50vh]'>
            <Loading />
          </div>
        ) : (
            <div className='flex flex-col  px-[50px]'>
              <div className='pt-[100px] flex  mb-10'>
              <div className='left flex-1 flex flex-col'>
                <div className='mb-2 w-[300px] h-[300px] flex items-center justify-center rounded-lg boxShadow2'>
                  <img src={image} alt='product' className='w-full h-full rounded-lg'/>
                </div>
                <div className="flex items-center gap-3 w-[300px]">
                  {
                    product.picture.map((image,i) => (
                      <div className='boxShadow w-[70px] h-[70px] rounded-lg cursor-pointer' key={i} onClick={()=>setImage(image.url)}>
                        <img src={image.url} alt='product' className='w-full h-full rounded-lg'/>
                      </div>
                    ))
                  }
                </div>
              </div>
                <div className='right flex-1 flex flex-col items-start'>
                <h1 className='text-xl font-medium text-slate-600 mb-3'>{product.name}</h1>
                <div className="mb-3">
                  <div className='flex items-center gap-12 mb-3'>
                  <h1 className="text-2xl  text-blue-600"> ${product.price}</h1>
                  {
                    (product.discount) && (
                      <h1 className="text-2xl  text-slate-300 line-through"><span className='text-slate-300'>Was</span> ${product.discount}</h1>
                    )
                  }
                  </div>
                  <div className='rateStar flex items-center gap-1 mt-1'>
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
                  <p className='text-slate-500 w-[600px] mb-12'>{product.description}</p>
                  
                  {
                  (user) ? (
                    <>
                      {
                        (user.isAdmin) ? (
                          <div className='flex items-center gap-12 '>
                            <div className='border border-blue-600 text-md font-semibold text-blue-600 hover:bg-blue-600 hover:text-white w-[150px] h-[40px] flex items-center justify-center rounded-sm'>
                              <Link to={`/product/${product._id}/edit`} className=' bg-transparent w-full h-full flex items-center justify-center'>
                                <h1>Update Product</h1>
                            </Link>
                            </div>
                            <div className='border border-red-600 text-md font-semibold text-red-600 hover:bg-red-600 hover:text-white w-[150px] h-[40px] flex items-center justify-center rounded-sm'>
                              <button onClick={()=>setShowAlert(true)} className=' bg-transparent w-full h-full flex items-center justify-center'>
                                <h1>Delete Product</h1>
                            </button>
                            </div>
                            {
                              (showAlert) && (
                                <div className=' absolute top-[70px] left-[50%] transform -translate-x-[100%] bg-red-200 w-[300px] h-[70px] flex flex-col items-center'>
                                  <h1 className='text-md font-meduim mb-2'>Are you sure to delete the product</h1>
                                  <div className='flex items-center gap-6'>
                                    <button className="border w-[60px] h-[30px] border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm" onClick={DeleteProduct}>Yes</button>
                                    <button className="border w-[60px] h-[30px] border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-sm" onClick={()=>setShowAlert(false)}>Cancle</button>
                                  </div>
                                </div>
                              )
                            }
                          </div>
                        ): (
                            <div className='w-full flex flex-col items-center'>
                              <div className='w-[400px] mb-6 flex items-center flex-row-reverse justify-around'>
                                <div className=''>
                                <button className='border hover:bg-red-500 hover:text-white w-[35px]' onClick={()=>setCount(prev=> prev>0?prev-1:0)} disabled={ count<= 0 }>-</button>
                                <input type='text' value={count} className='border outline-none w-[50px] text-center' readOnly/>
                                <button className='border hover:bg-blue-600 hover:text-white w-[35px]' onClick={()=>setCount(prev=>prev+1)}>+</button>
                                </div>
                                <div className=''>
                                  <h1>Total_Cost: <span>${count*parseFloat(product.price)}</span></h1>
                                </div>
                              </div>
                                <button disabled={count <= 0} onClick={() => addTocart(user._id, product._id, product.price,count)} className='flex items-center gap-2 border justify-center hover:bg-blue-600 hover:text-white h-[40px] w-[200px]'>
                                <h1>ADD TO CART</h1>
                                <AddShoppingCartIcon/>
                              </button>
                            </div>
                        )
                      }
                    </>
                  ): (
                      <div className='w-full flex flex-col items-center'>
                              <div className='w-[400px] mb-6 flex items-center flex-row-reverse justify-around'>
                                <div className=''>
                                <button className='border hover:bg-red-500 hover:text-white w-[35px]' onClick={()=>setCount(prev=> prev>0?prev-1:0)}>-</button>
                                <input type='text' value={count} className='border outline-none w-[50px] text-center'/>
                                <button className='border hover:bg-blue-600 hover:text-white w-[35px]' onClick={()=>setCount(prev=>prev+1)}>+</button>
                                </div>
                                <div className='flex items-center gap-2'>
                                  <h1>Total_Cost:</h1>
                                  <span>${count*parseFloat(product.price)}</span>
                                </div>
                              </div>
                              <Link to="/login" className='flex items-center gap-2 border justify-center hover:bg-blue-600 hover:text-white h-[40px] w-[200px]'>
                                <h1>ADD TO CART</h1>
                                <AddShoppingCartIcon/>
                              </Link>
                            </div>
                    )
                  }
              </div>
              </div>
                <div className='text-center mb-[100px]'>
                <h1 className='text-2xl font-medium mb-8'>Other Products</h1>
                <div className='flex flex-wrap gap-12'>
                <OtherProduct {...product}/>
              </div>
              </div>
            </div>
        )
      }
      <MainFooter/>
      <Footer />
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

export default ProductPage;
