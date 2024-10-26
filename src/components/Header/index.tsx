import { useEffect, useState } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import '../../../src/css/style.css';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const juiceboxLetters = {
      uice: ["#u", "#i", "#c", "#e"],
      ox: ["#o", "#x"],
      b: "#b"
    };

    ScrollTrigger.create({
      trigger: "header",
      start: "top top",
      end: "bottom top",
      onToggle: ({ isActive }) => setIsScrolled(isActive)
    });

    gsap.to(juiceboxLetters.uice, {
      x: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut", 
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        toggleActions: "play none reverse none",
      }
    });

    gsap.to(juiceboxLetters.ox, {
      x: -20,
      opacity: 0,
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        toggleActions: "play none reverse none",
      }
    });

    gsap.to("#b", {
      x: -60, 
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        toggleActions: "play none reverse none",
      }
    });

  }, []);

  return (
    <header className={`sticky top-0 z-999 grid w-full transition-all duration-300 ${isScrolled ? 'bg-blur-glass' : ''}`}>
      <div className="flex items-center text-center justify-center px-4 py-4">
        <div className="items-center gap-2 sm:gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="350" height="46" viewBox="0 0 124 30" fill="none">
            <path id="u" d="M21.121 17.0265C21.121 18.8099 19.982 19.3612 18.8755 19.3612C17.8016 19.3612 16.5975 18.8099 16.5975 17.0265V8.64966H11.3799V18.129C11.3799 21.3068 13.9507 24.1387 18.8755 24.1387C23.8329 24.1387 26.3386 21.3176 26.3386 18.129V8.64966H21.121V17.0265Z" fill="#FAFAFA"/>
            <path id="i" d="M29.5603 13.0921V23.7495H34.7671V8.64966H29.5603V13.0921Z" fill="#FAFAFA"/>
            <path id="i" d="M32.1426 0.5C30.3853 0.5 29.0186 1.89433 29.0186 3.64536C29.0186 5.39638 30.3853 6.75829 32.1426 6.75829C33.8999 6.75829 35.2993 5.39638 35.2993 3.64536C35.3101 1.89433 33.9108 0.5 32.1426 0.5Z" fill="#FAFAFA"/>
            <path id="c" d="M45.2569 12.9626C46.7213 12.9626 47.7627 13.9354 48.0881 15.3621L53.2407 14.3569C52.4597 10.6279 49.2054 8.26074 45.2244 8.26074C40.6901 8.26074 37.0779 11.5682 37.0779 16.1836C37.0779 20.7989 40.6901 24.1389 45.2244 24.1389C49.1946 24.1389 52.4922 21.7717 53.2407 18.0319L48.0881 17.0267C47.7627 18.4534 46.7213 19.4262 45.2569 19.4262C43.5322 19.4262 42.2955 18.0319 42.2955 16.1836C42.2955 14.3029 43.5322 12.9626 45.2569 12.9626Z" fill="#FAFAFA"/>
            <path id="e" d="M62.4609 8.26074C57.8616 8.26074 54.4446 11.6007 54.4446 16.1836C54.4446 20.7989 57.9266 24.1389 62.526 24.1389C66.0406 24.1389 68.9477 22.6797 70.3145 19.1992L65.1619 18.3562C64.7389 19.2317 63.6975 19.7181 62.6562 19.7181C61.1592 19.7181 60.1504 18.7128 59.9226 17.6428H70.6074V17.3509C70.6074 10.9197 66.7348 8.26074 62.4609 8.26074ZM59.7599 14.4001C60.0202 13.2652 61.0616 12.4221 62.4609 12.4221C63.8602 12.4221 64.9016 13.2652 65.1619 14.4001H59.7599Z" fill="#FAFAFA"/>
            <path id="o" d="M98.9956 8.26074C94.4613 8.26074 90.8491 11.5682 90.8491 16.1836C90.8491 20.7989 94.4613 24.1389 98.9956 24.1389C103.53 24.1389 107.142 20.7989 107.142 16.1836C107.142 11.5682 103.519 8.26074 98.9956 8.26074ZM98.9956 19.4262C97.2709 19.4262 96.0668 18.0319 96.0668 16.1836C96.0668 14.3029 97.2709 12.9734 98.9956 12.9734C100.688 12.9734 101.924 14.3029 101.924 16.1836C101.924 18.0319 100.688 19.4262 98.9956 19.4262Z" fill="#FAFAFA"/>
            <path id="x" d="M123.5 8.64966H117.664L115.614 12.4435L113.65 8.64966H107.63L111.991 16.1834L107.565 23.7495H113.553L115.516 19.8476L117.534 23.7495H123.5L119.161 16.0861L123.5 8.64966Z" fill="#FAFAFA"/>
            <path  d="M1.15085 13.1356H3.13595V24.2362C3.13595 24.8199 2.84307 25.0469 1.96442 25.0469H0.5V29.5001H2.9407C5.05596 29.5001 8.35362 29.3704 8.35362 25.6414V8.68237H1.15085V13.1356Z" fill="#FAFAFA"/>
            <path d="M5.555 0.532471C3.7977 0.532471 2.43091 1.9268 2.43091 3.67783C2.43091 5.42885 3.7977 6.79076 5.555 6.79076C7.3123 6.79076 8.71163 5.42885 8.71163 3.67783C8.71163 1.9268 7.3123 0.532471 5.555 0.532471Z" fill="#FAFAFA"/>
            <path id="b" d="M82.3119 8.26069C79.9363 8.26069 78.5044 9.23348 77.8102 10.3036C77.8102 10.3036 77.9403 9.39561 77.9403 8.29312V1.0188H72.7227V23.7497H77.9403V22.0959C78.6237 23.1336 80.1532 24.1388 82.3119 24.1388C86.2495 24.1388 89.417 20.7989 89.417 16.1835C89.417 11.5682 86.2495 8.26069 82.3119 8.26069ZM80.9125 19.4262C79.1227 19.4262 77.8535 17.9346 77.8535 16.1835C77.8535 14.4001 79.1227 12.9733 80.9125 12.9733C82.7349 12.9733 84.0041 14.4001 84.0041 16.1835C84.0041 17.9346 82.7349 19.4262 80.9125 19.4262Z" fill="#FAFAFA"/>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
