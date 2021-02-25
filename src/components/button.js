import React from "react";

function Button({ children, className, ...props }) {
    return (
        <button
            {...props}
            className={`
            focus:outline-none
            no-underline 
            hover:opacity-50
            py-1
            px-4
            rounded 
            w-14
            text-center 
            ${className}
            `}
        >
            {children}
        </button>
    );
}

export default Button;
