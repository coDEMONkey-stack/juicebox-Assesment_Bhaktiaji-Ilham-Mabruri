"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import Image from "next/image";
import "../../css/style.css";
import FormLayout from "../Form/FormLayout";

gsap.registerPlugin(SplitText, ScrollTrigger);

const LandingForm: React.FC = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const splitTextRef = useRef<HTMLDivElement>(null);


    useLayoutEffect(() => {
        ScrollTrigger.refresh();
        gsap.fromTo(
            containerRef.current, 
            { scale: 1.8, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
        );

        const mySplitText = new SplitText(".split-text", { type: "chars, words" });
        const chars = mySplitText.chars;
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
    }, [refreshKey]);

    return (
        <>
            <div ref={containerRef}>
                <div className="relative flex vector-container mb-12 mt-4 justify-center items-center px-6 sm:px-10">
                    <Image
                        src="/images/icon/particle-landing-small.svg"
                        style={{ transform: "rotate(180deg)", marginTop: "20px" }}
                        alt="Particle Landing Small"
                        width={129}
                        height={130.788}
                    />
                </div>
            </div>

            <div className="mt-2 flex gap-4 text-center justify-center items-center py-6 px-2 sm:px-10">
                <div className="container font-bagoss text-1xl sm:text-6xl" ref={splitTextRef}>
                    <h1 className="split-text">
                        Let&apos;s start with the basics. <br className="hidden sm:block" />
                        Type in your first name.
                    </h1>
                </div>
            </div>

            <div className="mt-11">
                <FormLayout 
                    type="text"
                    placeholder="Enter your name" 
                    nextPage="/steptwo" 
                />
            </div>
        </>
    );
};

export default LandingForm;