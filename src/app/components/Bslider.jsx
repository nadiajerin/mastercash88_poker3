"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay"; // optional, but good to import

// import required modules
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Marquee from "react-fast-marquee";


export default function Bslider() {

    // const img = [
    //     "/bannar/10.jfif",
    //     "/bannar/11.jfif",
    //     "/bannar/13.jfif",
    //     "/bannar/14.jfif"
    // ]

    return (
        <div className=''>
            <Swiper
                slidesPerView="auto"
                autoplay={{
                    delay: 2000, // 2 seconds
                    disableOnInteraction: false, // keeps autoplay even after interaction
                }}
                spaceBetween={30}
                modules={[Autoplay]}
                loop={true}
                className="mySwiper"
            >
                
                    <SwiperSlide>
                        <Image src="/bannar/01.jpg" width={500} height={100} alt='Fashion Forawrd' />
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <Image src="/bannar/02.jpg" width={500} height={100} alt='Fashion Forawrd' />
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <Image src="/bannar/03.jpg" width={500} height={100} alt='Fashion Forawrd' />
                    </SwiperSlide>
                
                    <SwiperSlide>
                        <Image src="/bannar/04.jpg" width={500} height={100} alt='Fashion Forawrd' />
                    </SwiperSlide>
               
            </Swiper>

            
            <div className='  text-white'>
                <Marquee className='text-sm py-1 '>
                    Welcome to MasterCash88 ||| The Best online Entertainment Platform in Bangladesh |||
                </Marquee>
            </div>

        </div>
    );
}
