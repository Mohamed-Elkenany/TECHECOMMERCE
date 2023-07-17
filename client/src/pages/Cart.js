import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import MainFooter from "../components/MainFooter";
import Footer from "../components/Footer";
import { MdClose } from "react-icons/md";
import { useDecreaseProductCartMutation, useIncreaseProductCartMutation, useRemoveProductCartMutation } from "../services/appApi";
import { useParams } from 'react-router-dom';
import Checkout from '../components/Checkout';
const stripePromise = loadStripe('pk_test_51NUBJkJgsCul5s1krpAdEssBewKptRLBHTHLYE0dYq3mTrGFNI67G4MaxZM6nq9PcecfNcDt2MTMtDuxgBSW39v400mbVO1Sii');
const Cart = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { id } = useParams();
    const products = useSelector(state => state.product);
    const userCart = user.cart;
    const productCart = products.filter(product => user.cart[product._id] != null);
    const [increaseProductCart] = useIncreaseProductCartMutation();
    const [decreaseProductCart] = useDecreaseProductCartMutation();
    const [removeProductCart] = useRemoveProductCartMutation();
    return (
        <div className='relative'>
            <div className='pt-[80px] px-[50px] min-h-[49vh]'>
            <div className='text-center text-3xl font-medium text-white bg-blue-600 rounded-sm mb-6'><h1>PRODUCT CART</h1></div>
                {(user.cart.count === 0) && (<div className='text-center mb-3 text-slate-400 text-4xl'><h1>Your Cart Is Empty...</h1></div>)}
                    <div className='flex  gap-6 mb-[120px]'>
                        <div className=' flex-1'>
                        {(user.cart.count !== 0) && (<div className='text-center bg-slate-300 text-blue-600 py-1 rounded-sm text-xl font-medium mb-3'><h1>Payment</h1></div>)}
                            <Elements stripe={stripePromise}>
                                <Checkout/>
                            </Elements>
                        </div>
                    { (user.cart.count !== 0) &&(
                        <div className=' flex-1'>
                            <div className='text-center bg-slate-300 text-blue-600 py-1 rounded-sm text-xl font-medium mb-3'><h1>Your Product</h1></div>
                            <table className='w-full'>
                                <tr className='flex items-center justify-between mb-3'>
                                    <th className='flex-1'>Image</th>
                                    <th className='flex-1'>Total_Price</th>
                                    <th className='flex-1'>Count</th>
                                    <th className='flex-1'>Price</th>
                                    <th className='flex-1'>Name</th>
                                </tr>
                                {
                                    productCart.map((product, i) => (
                                        <tr key={i} className='flex items-center relative mb-3'>
                                            <button onClick={() => removeProductCart({ userId: user._id, productId: product._id, price: product.price })} className='absolute top-[50%] transform -left-6 z-[99] -translate-y-[50%] w-[25px] h-[25px] border border-slate-800 hover:border-none flex items-center justify-center text-slate-600 rounded-full hover:text-white hover:bg-red-600'><MdClose /></button>
                                            <td className='flex-1 flex items-center justify-center'><div className='w-[100px] h-[100px] boxShadow rounded-md'><img className='w-full h-full rounded-md' src={product.picture[0].url} alt='product_image' /></div></td>
                                            <td className='flex-1 flex items-center justify-center font-medium text-slate-600'>$<h1>{product.price * userCart[product._id]}</h1></td>
                                            <td className='flex-1 flex items-center justify-center'>
                                                <button className='w-[30px] border max-h-full hover:text-white hover:bg-red-600' onClick={() => decreaseProductCart({ userId: user._id, productId: product._id, price: product.price })}>-</button>
                                                <input type='text' className='text-center border w-[45px]' value={userCart[product._id]} />
                                                <button className='w-[30px] border max-h-full hover:text-white hover:bg-blue-600' onClick={() => increaseProductCart({ userId: user._id, productId: product._id, price: product.price })}>+</button>
                                            </td>
                                            <tr className='flex-1 flex items-center justify-center font-medium text-slate-600'><h1>${product.price}</h1></tr>
                                            <tr className='flex-1 flex items-center justify-center text-md font-medium text-slate-600'><h1>{product.name.slice(0, 12)}...</h1></tr>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td className='flex items-center mt-12 justify-around border w-[215px]'>
                                        <h1 className='text-slate-600 font-medium text-xl'>Total_Cost:</h1>
                                        <h1 className='text-slate-600 font-medium text-xl'>${userCart.total}</h1>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    )
                    }
                    </div>
        </div>
            {/* <MainFooter/>
            <Footer/> */}
        </div>
);
}

export default Cart;
