import React from "react";
import SocialLinks from "./social-links";

function Footer() {
    return (
        <footer className="bg-teal-700">
            <nav className="flex flex-wrap justify-end items-center max-w-4xl mx-auto py-4 md:py-8">
                <SocialLinks light={true} />
            </nav>
        </footer>
    );
}

export default Footer;
