import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDataContext } from "@/components/Form/NameContext";


interface FormLayoutProps {
    type: string;
    value?: string;
    placeholder: string;
    onChange?: (value: string) => void;
    nextPage: string;
}

const FormLayout: React.FC<FormLayoutProps> = ({ type, placeholder, nextPage, onChange }) => {
    const { setName } = useDataContext();
    const [inputValue, setInputValue] = useState("");
    // const { name, setName } = useDataContext(), [inputValue, setInputValue] = useState<string>(name);
    const [errorMessage, setErrorMessage] = useState("");
 

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value); 

        if (type === "text") {
            setName(value);
        }
        validateInput(value);
    };

    const validateInput = (value: string) => {
        if (value === "") {
            setErrorMessage("");
        } else if (type === "text" && !/^[a-zA-Z]*$/.test(value)) {
            setErrorMessage("Input can only contain letters.");
        } else if (type === "text" && value.length < 3) {
            setErrorMessage("Input must be at least 3 characters.");
        } else if (type === "text" && value.length > 15) {
            setErrorMessage("Input must be max 15 characters long.");
        } else if (type === "email" && !/^[\w.+-]+@[\w-]+\.[a-zA-Z]{2,}$/.test(value)) {
            setErrorMessage("Please enter a valid email address.");
        } else if (type === "email" && value.length < 5) {
            setErrorMessage("Email must be at least 5 characters.");
        } else {
            setErrorMessage("");
        }
    };

    const isDisabled = !!errorMessage; 

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-12 sm:ml-12 ml-6 flex justify-center items-center">
                <label htmlFor="name"></label>
                <input
                    type={type}
                    placeholder={placeholder}
                    className="sm:w-[826px] w-[350px] sm:h-[90px] h-[60px] rounded-[18px] border-[1.5px] border-strokedark bg-transparent text-xl sm:text-3xl sm:pl-5 sm:pr-18 pl-5 pr-13 py-3 text-white outline-none transition focus:border-[#65D5EB] active:border-[#65D5EB] disabled:cursor-default disabled:bg-slate-400"
                    onChange={handleInputChange}
                    value={inputValue}
                />
                <Link href={isDisabled ? "#" : nextPage} passHref>
                    <span className="relative sm:right-16 right-12.5 top-1/2 flex justify-center items-center">
                        <div className={`relative sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            <Image
                                className="object-contain"
                                src={inputValue ? "/images/icon/send-active.svg" : "/images/icon/send-inactive.svg"}
                                alt={inputValue ? "Icon Send Active" : "Icon Send Inactive"}
                                fill
                                sizes="(max-width: 640px) 30px, 50px"
                            />
                        </div>
                    </span>
                </Link>
            </div>
            <p>{type === "text" ? inputValue : ''}</p>
            <div className="relative px-8 sm:px-50">
                {errorMessage && (
                    <p className="text-red sm:-mt-13 -mt-10 text-md sm:text-xl">{errorMessage}</p>
                )}
            </div>
        </form>
    );
};

export default FormLayout;
