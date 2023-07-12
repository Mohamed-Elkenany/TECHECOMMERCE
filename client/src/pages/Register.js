import React, { useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSignupMutation } from '../services/appApi';
import { useSelector } from 'react-redux';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Register = () => {
  const user = useSelector(state => state.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordRef = useRef();
  const [signup, { error, isLoading, isError }] = useSignupMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "" || password !== confirmPassword) {
      passwordRef.current.style.display = "block"
    } else {
      passwordRef.current.style.display = "none"
      signup({ name, email, image, password });
    }
  }
  const showWidget = (e) => {
        e.preventDefault();
        const Widget = window.cloudinary.createUploadWidget({ cloudName: "dhplkar8l", uploadPreset: "vaandg6z", folder:
        'widgetUpload', cropping: true }, (error, result) => { if (!error && result && result.event === "success"){
            setImage(result.info.url)
        }
        })
        Widget.open();
    }
  return (
    <div className=' h-[90vh] w-[100vw]'>
      <div className='h-full flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-around boxShadow h-[450px] w-[320px] py-3 px-8'>
          <h1 className='text-lg font-bold'>Signup</h1>
          {isError && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{error.data}</span></div>}
          {user && (
          <Navigate to="/" replace={true} />
        )}
        <div className='flex flex-col justify-center items-start w-full'>
          <label htmlFor="name" className='font-semibold  mb-1'>Name</label>
            <input type='text' id='name' defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder='enter your email' className="outline-none pl-2 border py-[4px] rounded-lg text-sm w-full" />
        </div>
        <div className='flex flex-col justify-center items-start w-full'>
          <label htmlFor="email" className='font-semibold  mb-1'>Email</label>
            <input type='email' id='email' defaultValue={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' className="outline-none pl-2 border py-[4px] rounded-lg text-sm w-full" />
        </div>
        <div className='flex justify-center items-start w-full flex-col'>
          <label htmlFor="password" className='font-semibold  mb-1'>Password</label>
            <input type='password' id='password' defaultValue={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password' className=" w-full outline-none pl-2 border py-[4px] rounded-lg text-sm flex-1" />
        </div>
        <div className='flex justify-center items-start w-full flex-col'>
          <label htmlFor="confirm" className='font-semibold mb-1'>Confirm password</label>
            <input type='password' id='confirm' defaultValue={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm password' className="w-full outline-none pl-2 border py-[4px] rounded-lg text-sm flex-1" />
            <p className='text-red-600 text-xs hidden' ref={passwordRef}>* Incorrect password...</p>
        </div>
          <div className='flex items-center justify-start w-full underline cursor-pointer' onClick={showWidget}>
            <AccountCircleOutlinedIcon/>
            <h1 className='text-blue-900 font-medium'>Upload avatar</h1>
          </div>
          <div >
            <input type='submit' value="Signup" disabled={isLoading} className='bg-blue-700 text-white py-2 px-4 rounded-sm cursor-pointer' />
          </div>
          <p><span className='font-bold text-[15px]'> Have an account ?</span> <Link to="/login" className='text-sm text-blue-800'>Login</Link></p>
      </form>
      </div>
    </div>
  );
}

export default Register;
