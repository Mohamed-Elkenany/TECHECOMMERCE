import React, { useEffect, useState } from 'react';
import axios from "../axios"
import { useUpdateProductMutation } from '../services/appApi';
import ClearIcon from '@mui/icons-material/Clear';
import Loading from "../components/Loading"
import { categoryName } from '../utilites';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const UpdateProduct = () => {
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
    const navigate = useNavigate()
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [name, setName] = useState("")
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [images, setImages] = useState([])
    const showWidget = (e) => {
        e.preventDefault();
        const Widget = window.cloudinary.createUploadWidget({ cloudName: "dhplkar8l", uploadPreset: "vaandg6z", folder:
        'widgetUpload', cropping: true }, (error, result) => { if (!error && result && result.event === "success"){
            setImages(prev => [...prev, { url: result.info.url, public_id: result.info.public_id }])
        }
        })
        Widget.open();
    }
    const [updateProduct, { isError, error,isSuccess }] = useUpdateProductMutation();
    const removeImage = (imgObj) => {
        setImages(img => img.filter(image => (image.public_id !== imgObj.public_id)));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (images.length <= 0) {
            return toast.warning("Please upload image's product", toastTheme);
        } else if (images.length > 0) { 
            updateProduct({ id, name, description, price, category, images });
            toast.success("Success update", toastTheme)
            setTimeout(() => {
                navigate("/")
            },1500)
        }
    }
    useEffect(() => {
        axios.get(`/product/${id}`).then(pro => {
            setProduct(pro.data)
            setImages(pro.data.picture)
            setName(pro.data.name)
            setDescription(pro.data.description)
            setPrice(pro.data.price)
            setCategory(pro.data.category)
        })
    },[id])
return (
    !product ? (<Loading />) :
        (
            <div className='pt-[90px] px-[50px]'>
        <div className='bg-black py-1 flex items-center justify-center text-white'>
            <h1 className='text-2xl font-medium'>Update Product</h1>
        </div>
        <form className='flex flex-col items-center mt-5' onSubmit={handleSubmit}>
            <div className='flex flex-col w-[400px] mb-3'>
                <label htmlFor='name' className='mb-1 text-lg font-medium'>Product Name</label>
                <input required type='text' defaultValue={product.name} onChange={e=>setName(!e.target.value ? product.name : e.target.value)} placeholder='Update Name' id='name' className='border outline-none pl-1 py-1 '/>
            </div>
            <div className='flex flex-col w-[400px] mb-3'>
                <label htmlFor='description' className='mb-1 text-lg font-medium'>Description</label>
                <textarea required type='text' defaultValue={product.description} onChange={e=>setDescription(!e.target.value ? product.description : e.target.value)} placeholder='Update Description' id='description' className='border outline-none pl-1 py-1 max-h-[100px]'/>
            </div>
            <div className='flex flex-col w-[400px]'>
                <label htmlFor='price' className='mb-1 text-lg font-medium'>Product Price($)</label>
                <input type='text' required defaultValue={product.price} onChange={e=>setPrice(!e.target.value ? product.price : e.target.value)} placeholder='Update Price' id='price' className='border outline-none pl-1 py-1 '/>
            </div>
            <div  className='flex flex-col w-[400px] mt-6'>
                <label htmlFor='category' className='mb-1 text-lg font-medium'>Category</label>
                <select id="category" required defaultChecked={product.category}  onChange={e=>setCategory(!e.target.value ? product.category : e.target.value)} className='cursor-pointer py-1 text-center border outline-none bg-black text-white'>
                    <option key="select_one" selected disabled>-- Update Category --</option>
                    {
                        categoryName.map((cate,i) => (
                            <option key={i} value={cate} className=''>{cate}</option>
                        ))
                    }
                </select>
            </div>
            <div className="mt-8">
                <button className='bg-blue-600 text-white px-3 py-1 rounded-sm' onClick={showWidget} disabled={!product}>Update Images</button>
                <div>
                    {
                        !product ? <Loading />
                            :
                            (
                                <div className='imageContainer w-full flex'>
                        {
                            images.map((image, i) => (
                                <div key={i} className='w-[100px] h-[100px] relative rounded-lg'>
                                    <img className='w-full h-full rounded-lg' src={image.url} alt='product_image' />
                                    <ClearIcon className='absolute -top-3 -left-2 rounded-full cursor-pointer hover:bg-orange-800 bg-black text-white' onClick={()=>removeImage(image)}/>
                                </div>
                            ))
                        }
                    </div>
                            )
                    }
                </div>
            </div>
            <input type='submit' value="Update" className='bg-blue-600 text-white mt-12 px-3 py-2 rounded-sm cursor-pointer' disabled={!product}/>
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
        )
    );
}

export default UpdateProduct;
