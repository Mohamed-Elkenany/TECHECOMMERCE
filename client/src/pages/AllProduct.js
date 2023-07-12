import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { updataProduct } from '../features/productSlice';
import Product from '../components/Product';
import SideFilter from '../components/SideFilter';
import ToTop from '../components/ToTop';
import SearchProduct from '../components/SearchProduct';
const AllProduct = () => {
  const getcheck = (checked) => {
    setCheckCate(checked)
  }
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);
  const [backToTop, setBackToTop] = useState();
  const [checkCate, setCheckCate] = useState("all");
  const [textSearch, setTextSearch] = useState("");
  console.log(textSearch);
  const searchbar = (text) => {
    setTextSearch(text);
  } 
  const filterProduct = products.filter(product => {
    if (checkCate === "all"){
      if (textSearch) {
        return product.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
      }
      return product;
    } else if (checkCate === product.category) {
      return product;
    } else if (textSearch) {
      return product.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
    }
  })
  useEffect(() => {
    axios.get("/product").then(data => dispatch(updataProduct(data)));
  }, [dispatch])
  useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
              setBackToTop(false)
            }
        })
  }, [])
  return (
    <div className=' min-h-screen pt-[150px] pl-[200px] pr-[50px] mb-12'>
      <SearchProduct searchbar={searchbar} />
      <div className='h-full grid grid-cols-4 gap-6'>
    {
        filterProduct.map((product, i) => (
          <Product key={i} {...product} />
      ))
    }
    <SideFilter getcheck={getcheck} />
    </div>
      {
        (backToTop) && (
          <ToTop/>
        )
      }
    </div>
  );
}

export default AllProduct;
