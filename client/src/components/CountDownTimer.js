import React, { useEffect, useState } from 'react';

const CountDownTimer = () => {
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const dateline = "July 28, 2023";
    
    const getTime = () => {
        const time = Date.parse(dateline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor(time / (1000 * 60 * 60) % 24))
        setMinutes(Math.floor(time / (1000 * 60) % 60))
        setSeconds(Math.floor(time / (1000) % 60))
    };

    useEffect(() => {
        const Internal = setInterval(() => {
            getTime();
        }, 1000)
        return () => clearInterval(Internal);
    }, [])
return (
    <div className='mb-6 flex items-center'>
        <div className=' flex items-center gap-1'>
            <div className="relative w-[40px] h-[40px] bg-blue-600 text-white flex items-center justify-center rounded-lg">
                <h1 className='text-xl'>{days}</h1>
            <span className='absolute -bottom-4 text-xs font-semibold text-slate-500'>Days</span>
            </div>
            <span className='text-xl font-semibold mr-1'>:</span>
        </div>
        <div className=' flex items-center gap-1'>
            <div className="relative w-[40px] h-[40px] bg-blue-600 text-white flex items-center justify-center rounded-lg">
                <h1 className='text-xl'>{hours}</h1>
            <span className='absolute -bottom-4 text-xs font-semibold text-slate-500'>Hours</span>
            </div>
            <span className='text-xl font-semibold mr-1'>:</span>
        </div>
        <div className=' flex items-center gap-1'>
            <div className="relative w-[40px] h-[40px] bg-blue-600 text-white flex items-center justify-center rounded-lg">
                <h1 className='text-xl'>{minutes}</h1>
            <span className='absolute -bottom-4 text-xs font-semibold text-slate-500'>Minutes</span>
            </div>
            <span className='text-xl font-semibold mr-1'>:</span>
        </div>
        <div className=' flex items-center gap-1'>
            <div className="relative w-[40px] h-[40px] bg-blue-600 text-white flex items-center justify-center rounded-lg">
                <h1 className='text-xl'>{seconds}</h1>
            <span className='absolute -bottom-4 text-xs font-semibold text-slate-500'>seconds</span>
            </div>
        </div>
    </div>
    );
}

export default CountDownTimer;
