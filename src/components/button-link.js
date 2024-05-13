import React from "react";

function ButtonLink({ text, underline = true }) {
    return (
        <span className={`text-tlight hover:text-opacity-30 ${underline ? "underline" : ""}`}>
            {text}
        </span>
    );
}

export default ButtonLink;
