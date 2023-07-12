import React from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart, AiTwotoneStar } from 'react-icons/ai';
import { HiViewGridAdd } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const LastProduct = (props) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const rateArray = [1, 2, 3, 4, 5];
  return (
    <div>
      {
        (user) ? (
          <div>
            {
              (user.isAdmin) ? (
              <div className='lastProduct cursor-pointer boxShadow rounded-md'>
              <div className='image relative overflow-hidden'>
                <img className='rounded-md w-full' src={props.picture[0].url} alt="product"/>
              <div className='icons'>
                <div className='AddIcons absolute  bg-slate-200 w-full'>
                  <div className="flex items-center justify-center">
                      <Link to={`/product/${props._id}`} className=' flex items-center justify-center text-sm hover:underline text-blue-700 w-[49%] gap-1 hover:text-yellow-500 h-[40px]'>
                        <HiViewGridAdd />
                        <h3>View</h3>
                      </Link>
                  </div>
                </div>
              </div>
              </div>
              <div className='px-[20px] pb-[10px]'>
                <span className=' text-slate-300 tracking-wide hover:text-black text-[15px]'>{props.category}</span>
                <h3 className='text-lg h-[60px]'>{props.name}</h3>
                <span className=' text-2xl font-bold text-yellow-600'>${props.price}</span>
                <div className='rateStar flex items-center gap-1 mt-1'>
                  {
                    rateArray.map((rate, i) => (
                      <div key={i}>
                        {
                          (props.rate >= rate) ? (
                        <AiTwotoneStar className=' text-yellow-500'/>
                        ): (
                        <AiTwotoneStar className=' text-gray-300'/>
                      )
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
              ): (
                   <div className='lastProduct cursor-pointer boxShadow rounded-md'>
              <div className='image relative overflow-hidden'>
                <img className='rounded-md w-full' src={props.picture[0].url} alt="product" />
                <div className='icons'>
                  <div
                    className='heartIcon absolute top-6 h-[30px] w-[30px] border border-blue-700 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white text-blue-700 '>
                    <AiOutlineHeart className=' font-semibold' />
                  </div>
                  <div className='AddIcons absolute  bg-slate-200 w-full'>
                    <div className="flex items-center justify-between">
                      <Link to="/cart"
                        className=' flex items-center justify-center text-blue-700 text-sm hover:underline w-[49%] border-r gap-1 hover:text-yellow-500 h-[40px]'>
                      <AiOutlineShoppingCart />
                      <h3>Add To Cart</h3>
                      </Link>
                      <Link to={`/product/${props._id}`}
                        className=' flex items-center justify-center text-sm hover:underline text-blue-700 w-[49%] gap-1 hover:text-yellow-500 h-[40px]'>
                      <HiViewGridAdd />
                      <h3>View</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-[20px] pb-[10px]'>
                <span className=' text-slate-300 tracking-wide hover:text-black text-[15px]'>{props.category}</span>
                <h3 className='text-lg h-[60px]'>{props.name}</h3>
                <span className=' text-2xl font-bold text-yellow-600'>${props.price}</span>
                <div className='rateStar flex items-center gap-1 mt-1'> { rateArray.map((rate, i) => ( <div key={i}> { (props.rate
                    >= rate) ? (
                    <AiTwotoneStar className=' text-yellow-500' /> ): (
                    <AiTwotoneStar className=' text-gray-300' /> ) }
                  </div> )) } </div>
              </div>
            </div>
              )
            }
          </div>
        ): (
            <div className='lastProduct cursor-pointer boxShadow rounded-md'>
              <div className='image relative overflow-hidden'>
                <img className='rounded-md w-full' src={props.picture[0].url} alt="product" />
                <div className='icons'>
                  <div
                    className='heartIcon absolute top-6 h-[30px] w-[30px] border border-blue-700 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white text-blue-700 ' onClick={()=>navigate("/login")}>
                    <AiOutlineHeart className=' font-semibold' />
                  </div>
                  <div className='AddIcons absolute  bg-slate-200 w-full'>
                    <div className="flex items-center justify-between">
                      <Link to="/login"
                        className=' flex items-center justify-center text-blue-700 text-sm hover:underline w-[49%] border-r gap-1 hover:text-yellow-500 h-[40px]'>
                      <AiOutlineShoppingCart />
                      <h3>Add To Cart</h3>
                      </Link>
                      <Link to={`/product/${props._id}`}
                        className=' flex items-center justify-center text-sm hover:underline text-blue-700 w-[49%] gap-1 hover:text-yellow-500 h-[40px]'>
                      <HiViewGridAdd />
                      <h3>View</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-[20px] pb-[10px]'>
                <span className=' text-slate-300 tracking-wide hover:text-black text-[15px]'>{props.category}</span>
                <h3 className='text-lg h-[60px]'>{props.name}</h3>
                <span className=' text-2xl font-bold text-yellow-600'>${props.price}</span>
                <div className='rateStar flex items-center gap-1 mt-1'> { rateArray.map((rate, i) => ( <div key={i}> { (props.rate
                    >= rate) ? (
                    <AiTwotoneStar className=' text-yellow-500' /> ): (
                    <AiTwotoneStar className=' text-gray-300' /> ) }
                  </div> )) } </div>
              </div>
            </div>
        )
      }
    </div>
  )
}

export default LastProduct;
