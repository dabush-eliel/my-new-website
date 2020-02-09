import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Profile from "./profile";

function Layout({ children, hideProfile }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-teal-300 bg-gray-800">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-10 py-6 md:p-0 w-full">
        {!hideProfile && <Profile />}
        {children}
      </main>

      {/* <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline text-white"
              href="https://bryant.io"
            >
              Taylor Bryant
            </a>
          </p>

          <p>
            <a
              className="font-bold no-underline text-white"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
