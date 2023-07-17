import React, { useEffect, useState } from 'react';
import banner from "../images/banner1/woman-g73d88c414_1280.jpg";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowRight, BsCalendar2Date, BsTelephone } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import MainFooter from "../components/MainFooter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import {useForm} from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import axios from "../axios";
const ContactUs = () => {
    const user = useSelector(state=>state.user)
    const tosteObj = {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const { reset } = useForm();
    const handleSubmite = (e) => {
        e.preventDefault();
        reset();
    }
    useEffect(() => {
        window.scroll(0,0)
    }, [])
return (
    <div className='pt-[70px]'>
        <div className='px-[50px] mb-[70px]'>
            <div className='relative'>
            {
                !banner ? <Loading/> : <img className='rounded-sm w-full h-full' src={banner} alt='banner' />
            }
            <div className='text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                <h1 className='text-4xl text-white font-semibold mb-2'>Contact Us</h1>
                <span className='text-white'>keep in touch with us</span>
            </div>
        </div>
        </div>
        <div className='px-[50px] flex gap-12'>
            <div className='flex flex-col flex-1'>
                <div className='mb-10'>
                    <h1 className='text-2xl font-medium mb-3'>Contact Information</h1>
                    <p className='text-slate-700'>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                </div>
                <div className='flex items-center justify-between mb-[120px]'>
                    <div>
                        <h1 className="text-xl mb-2">The Office</h1>
                        <div>
                            <div className="flex items-start gap-1 mb-6">
                                <CiLocationOn className='text-blue-700 mt-1'/>
                                <p className="text-slate-600">70 Washington Square South New<br />
                                    York, NY 10012, United States
                                </p>
                            </div>
                            <div className="flex items-start gap-1 mb-6">
                                <BsTelephone className='text-blue-700 mt-1'/>
                                <span className="text-slate-600">+123456789</span>
                            </div>
                            <div className="flex items-start gap-1">
                                <AiOutlineMail className='text-blue-700 mt-1'/>
                                <Link className="text-slate-600">tech@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl mb-2">The Office</h1>
                        <div className="flex items-start gap-1 mb-6">
                            <AiOutlineClockCircle className='text-blue-700 mt-1'/>
                            <span className="text-slate-600">Monday-Saturday<br/>11am-7pm ET</span>
                        </div>
                        <div className="flex items-start gap-1 mb-6">
                            <BsCalendar2Date className='text-blue-700 mt-1'/>
                            <span className="text-slate-600">Sunday <br/>11am-6pm ET</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <div className='mb-10'>
                    <h1 className='text-2xl font-medium mb-3'>Got Any Questions?</h1>
                    <p className='text-slate-700'>Use the form below to get in touch with the sales team.</p>
                </div>
                <div>
                    <form onSubmit={handleSubmite}>
                        <div className='flex items-center gap-6 mb-6'>
                            <div>
                                <input type='text' value={user.name} className='border outline-blue-600 w-full mb-8 h-[40px] pl-3 bg-slate-100'/>
                                <input type='text' defaultValue={phone} placeholder='Phon *' className='border outline-blue-600 w-full h-[40px] pl-3 bg-slate-100' onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <div>
                                <input type='email' value={user.email} className='border outline-blue-600 w-full mb-8 h-[40px] pl-3 bg-slate-100'/>
                                <input type='text' defaultValue={subject} placeholder='Subject' className='border outline-blue-600 w-full h-[40px] pl-3 bg-slate-100' onChange={(e)=>setSubject(e.target.value)}/>
                            </div>
                        </div>
                        <textarea placeholder='Message *' defaultValue={message} className='mb-3 border w-full h-[120px] outline-blue-600 resize-none p-3 bg-slate-100' onChange={(e)=>setMessage(e.target.value)} />
                        <button className='border flex items-center justify-center gap-3 w-[120px] h-[40px] border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600'><span>Submit</span> <BsArrowRight/></button>
                    </form>
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
        <MainFooter/>
        <Footer/>
    </div>
);
}

export default ContactUs;
