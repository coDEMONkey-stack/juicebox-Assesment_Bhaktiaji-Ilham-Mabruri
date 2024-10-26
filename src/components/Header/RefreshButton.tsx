import { useState } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";
// import IconBack from "../../../public/images/icon/icon-arrowleft.svg"

const RefreshButton = () => {
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
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
          <path d="M1.33325 1.33325V5.49992H1.81785M14.615 7.16659C14.2049 3.87799 11.3996 1.33325 7.99992 1.33325C5.2021 1.33325 2.80683 3.05673 1.81785 5.49992M1.81785 5.49992H5.49992M14.6666 14.6666V10.4999H14.182M14.182 10.4999C13.193 12.9431 10.7977 14.6666 7.99992 14.6666C4.60024 14.6666 1.79491 12.1218 1.38483 8.83325M14.182 10.4999H10.4999" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </Link>
      </li>
    </ClickOutside>
  );
};

export default RefreshButton;
