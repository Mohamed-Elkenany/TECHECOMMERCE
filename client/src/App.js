import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import CreateProducts from './pages/CreateProducts';
import ProductPage from "./pages/ProductPage";
import AllProduct from './pages/AllProduct';
import UpdateProduct from './pages/UpdateProduct';
import { createBrowserRouter, createRoutesFromElements,Outlet,Route,RouterProvider, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import LikeProduct from './pages/LikeProduct';
import Orders from './pages/Orders';
const App = () => {
  const user = useSelector(state=>state.user);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>} />
        <Route path="/:id/create_product" element={(<CreateProducts/>)} />
        <Route path="/product" element={<AllProduct/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/product/:id/edit" element={<UpdateProduct/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about_us" element={<AboutUs/>} />
        <Route path="/:id/Cart" element={<Cart/>} />
        <Route path="/contact_us" element={<ContactUs/>} />
        <Route path="/like_product" element={<LikeProduct/>} />
        <Route path="/orders" element={<Orders/>} />
      </Route>
    )
  )
  return (
    <div className=''>
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export default App;
