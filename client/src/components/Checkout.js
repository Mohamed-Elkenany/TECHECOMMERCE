import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { CardElement, useElements,useStripe } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCreateOrderMutation } from '../services/appApi';
const Checkout = () => {
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
    const elements = useElements();
    const stripe = useStripe();
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const [alterMessage, setAlterMessage] = useState("");
    const [paying, setPaying] = useState(false);
    const [createOrder, { isLoading, isError }] = useCreateOrderMutation();
    const [country,setCountry]=useState("")
    const [address, setAddress] = useState("")
    
    const handlePay = async (e)=> {
        e.preventDefault();
        if (!stripe || !elements || user.cart.count <= 0) return;
        setPaying(true);
        const { client_secret } = await fetch("http://localhost:5000/create-payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: user.cart.total }),
        }).then((res) => res.json());
        const { paymentIntent } = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
        setPaying(false);

        if (paymentIntent) {
            createOrder({ userId: user._id, cart: user.cart, address, country }).then((res) => {
                if (!isLoading && !isError) {
                    setAlterMessage(`Payment ${paymentIntent.status}`);
                    (toast.success( "Successful payment", themToasty ))
                    setTimeout(() => {
                        navigate("/orders")
                    },2000)
                }
            });
        }
    }
    return (
    <div className='px-[30px]'>
        {(user.cart.count !== 0 ) && (
        <form onSubmit={handlePay}>
            <div className='flex flex-col gap-2 items-center mb-6'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name' className=' font-medium'>Full_Name</label>
                    <input type='text' id='name' value={user.name} className='border py-1 w-[400px] rounded-sm pl-1' readOnly disabled />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email' className=' font-medium'>Email</label>
                    <input type='text' id='email' value={user.email} className='border py-1 w-[400px] rounded-sm pl-1' readOnly disabled />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='country' className=' font-medium'>Country</label>
                    <input type='text' id='country' placeholder='Enter your country' value={country} className='border outline-blue-600 py-1 w-[400px] rounded-sm pl-1' onChange={(e)=>setCountry(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='address' className=' font-medium'>Address</label>
                    <input type='text' id='address' placeholder='Enter your address' value={address} className='border outline-blue-600 py-1 w-[400px] rounded-sm pl-1' onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='card_elenemt' className=' font-medium'>Card</label>
                    <CardElement id='card_elenemt'   className='border outline-blue-600 py-2 w-[400px] rounded-sm pl-1'/>
                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
                    <button disabled={user.cart.count === 0 || paying} className='border w-[100px] h-[40px] rounded-sm border-blue-600 text-blue-700 font-medium hover:bg-blue-600 mx-auto hover:text-white'>{ paying ? "Processing..." : "Checkout" }</button>
            </div>
        </form>
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
            {/* Same as
        <ToastContainer /> */}
    </div>
);
}

export default Checkout;
