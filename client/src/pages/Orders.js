import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "../axios"
import Loading from "../components/Loading";
const Orders = () => {
    const user = useSelector(state => state.user);
    const [orders, setOrders] = useState([]);
    console.log(orders);
    const [loading, setLoading] = useState(true);
    console.log(loading)
    useEffect(() => {
        setLoading(true);
        axios.get(`/user/${user._id}/orders`)
            .then(data => {
            setLoading(false);
            setOrders(data);
            }).catch(e => {
            console.log(e.message);
        })
    },[])
    return (
    <div className='pt-[70px] px-[50px]'>
        {
            (loading) ? (<Loading />) : (
        <div>
            <div className='text-center bg-blue-600 text-white py-1 text-2xl font-medium mb-2'>
            <h1>Your Orders</h1>
            </div>
            <div>
                {
                    (orders.data.order.length === 0) ? (<div className='text-center text-4xl font-medium h-full text-slate-400'><h1>No order yet...</h1></div>) : (
                <table className='w-full'>
                    <thead className=''>
                        <tr className='w-full flex items-center justify-between'>
                            <th className='text-center border mb-1 border-slate-300 font-medium w-full bg-slate-200 flex-1'>#</th>
                            <th className='text-center border mb-1 border-slate-300 font-medium w-full border-l-0 bg-slate-300 flex-[2]'>Order_ID</th>
                            <th className='text-center border mb-1 border-slate-300 font-medium w-full border-l-0 bg-slate-200 flex-1'>Total_Price</th>
                            <th className='text-center border mb-1 border-slate-300 font-medium w-full border-l-0 bg-slate-300 flex-1'>Count</th>
                            <th className='text-center border mb-1 border-slate-300 font-medium w-full border-l-0 bg-slate-200 flex-[2]'>Status</th>
                            <th className='text-center border mb-1 border-slate-300 font-medium w-full border-l-0 bg-slate-300 flex-[2]'>Date</th>
                            <th className='text-center border mb-1 border-slate-300 font-medium w-full border-l-0 bg-slate-200 flex-1'>#</th>
                        </tr>
                    </thead>
                <tbody>
                    {
                            orders.data.order.map((order, i) => (
                                <tr key={i} className='w-full relative flex items-center justify-between'>
                                    <th className='text-center border mb-1 border-slate-300 font-medium w-full bg-slate-200 flex-1'>{i + 1}</th>
                                    <th className='text-center  border mb-1 border-slate-300 font-normal w-full border-l-0 bg-slate-300 line-clamp-3 flex-[2] '>{order._id}</th>
                                    <th className='text-center border mb-1 border-slate-300 font-medium w-full bg-slate-200 flex-1'>${order.products.total}</th>
                                    <th className='text-center border mb-1 border-slate-300 font-medium w-full border-l-0 bg-slate-300 flex-1'>{order.products.count}</th>
                                        <th className='text-center border mb-1 border-slate-300 font-medium w-full border-l-0 bg-red-200 flex-[2]'>{order.status}</th>
                                    <th className='text-center border mb-1 border-slate-300 font-medium w-full border-l-0 bg-slate-300 flex-[2]'>{order.date}</th>
                                        <th className='text-center border mb-1 border-slate-300 font-medium w-full border-l-0 bg-slate-200 flex-[1]'>#</th>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
                    )
                        }
        </div>
        </div>
            )
                }
    </div>
);
}

export default Orders;
