import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useLoginMutation } from '../services/appApi';
import { useSelector } from 'react-redux';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error, isLoading, isError }] = useLoginMutation();
  const user = useSelector(state => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  }
  return (
    <div className=' h-[90vh] w-[100vw]'>
      <div className='h-full flex items-center justify-center'>
        <form onSubmit = {handleLogin} className='flex flex-col items-center justify-around boxShadow h-[300px] w-[320px] py-3 px-3'>
          <h1 className='text-lg font-bold'>Login</h1>
          {isError && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{error.data}</span></div>}
          {user && (<Navigate to="/" replace={true} />)}
        <div className='flex justify-center items-start w-full flex-col'>
          <label htmlFor="email" className='mr-2 font-semibold'>Email</label>
          <input type='email' id='email' defaultValue={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='enter your email' className="w-full mb-1  outline-none pl-2 border py-[6px] rounded-lg text-sm flex-1"/>
        </div>
        <div className='flex justify-center items-start w-full flex-col'>
          <label htmlFor="password" className='mr-2 font-semibold'>Password</label>
          <input type='password' id='password' defaultValue={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' className=" w-full mb-1 outline-none pl-2 border py-[6px] rounded-lg text-sm flex-1"/>
        </div>
          <div>
            <input type='submit' disabled={isLoading}  value="Login" className='bg-blue-700 text-white py-2 px-4 rounded-sm cursor-pointer' />
          </div>
          <p><span className='font-bold text-[15px]'>Don't have an account ?</span> <Link to="/register" className='text-sm text-blue-800'>Create an account</Link></p>
      </form>
      </div>
    </div>
  );
}

export default Login;
