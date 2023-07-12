import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner from "../images/bg-5.jpg";
import { BsArrowRight } from "react-icons/bs";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"
import banner1 from "../images/hiki-app-ldYCkQnHg7M-unsplash.jpg";
import { Link } from "react-router-dom";
import member1 from "../images/our_team/member-1.jpg";
import member2 from "../images/our_team/WhatsApp Image 2023-07-12 at 00.47.09.jpg";
import member3 from "../images/our_team/member-2.jpg";
import { brand1, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand2 } from "../utilites";
const AboutUs = () => {
    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9];
    return (
    <div>
        <div className='px-[50px] pt-[90px] mb-[40px]'>
            <div className='banner  h-[400px] relative mb-[30px]'>
                    <img className='h-full' src={banner} alt='banner' />
                    <div className='absolute top-[50%] left-[50%] text-white transform -translate-x-[50%] -translate-y-[50%] text-center'>
                        <h1 className='text-3xl font-medium'>About Us</h1>
                        <span className='text-lg'>Who we are</span>
                    </div>
            </div>
            <div className='textTop flex items-center'>
                <div className='mr-3'>
                    <h1 className="text-2xl mb-2">Our Vision</h1>
                    <p className=' leading-[30px] text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste ex voluptas ab sit, quisquam delectus voluptatum aut. Accusamus, alias vel. Veniam debitis voluptatem et eligendi magni, ad repellat quas!</p>
                </div>
                <div className=''>
                    <h1 className="text-2xl mb-2">Our Mission</h1>
                    <p className=' leading-[30px] text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste ex voluptas ab sit, quisquam delectus voluptatum aut. Accusamus, alias vel. Veniam debitis voluptatem et eligendi magni, ad repellat quas!</p>
                </div>
            </div>
        </div>
        <div className="px-[50px] bg-slate-50 py-[40px] flex items-center mb-[120px]">
            <div className='flex-1'>
                <div>
                    <h1 className='text-2xl mb-4'>Who we are</h1>
                    <p className="text-lg text-yellow-600 w-[420px] mb-6">Pellentesque odio nisi, euismod pharetra a ultricies in diam. Sed arcu. Cras consequat</p>
                </div>
                <div className="mb-6">
                    <p className="text-md text-slate-600 w-[468px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste ex voluptas ab sit, quisquam delectus voluptatum aut. Accusamus, alias vel. Veniam debitis voluptatem et eligendi magni, ad repellat quas!</p>
                </div>
                <div>
                    <button className='flex items-center justify-center font-medium text-yellow-600 hover:bg-yellow-600 hover:text-white gap-3 border border-yellow-600 w-[200px] h-[40px] tracking-wide'>
                        <span>VIEWS OUR NEWS</span>
                        <BsArrowRight/>
                    </button>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-end'>
                        <div className='w-[500px] boxShadow2'>
                            <img className='w-full rounded-md' src={banner1} alt="banner"/>
                        </div>
                </div>
            </div>
        </div>
        <div className='px-[50px] flex pb-[60px] mb-[60px] border-b'>
            <div className='w-[400px] flex-[1]'>
                <h1 className='mb-4 text-2xl font-medium w-[400px] leading-8'>The world's premium design brands in one destination.</h1>
                <p className=' w-[450px] text-slate-500'>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nis</p>
            </div>
                <div className='flex-[1]'>
                    <ul className='grid grid-cols-3  justify-center gap-16'>
                        {
                            brands.map((brand, i) => (
                                <li className='flex items-center justify-center'>
                                    <Link to="/">
                                        <img src={brand} alt='brand'/>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            <div>
            </div>
        </div>
        <div className='px-[50px] mb-[120px] '>
                <h1 className='mb-[40px] text-center text-2xl font-semibold'>Meet Our Team</h1>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='ourTeam'>
                        <div className='relative'>
                            <img src={member1} alt="our_team" className='w-full' />
                            <div className='overlay absolute top-0 left-0 w-full h-full'>
                                <div className='relative w-full h-full flex  flex-col justify-center'>
                                    <div className='relative  overflow-hidden flex-[2]'>
                                        <div className='teamName text-center absolute  left-1/2  -translate-x-[50%] '>
                                            <h1 className='text-slate-300 text-xl font-medium'>Samanta Grey</h1>
                                            <p className="text-sm text-slate-500">Founder & CEO</p>
                                        </div>
                                    </div>
                                    <div className='relative text-center overflow-hidden flex-1'>
                                        <p className="TeamT text-sm absolute  left-1/2  -translate-x-[50%] -translate-y-[50%] text-gray-400 w-[200px]">Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p>
                                    </div>
                                    <div className='relative  overflow-hidden flex-[2]'>
                                        <div className='TeamAccount absolute  flex items-center justify-between  left-[50%] transform -translate-x-[50%] w-[150px]'>
                                            <Link className='text-2xl text-gray-600 hover:text-blue-600'>
                                                <FaFacebookF/>
                                            </Link>
                                            <Link className='text-2xl text-gray-600 hover:text-red-800'>
                                                <FaInstagram/>
                                            </Link>
                                            <Link className='text-2xl text-gray-600 hover:text-blue-500'>
                                                <FaTwitter/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative overflow-hidden h-[80px]'>
                            <div className='underText text-center absolute left-1/2 transform -translate-x-[50%]'>
                            <h1 className='text-xl font-medium'>Samanta Grey</h1>
                            <p className="text-sm text-slate-500">Founder & CEO</p>
                        </div>
                        </div>
                    </div>
                    <div className='ourTeam'>
                        <div className='relative'>
                            <img src={member2} alt="our_team" className='w-full' />
                            <div className='overlay absolute top-0 left-0 w-full h-full'>
                                <div className='relative w-full h-full flex  flex-col justify-center'>
                                    <div className='relative  overflow-hidden flex-[2]'>
                                        <div className='teamName text-center absolute  left-1/2  -translate-x-[50%] '>
                                            <h1 className='text-slate-300 text-xl font-medium'>Mohamed Elkenany</h1>
                                            <p className="text-sm text-slate-500">Software Development</p>
                                        </div>
                                    </div>
                                    <div className='relative text-center overflow-hidden flex-1'>
                                        <p className="TeamT text-sm absolute  left-1/2  -translate-x-[50%] -translate-y-[50%] text-gray-400 w-[200px]">Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p>
                                    </div>
                                    <div className='relative  overflow-hidden flex-[2]'>
                                        <div className='TeamAccount absolute  flex items-center justify-between  left-[50%] transform -translate-x-[50%] w-[150px]'>
                                            <Link className='text-2xl text-gray-600 hover:text-blue-600'>
                                                <FaFacebookF/>
                                            </Link>
                                            <Link className='text-2xl text-gray-600 hover:text-red-800'>
                                                <FaInstagram/>
                                            </Link>
                                            <Link className='text-2xl text-gray-600 hover:text-blue-500'>
                                                <FaTwitter/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative overflow-hidden h-[80px]'>
                            <div className='underText text-center absolute left-1/2 transform -translate-x-[50%]'>
                            <h1 className='text-xl font-medium'>Mohamed Elkenany</h1>
                            <p className="text-sm text-slate-500">Software Development</p>
                        </div>
                        </div>
                    </div>
                    <div className='ourTeam'>
                        <div className='relative'>
                            <img src={member3} alt="our_team" className='w-full' />
                            <div className='overlay absolute top-0 left-0 w-full h-full'>
                                <div className='relative w-full h-full flex  flex-col justify-center'>
                                    <div className='relative  overflow-hidden flex-[2]'>
                                        <div className='teamName text-center absolute  left-1/2  -translate-x-[50%] '>
                                            <h1 className='text-slate-300 text-xl font-medium'>Bruce Sutton</h1>
                                            <p className="text-sm text-slate-500">Product Manager</p>
                                        </div>
                                    </div>
                                    <div className='relative text-center overflow-hidden flex-1'>
                                        <p className="TeamT text-sm absolute  left-1/2  -translate-x-[50%] -translate-y-[50%] text-gray-400 w-[200px]">Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p>
                                    </div>
                                    <div className='relative  overflow-hidden flex-[2]'>
                                        <div className='TeamAccount absolute  flex items-center justify-between  left-[50%] transform -translate-x-[50%] w-[150px]'>
                                            <Link className='text-2xl text-gray-600 hover:text-blue-600'>
                                                <FaFacebookF/>
                                            </Link>
                                            <Link className='text-2xl text-gray-600 hover:text-red-800'>
                                                <FaInstagram/>
                                            </Link>
                                            <Link className='text-2xl text-gray-600 hover:text-blue-500'>
                                                <FaTwitter/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative overflow-hidden h-[80px]'>
                            <div className='underText text-center absolute left-1/2 transform -translate-x-[50%]'>
                            <h1 className='text-xl font-medium'>Bruce Sutton</h1>
                            <p className="text-sm text-slate-500">Product Manager</p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="reviews bg-slate-50 mb-[120px] py-[80px]">
            <h1 className="text-center text-2xl font-semibold mb-[80px]">What Customer Say About Us</h1>
            <div className="px-[20px] w-full">
                <Swiper
    spaceBetween={50}
    slidesPerView={3}
    navigation
    >
        <SwiperSlide className="">
            <div className='border w-[100vw]'>khjgjhj</div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
            <div className='border w-[100vw]'>khjgjhj</div>
        </SwiperSlide>
        </Swiper>
            </div>
        </div>
    </div>
);
}

export default AboutUs;
