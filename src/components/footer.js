import React from "react";
import NavLinks from "./nav-links";

function Footer({color, colorLevel = 300}) {
    return (
        <footer className={`bg-${color}-${colorLevel}`}>
            <div className="flex flex-wrap items-center justify-center md:justify-between max-w-4xl mx-auto py-4 md:py-8 px-3 md:px-1">
                <span className="text-sm text-tprimary">{new Date().getFullYear()} | ELIEL DABUSH</span>
                <NavLinks />
            </div>
        </footer>
    );
}

export default Footer;
