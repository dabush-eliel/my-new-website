import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { ColorContext } from "../context/color-context";
import ColorPicker from "./color-picker";
import DarkModeToggle from "./dark-mode-toggle";

const DEFAULT_COLOR = 'violet';

function Layout({ children }) {
    const envInitColor = process.env.INIT_COLOR || DEFAULT_COLOR;
    const [darkMode, setDarkMode] = React.useState(envInitColor === "dark");
    const initColor = darkMode ? "gray" : envInitColor;
    const [color, setColor] = React.useState(initColor);
    const colorLevel = 600;

    const toggleDarkMode = () => {
        setDarkMode(currentMode => {
            setColor(!currentMode ? "gray" : envInitColor);
            return !currentMode;
        });
        window.ORIBI?.api('track', `dark mode toggled`);
    };

    const bodyColors = darkMode ? "text-gray-200 bg-gray-800" : "bg-gray-100 text-gray-800";
    return (
        <ColorContext.Provider value={color}>
            <div className={`flex flex-col font-mono min-h-screen ${bodyColors}`}>
                <Header color={color} colorLevel={colorLevel} setColor={setColor} />
                <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-10 py-6 md:p-0 w-full">
                    <div
                        className="
                    sticky top-0 transition duration-500 ease-in-out 
                    py-1 pb-8 flex flex-row justify-between md:opacity-10 hover:opacity-100"
                    >
                        <DarkModeToggle darkMode={darkMode} toggle={toggleDarkMode} />
                        {!darkMode ? <ColorPicker setColor={setColor} /> : null}
                    </div>
                    {children}
                </main>
                <Footer color={color} colorLevel={colorLevel} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(b,o,n,g,s,r,c){if(b[s])return;b[s]={};b[s].scriptToken="Xy00MjUzOTQ5ODU";b[s].callsQueue=[];b[s].api=function(){b[s].callsQueue.push(arguments);};r=o.createElement(n);c=o.getElementsByTagName(n)[0];r.async=1;r.src=g;r.id=s+n;c.parentNode.insertBefore(r,c);})(window,document,"script","https://cdn.oribi.io/Xy00MjUzOTQ5ODU/oribi.js","ORIBI");
                            `,
                    }}
                />
            </div>
        </ColorContext.Provider>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
