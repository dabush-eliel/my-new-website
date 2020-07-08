import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
    const isDark = false;
    const colorsClass = isDark ? "text-gray-100 bg-gray-800" : "bg-gray-100 text-gray-800";
    return (
        <div className={`flex flex-col font-sans min-h-screen ${colorsClass}`}>
            <Header />
            <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-10 py-6 md:p-0 w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
