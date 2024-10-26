"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import LayoutLanding from "@/components/Layouts/LayoutLanding"
import Walkthrough from "@/components/Walkthrough";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => t,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <LayoutLanding>
        <Walkthrough />
      </LayoutLanding>
    </>
  );
}