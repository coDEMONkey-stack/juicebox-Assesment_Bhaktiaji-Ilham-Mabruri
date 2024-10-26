"use client";
import React, {useLayoutEffect, useRef, useState} from "react";
import Link from "next/link";
import { gsap } from "gsap-trial";

import LandingSlider from "./LandingSlider";
import LandingSliderSecond from "./LandingSliderSecond";
import LandingSliderThird from "./LandingSliderThird";
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../../css/style.css";


const Walkthrough: React.FC = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null); 

    useLayoutEffect(() => {
        ScrollTrigger.refresh();
        gsap.fromTo(
            containerRef.current, 
            { scale: 0.2, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out"}
        );
    },[refreshKey]);

    return (
        <>
        <div ref={containerRef} className="flex sm:h-[150vh]">
            <Swiper
                className="sm:max-w-[75rem]"
                modules={[Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ 
                    clickable: true 
                }}
                observeSlideChildren={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => {
                    setActiveSlide(swiper.activeIndex);
                    ScrollTrigger.refresh();
                }}
                >
                <SwiperSlide className="justify-center"> 
                    <LandingSlider/> 
                </SwiperSlide>
                <SwiperSlide className="justify-center"> 
                    <LandingSliderSecond/> 
                </SwiperSlide>
                <SwiperSlide className="justify-center"> 
                    <LandingSliderThird/> 
                </SwiperSlide>
            </Swiper>
            {/* <div className="custom-swiper-pagination swiper-pagination"></div> */}
        </div>
        <div className="flex px-3 sm:px-49 justify-between sm:gap-2 gap-2">
            {/* Back Button */}
            <div className="sm:-mt-115 z-99999 sm:z-9 -mt-[770px]">
                <li title="Back" className="top-0 sticky sm:relative">
                    <Link
                    href="/"
                    className="relative flex h-12 w-12 sm:h-17 sm:w-17 items-center justify-center rounded-full border-none bg-[#191a1d]"
                    >
                        <svg
                            width="30"
                            height="30"
                            fill="none"
                            viewBox="0 0 16 14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M7.70711 13.7071C7.31659 14.0976 6.68342 14.0976 6.2929 13.7071L0.292894 7.70711C-0.0976313 7.31658 -0.0976313 6.68342 0.292894 6.29289L6.2929 0.292894C6.68342 -0.0976312 7.31659 -0.0976312 7.70712 0.292894C8.09764 0.683418 8.09764 1.31658 7.70712 1.70711L3.41422 6H15C15.5523 6 16 6.44772 16 7C16 7.55229 15.5523 8 15 8L3.41422 8L7.70711 12.2929C8.09764 12.6834 8.09764 13.3166 7.70711 13.7071Z" 
                            fill="#FAFAFA"
                            />
                        </svg>
                    </Link>
                </li>
            </div>
                
            {/* Refresh Button */}
            <div className="sm:-mt-115 z-99999 sm:z-9 -mt-[770px]">
            <li title="Reload content" className="sticky top-0 sm:relative">
                <Link
                onClick={() => {
                    setRefreshKey((prevKey) => prevKey + 1);
                }}
                href="#"
                className="relative flex h-12 w-12 sm:h-17 sm:w-17 items-center justify-center rounded-full border-none bg-[#191a1d]"
                >
                <svg
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M1.33325 1.33325V5.49992H1.81785M14.615 7.16659C14.2049 3.87799 11.3996 1.33325 7.99992 1.33325C5.2021 1.33325 2.80683 3.05673 1.81785 5.49992M1.81785 5.49992H5.49992M14.6666 14.6666V10.4999H14.182M14.182 10.4999C13.193 12.9431 10.7977 14.6666 7.99992 14.6666C4.60024 14.6666 1.79491 12.1218 1.38483 8.83325M14.182 10.4999H10.4999"
                    stroke="#FAFAFA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
                </Link>
            </li>
            </div>           
        </div>
      

        {/* Button */}
        <div className="mt-[38px] grid text-center justify-center items-center py-6 px-4">
                {activeSlide < 2 ? (
                    <button className="primary-button text-md sm:text-3xl p-30 sm:px-72" disabled>
                        Continue
                    </button>
                ) : (
                    <Link href="/stepone">
                        <button className="secondary-button text-md sm:text-3xl p-28 sm:px-72">
                            Get Started
                        </button>
                    </Link>
                )}

        </div>
        </>
    );

};

export default Walkthrough;
