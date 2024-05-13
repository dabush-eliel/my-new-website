import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import lightLogo from "../images/logo/white_logo_transparent_background.png";
import darkLogo from "../images/logo/dark_logo_transparent_background.png";
import colorLogo from "../images/logo/logo_transparent_background.png";
import NavLinks from "./nav-links";

function Header({ color, colorLevel = 300 }) {
    const { site } = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <header className={`bg-gradient-to-l from-${color}-${800} to-${color}-${600}`}>
            <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto py-4 md:py-6 px-3 md:px-1 tracking-wide">
                <Link to="/">
                    <h1 id="text-logo" className="tracking-widest font-lato text-slate-900 font-light text-xl md:text-3xl inline-block mx-auto w-32 md:w-auto">
                        ELIEL <span className="font-bold">DABUSH</span>
                    </h1>
                    {/* <img
                        alt="Logo - Eliel Dabush, software engineer"
                        className="inline-block mx-auto w-32 md:w-48"
                        id="logo"
                        src={lightLogo}
                    /> */}
                </Link>
                <NavLinks />
            </div>
        </header>
    );
}

export default Header;
