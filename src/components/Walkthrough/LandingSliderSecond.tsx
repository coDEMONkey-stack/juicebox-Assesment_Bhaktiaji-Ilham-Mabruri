"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";


gsap.registerPlugin(SplitText, ScrollTrigger);

const LandingSliderSecond: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const animateScrub = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const splitText = new SplitText(animateScrub.current, {
      type: "words, chars",
    });

    gsap.from(splitText.words, {
      opacity: 0.3,
      duration: 1.75,
      ease: "power1.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: animateScrub.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Cleanup on unmount
    return () => splitText.revert();
  }, [refreshKey]);

  return (
    <>
      <div className="relative flex vector-container mb-8 mt-4 justify-center items-center px-6 sm:px-10">
        <Image
          src="/images/icon/particle-landing-med.svg"
          style={{ transform: "rotate(180deg)", marginTop: "50px" }}
          alt="Particle Landing Medium"
          width={350}
          height={350}
        />
      </div>

      <div className="mt-20 flex gap-4 text-center justify-center items-center py-6 px-2 sm:px-10">
        <div
          className="container font-bagoss text-1xl sm:text-6xl"
          ref={animateScrub}
        >
          <h1>
            I&apos;ll ask you a handful of meaningful <br className="hidden sm:block"/>
            questions and compare your <br className="hidden sm:block"/>
            with people in your<br className="hidden sm:block"/>
            industry.
          </h1>

        </div>
      </div>

      {/* Button */}
      {/* <div className="mt-[86px] flex gap-4 text-center justify-center items-center py-6 px-4">
        <button className="primary-button text-lg sm:text-3xl px-22 sm:px-72" disabled>
          Continue
        </button>
      </div> */}
    </>
  );
};

export default LandingSliderSecond;
