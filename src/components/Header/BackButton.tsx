import { useState } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";


const BackButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li>
        <Link
         onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
          href="#"
          className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-none bg-[#191a1d] md:hidden" 
        >
          <svg
            className="fill-current duration-300 ease-in-out"
            width="16"
            height="14"
            fill="none"
            viewBox="0 0 16 14"
            xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M7.70711 13.7071C7.31659 14.0976 6.68342 14.0976 6.2929 13.7071L0.292894 7.70711C-0.0976313 7.31658 -0.0976313 6.68342 0.292894 6.29289L6.2929 0.292894C6.68342 -0.0976312 7.31659 -0.0976312 7.70712 0.292894C8.09764 0.683418 8.09764 1.31658 7.70712 1.70711L3.41422 6H15C15.5523 6 16 6.44772 16 7C16 7.55229 15.5523 8 15 8L3.41422 8L7.70711 12.2929C8.09764 12.6834 8.09764 13.3166 7.70711 13.7071Z" fill="#FAFAFA"/>
          </svg>
        </Link>
      </li>
    </ClickOutside>
  );
};

export default BackButton;
