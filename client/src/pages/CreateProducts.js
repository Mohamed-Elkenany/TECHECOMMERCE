import React, { useEffect, useState } from 'react';
import { useCreateProductMutation } from '../services/appApi';
import { ToastContainer, toast } from 'react-toastify';
import ClearIcon from '@mui/icons-material/Clear';
import 'react-toastify/dist/ReactToastify.css';
import { categoryName } from "../utilites";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios"
import { useDispatch,useSelector } from 'react-redux';
import { updateUser } from '../features/userSlice';
import Error from '../components/Error';
const CreateProducts = () => {
    const toastTheme = {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const users = useSelector(state => state.user);
    
    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [rate, setRate] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    const [createProduct, { error, isLoading, isError, isSuccess }] = useCreateProductMutation();
    const showWidget = (e) => {
        e.preventDefault();
        const widget = window.cloudinary.createUploadWidget(
            {
            cloudName: "dhplkar8l",
            uploadPreset:"vaandg6z"
            },
            (error, result) => { 
            if (!error && result && result.event === "success") { 
                setImages(prev => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
    }
            })
        widget.open();
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !category || !price || !description || !images.length || !rate ) {
            return toast.warning("Please fill all fields", toastTheme);
        }
        createProduct({id, name, category, price, description, images, rate, discount }).then(data => {
            if ( !data.error ) {
                setTimeout(() => {
                    navigate("/")
                }, 2000);
            }
        })
    }
    const handleRemove = (imgObj) => {
        setImages(prev => prev.filter(img => img.public_id !== imgObj.public_id));
    }
    return (
        <div className='px-[50px] mt-4 pt-[100px]'>
                <form onSubmit={handleSubmit}>
                <h1 className="text-center mb-4 text-4xl font-semibold bg-blue-600 text-slate-200 pb-1">Create Product</h1>
                {
                    isSuccess && toast.success("Done create product", toastTheme)
                }
                {
                    isError && toast.error(error.data, toastTheme)
                }
            <div className='flex flex-col items-center'>
                <div className='mt-[60px] mb-[20px] formContainer flex  justify-around w-full'>
                    <div className='left'>
                    <div className=' flex flex-col items-start mb-4'>
                        <label htmlFor='name' className='text-lg font-semibold mb-2'>Product Name</label>
                        <input type='text' defaultValue={name} id='name' placeholder= "Enter product name" onChange={e=>setName(e.target.value)} className='outline-none border w-[450px] pl-1 py-1'/>
                    </div>
                    <div className=' flex flex-col items-start mb-4'>
                        <label htmlFor='price' className='text-lg font-semibold mb-2'>Price ($)</label>
                        <input type='text' defaultValue={price} id='price' placeholder= "Enter product Price $" onChange={e=>setPrice(e.target.value)} className='outline-none border w-[450px] pl-1 py-1'/>
                    </div>
                    <div className=' flex flex-col items-start mb-4'>
                        <label htmlFor='discription' className='text-lg font-semibold mb-2'>Discription</label>
                        <textarea  defaultValue={description} id='discription' placeholder= "Enter product discription" onChange={e=>setDescription(e.target.value)} className='outline-none border max-h-[150px] w-[450px] pl-1 py-1'/>
                    </div>
                </div>
                <div className='right'>
                    <div className=' flex flex-col items-start mb-4'>
                        <label htmlFor='discount' className='text-lg font-semibold mb-2'>Have Discount($) ?</label>
                        <input type='text' defaultValue={discount} id='discount' placeholder= "Enter product discount" onChange={e=>setDiscount(e.target.value)} className='outline-none border w-[450px] pl-1 py-1'/>
                    </div>
                    <div className=' flex flex-col items-start mb-4'>
                        <label htmlFor='rate' className='text-lg font-semibold mb-2'>Product Rate</label>
                        <input type='number' defaultValue={rate} id='rate' placeholder= "Enter product Rate" onChange={e=>setRate(e.target.value)} className='outline-none border w-[450px] pl-1 py-1'/>
                    </div>
                    <div className=' flex flex-col items-start mb-8'>
                    <label htmlFor='category'  className='text-lg font-semibold mb-2'>Category</label>
                    <select id='category' defaultChecked={category} onChange={e=>setCategory(e.target.value)} className='outline-none border max-h-[100px] w-[450px] pl-1 py-1 text-center '>
                        <option key="select_one" selected disabled>--Select One--</option>
                        {
                            categoryName.map((name, i) => (
                                <option key={i}>{name}</option>
                                ))
                        }
                    </select>
                        </div>
                </div>
                </div>
                <div className="flex items-center flex-col">
                    <button className='bg-blue-600 text-slate-200 p-2 rounded-xl mb-10' onClick={showWidget}>Upload Images</button>
                    <div  className='w-full flex items-center gap-14 mb-12'>
                        {
                                images.map((image, i) => (
                                <div className='w-[100px] relative h-[100px]' key={i}>
                                        <img className='w-full h-full rounded-md' src={image.url} alt='product_image' />
                                        <ClearIcon className='absolute -top-3 -left-3 bg-black text-yellow-50 rounded-full hover:bg-red-600 cursor-pointer' onClick={()=>handleRemove(image)}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                    <button className='text-white bg-blue-600 p-2 rounded-2xl' onClick={handleSubmit}>Create Now</button>
            </div>
            </form>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
                </div>
    );
}

export default CreateProducts;
