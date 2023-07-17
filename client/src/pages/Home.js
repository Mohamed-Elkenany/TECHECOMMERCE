import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import axios from "../axios"
import { image1, image2, image3, image4, image6, imaegSale } from '../utilites';
import { AiOutlineArrowRight, AiOutlineDoubleRight } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { BsFillLockFill } from 'react-icons/bs';
import {GiReturnArrow} from "react-icons/gi" 
import {AiOutlineGift} from "react-icons/ai" 
import { Link } from 'react-router-dom';
import { resatePro, updataProduct } from '../features/productSlice';
import LastProduct from '../components/LastProduct';
import DealsAndOutlet from '../components/DealsAndOutlet';
import Brands from '../components/Brands';
import BestSale from '../components/BestSale';
import LastDeals from '../components/LastDeals';
import FooterHome from '../components/FooterHome';
import Footer from '../components/Footer';
import ToTop from '../components/ToTop';
const Home = () => {
  const [backToTop, setBackToTop] = useState();
  const settings = {
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
  };
  const cateName = useSelector(state=>state.shareCate);
  const products = useSelector(state => state.product);
  console.log(products);
  let productsRev = [];
  products.map((product, i) => {
    productsRev.unshift(product);
  })
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("/product").then(data => dispatch(updataProduct(data))).catch(e => console.log(e));
  }, [dispatch]);
  useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
              setBackToTop(false)
            }
        })
  }, [])
  useEffect(() => {
        window.scroll(0,0)
    },[])
  return (
    <div className='pt-[80px]'>
    <div className="px-[50px]">
      <div className="Topbanner flex">
        <div className='left flex-1 overflow-x-hidden'>
          <div className='left'>
            <Slider {...settings} className="outline-none">
              <div className='relative'>
                <img src={image4} alt="banner" />
                <div className=" absolute top-[20%] left-[15%] flex flex-col gap-1">
                  <span className="text-xl text-blue-500">Daily Deals</span>
                  <h1 className='text-5xl font-bold w-[300px] pr-20'>AirPods Earphones</h1>
                  <div className="flex gap-3 mt-4">
                    <span className='text-md'>Today:</span>
                    <h1 className="text-blue-800 font-bold text-4xl">$249<sup className='text-[20px]'>.99</sup></h1>
                  </div>
                  <div className='mt-6 w-[120px] py-1 rounded-2xl text-white bg-blue-600 flex items-center justify-center'>
                    <Link to="/product" className='flex items-center gap-1'>
                      <h4>Click Here</h4>
                      <AiOutlineArrowRight/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={image6} alt="banner" />
                <div className=" absolute top-[20%] left-[15%] flex flex-col gap-1">
                  <span className="text-xl text-blue-500">Deals and Promotions</span>
                  <h1 className='text-5xl font-bold w-[300px] pr-20'>Echo Dot 3rd Gen</h1>
                  <div className="flex gap-3 mt-4">
                    <span className=' line-through text-md'>$49,99</span>
                    <h1 className="text-blue-800 font-bold text-4xl">$29<sup className='text-[20px]'>.99</sup></h1>
                  </div>
                  <div className='mt-6 w-[120px] py-1 rounded-2xl text-white bg-blue-600 flex items-center justify-center'>
                    <Link to="/product" className='flex items-center gap-1'>
                      <h4>Click Here</h4>
                      <AiOutlineArrowRight/>
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          </div>
          <div className='right flex flex-col gap-5'>
              <div className='image1 relative'>
                <img src={image1} alt="banner" />
              <div className=" absolute top-1 left-3">
                <span className='text-sm hover:text-blue-800 cursor-pointer tracking-widest'>Top Product</span>
                <div>
                  <h2 className=' font-bold tracking-wide cursor-pointer hover:text-blue-700 mb-3'>Edifier <br/>Stereo Bluetooth</h2>
                </div>
                  <Link to="/product">
                    <button className='flex items-center gap-1 text-blue-800 hover:bg-blue-800 hover:text-white px-2 rounded-2xl'><span>Shop Now</span><AiOutlineArrowRight/></button>
                  </Link>
              </div>
              </div>
              <div className='image2 relative'>
                <img src={image2} alt="banner" />
              <div className=" absolute top-1 left-3">
                <span className='text-sm hover:text-blue-800 cursor-pointer tracking-widest'>Clearance</span>
                <div>
                  <h2 className=' font-bold tracking-wide cursor-pointer text-blue-700 mb-3'>GoPro-Fusion 360<br/><span className=' font-normal'>Save $70</span></h2>
                </div>
                  <Link to="/product">
                    <button className='flex items-center gap-1 text-blue-800 hover:bg-blue-800 hover:text-white px-2 rounded-2xl'><span>Shop Now</span><AiOutlineArrowRight/></button>
                  </Link>
              </div>
              </div>
              <div className='image3 relative'>
                <img src={image3} alt="banner" />
              <div className=" absolute top-1 left-3">
                <span className='text-sm hover:text-blue-800 cursor-pointer tracking-widest'>Featured</span>
                <div>
                  <h2 className=' font-bold tracking-wide cursor-pointer hover:text-blue-700 mb-3'>Apple Watch 4 <br/><span className=' font-normal'>Our Hottest Deals</span></h2>
                </div>
                  <Link to="/product">
                    <button className='flex items-center gap-1 text-blue-800 hover:bg-blue-800 hover:text-white px-2 rounded-2xl'><span>Shop Now</span><AiOutlineArrowRight/></button>
                  </Link>
              </div>
              </div>
          </div>
      </div>
      <div className='my-[100px] grid grid-cols-4 gap-14'>
        <div className='w-[250px] h-[150px] boxShadow text-blue-600 rounded-md flex items-center justify-center'>
          <div className='flex flex-col items-center'>
            <GiReturnArrow className='text-[30px]'/>
            <h1 className="text-xl font-medium">30 Days return</h1>
          </div>
        </div>
        <div className='w-[250px] h-[150px] boxShadow bg-blue-600 text-white rounded-md flex items-center justify-center'>
          <div className='flex flex-col items-center'>
            <RiShoppingCart2Line className='text-[30px]'/>
            <h1 className="text-xl font-medium">Free shipping</h1>
          </div>
        </div>
        <div className='w-[250px] h-[150px] boxShadow text-blue-600 rounded-md flex items-center justify-center'>
          <div className='flex flex-col items-center'>
            <BsFillLockFill className='text-[30px]'/>
            <h1 className="text-xl font-medium">Secure payments</h1>
          </div>
        </div>
        <div className='w-[250px] h-[150px] boxShadow bg-blue-600 text-white rounded-md flex items-center justify-center'>
          <div className='flex flex-col items-center'>
            <AiOutlineGift className='text-[30px]'/>
            <h1 className="text-xl font-medium">New product</h1>
          </div>
        </div>
      </div>
      <div className='lastProduct'>
          <h1 className='text-center text-4xl mb-[60px] font-bold'>{cateName}</h1>
        <div className='grid grid-cols-4  mb-[60px] gap-14 relative'>
        {
              productsRev.filter(product => {
            if(cateName === product.category){
              return (product);
            } else if(cateName === "Last Product"){
              return (product);
            }
          }).slice(0,8).map((product,i) => (
            <LastProduct key={i} { ...product} cateName={cateName} />
          ))
        }
        <Link to="/product" className='flex items-center gap-1 text-blue-600 absolute -bottom-10 right-0'>
        <p>See More</p>
        <AiOutlineDoubleRight/>
      </Link>
        </div>
      </div>
        <div className="my-[40px] relative">
          <div >
            <img className='w-full h-full' src={imaegSale} alt='banner'/>
          </div>
          <div className=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex items-center justify-around w-[98%] h-[88%] bg-white px-[20px]">
            <div className='flex flex-col justify-end items-end'>
              <h1 className='text-blue-600 font-bold text-xl'>New Deals</h1>
              <h1 className='font-bold text-xl'>Start Daily at 12pm e.t.</h1>
            </div>
            <div className='text-md'>
              <p className='text-gray-500'>Get <span className='text-black'>FREE SHIPPING* & 5% rewards</span> on</p>
              <p className=' text-gray-500'>every order with Molla Theme rewards program</p>
            </div>
            <div>
              <button className='flex items-center gap-1 bg-blue-600 px-4 py-2 rounded-3xl text-yellow-50'>
                <h2>Add To Cart For $50.00/yr</h2>
                <AiOutlineArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </div>
        <div className="bg-slate-100 px-[50px] py-[30px]">
          <DealsAndOutlet/>
      </div>
      <Brands />
      <BestSale />
      <LastDeals />
      <FooterHome/>
      <Footer />
      {
        (backToTop) && (
          <ToTop/>
        )
      }
    </div>
  );
}

export default Home;
