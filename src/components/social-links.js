import React from "react";
import { SocialIcon } from "react-social-icons";

// todo -> get links from data
function SocialLink({ light = true, ...props }) {
    // #d69e2e
    return (
        <span className="p-2">
            <SocialIcon
                bgColor={light ? `#eeeeee` : `#32afb3`}
                style={{ height: 30, width: 30 }}
                target="_blank"
                {...props}
            />
        </span>
    );
}

function SocialLinks({ className = ``, ...props }) {
    return (
        <div className={`${className} social-links`}>
            <SocialLink url="mailto:eliel.dabush@gmail.com" {...props} />
            <SocialLink url="https://github.com/dabush-eliel" {...props} />
            <SocialLink url="https://www.linkedin.com/in/eliel-dabush/" {...props} />
            {/* <SocialLink url="https://dev.to/dabusheliel" {...props} /> */}
        </div>
    );
}

export default SocialLinks;
