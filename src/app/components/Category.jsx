"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay"; // optional, but good to import

// import required modules

import Link from 'next/link';

// icon
import { FaMoneyCheck } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";

const Category = () => {
    return (
        <div className='pt-4 px-2'>
            <Swiper
                slidesPerView={2}
               
                spaceBetween={10}
                loop={false}
                className="mySwiper"
            >
                    <SwiperSlide className='bg-gray-950 px-6 py-1 border '>
                       <Link href="/deposit" className='p-1 flex items-center justify-center gap-4'>
                            <FaMoneyCheck className='text-lg'/>
                            <p className='text-md'>Deposit</p>
                       </Link>
                    </SwiperSlide>   

                    <SwiperSlide className='bg-gray-950 px-6 py-1 border '>
                       <Link href="/withdraw"  className='p-1 flex items-center justify-center gap-4'>
                            <BiMoneyWithdraw className='text-lg'/>
                            <p className='text-md'>Withdraw</p>
                       </Link>
                    </SwiperSlide>      
            </Swiper>
        </div>
    )
}

export default Category
