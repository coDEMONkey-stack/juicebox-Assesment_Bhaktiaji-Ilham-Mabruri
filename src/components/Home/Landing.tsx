"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import "../../css/style.css";
import "@/components/common/Transition/Transition.module.css"
gsap.registerPlugin(SplitText, ScrollTrigger);

const Landing: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const animateBounce1 = useRef<HTMLHeadingElement>(null);
  const animateBounce2 = useRef<HTMLHeadingElement>(null);
  const animateBounce3 = useRef<HTMLHeadingElement>(null);
  const animateBounce4 = useRef<HTMLHeadingElement>(null);
  const animateBounce5 = useRef<HTMLHeadingElement>(null);
  const splitTextRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); 

  useLayoutEffect(() => {
    gsap.fromTo(
      animateBounce1.current,
      { y: 15 },
      { y: 0, duration: 1, repeat: -1, yoyo: true }
    );

    gsap.fromTo(
      animateBounce2.current,
      { y: 15 },
      { y: 0, duration: 1.5, repeat: -1, yoyo: true }
    );

    gsap.fromTo(
      animateBounce3.current,
      { y: 15 },
      { y: 0, duration: 2, repeat: -1, yoyo: true }
    );

    gsap.fromTo(
      animateBounce4.current,
      { y: 15 },
      { y: 0, duration: 1.5, repeat: -1, yoyo: true }
    );

    gsap.fromTo(
      animateBounce5.current,
      { y: 15 },
      { y: 0, duration: 1, repeat: -1, yoyo: true }
    );

    gsap.fromTo(
      containerRef.current, 
      { scale: 0.2, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out"}
    );

    const mySplitText = new SplitText(".split-text", { type: "chars, words" });
    const mySplitText2 = new SplitText(".text-gradient", {
      type: "chars, words",
    });

    const chars = mySplitText.chars;
    const chars2 = mySplitText2.chars;

    chars2.forEach((char) => {
      const charElement = char as HTMLElement;
      charElement.style.background =
        "linear-gradient(90deg, #FABBFF 0%, #B179FF 35%, #6DDDFF 83%)";
      charElement.style.backgroundClip = "text";
      charElement.style.webkitBackgroundClip = "text";
      charElement.style.webkitTextFillColor = "transparent";
    });

    gsap.from(chars, {
      opacity: 0,
      yPercent: 130,
      stagger: 0.05,
      ease: "back.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".split-text",
        start: "top 80%",
      },
    });

    gsap.from(chars2, {
      opacity: 0,
      yPercent: 130,
      stagger: 0.05,
      ease: "back.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".text-gradient",
        start: "top 80%",
      },
    });

    return () => {
      mySplitText.revert();
      mySplitText2.revert();
    };
  }, [refreshKey]);

  return (
    <>
      <div ref={containerRef} className="relative flex vector-container mb-8 mt-4 justify-center items-center px-6 sm:px-10">
        <Image
          src="/images/icon/particle-landing.svg"
          style={{ transform: "rotate(180deg)", marginTop: "50px" }}
          alt="Particle Landing"
          width={450}
          height={450}
        />
        <h1
          className="absolute top-[10%] text-sm sm:text-2xl left-0 sm:left-[-5%] text-white"
          ref={animateBounce1}
        >
          WA businesses feel confident about future growth
        </h1>
        <h1
          className="absolute top-[25%] text-sm sm:text-2xl right-2 sm:right-[-11%] text-white"
          ref={animateBounce2}
        >
          AI can&apos;t replace creativity
        </h1>
        <h1
          className="absolute top-[40%] text-sm sm:text-2xl left-1 sm:left-[-10%] text-white"
          ref={animateBounce3}
        >
          Sales measure true success
        </h1>
        <h1
          className="absolute top-[55%] text-sm sm:text-2xl right-1 sm:left-[45%] text-white"
          ref={animateBounce4}
        >
          Human connection drives WA business
        </h1>
        <h1
          className="absolute top-[83%] text-left text-sm sm:text-2xl bottom-4 sm:left-[-9%] left-1 text-white"
          ref={animateBounce5}
        >
          The primary barrier to digital
          <br />
          transformation is financial investment
        </h1>
      </div>

      <div className="flex mt-11 px-3 sm:px-49 justify-between sm:gap-2 gap-2">
        <div className="sm:mt-11 z-99999 sm:z-9 -mt-[483px]">
    
        </div>

        {/* Refresh Button */}
        <div className="sm:mt-11 z-99999 sm:z-9 -mt-[483px]">
          <li title="Back" className="sticky top-0 sm:relative">
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

      <div className="mt-6 flex gap-4 text-center justify-center items-center py-6 px-2 sm:px-10">
        <div
          className="container font-bagoss text-1xl sm:text-6xl"
          ref={splitTextRef}
        >
          <h1 className="split-text">Compare your thoughts on</h1>
          <span className="text-gradient">technology</span>
          <h1 className="split-text">with current industry opinions.</h1>
        </div>
      </div>

      {/* Button */}
      <div className="mt-11 flex gap-4 text-center justify-center items-center py-6 px-4">
        <Link href="/walkthrough">
          <button className="primary-button text-md sm:text-3xl px-22 sm:px-72">
            Get a reality check
          </button>
        </Link>
      </div>
    </>
  );
};

export default Landing;
