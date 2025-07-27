import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string;
};

const Button: React.FC<ButtonProps> = ({ label, children }) => {
    return (
        <button
            className={`px-6 py-2 rounded-full bg-[#12ED39] text-[#1E1E1E] font-semibold cursor-pointer`}
        >
            {children ?? label}
        </button>
    );
};

export default Button;
