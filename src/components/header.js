import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import logo from "../images/logo/white_logo_transparent_background.png";
import SocialLinks from "./social-links";
// import logo from "../images/logo/logo_transparent_background.png";

function Header() {
    const [isExpanded, toggleExpansion] = useState(false);
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
        <header className="bg-gray-800">
            <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
                <Link to="/">
                    <img
                        alt="Logo - Eliel Dabush, software engineer"
                        className="inline-block mx-auto w-48"
                        id="logo"
                        src={logo}
                    />
                </Link>

                <SocialLinks />
                {/* <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            // {
            //   route: `/`,
            //   title: `Home`
            // },
            // {
            //   route: `/about`,
            //   title: `About`
            // },
            // {
            //   route: `/contact`,
            //   title: `Contact`
            // }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav> */}
            </div>
        </header>
    );
}

export default Header;
