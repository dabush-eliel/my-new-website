import React from "react";
import { SocialIcon } from "react-social-icons";

// todo -> get links from data
function SocialLink({ light = true, eventName, ...props }) {
    const onClick = () => {
        // window.lintrk && window.lintrk('track', { conversion_id: 6380298 });
    };

    // #d69e2e
    return (
        <span className="p-2 hover:opacity-50" onClick={onClick}>
            <SocialIcon
                bgColor={light ? `#eeeeee` : `#464D77`}
                style={{ height: 26, width: 26 }}
                target="_blank"
                {...props}
            />
        </span>
    );
}

function SocialLinks({ className = ``, ...props }) {
    return (
        <div className={`${className} social-links`}>
            {/* <SocialLink url="mailto:eliel.dabush@gmail.com" eventName="send email" {...props} /> */}
            <SocialLink url="https://www.linkedin.com/in/eliel-dabush/"  eventName="LinkedIn profile" {...props} />
            <SocialLink url="https://twitter.com/dabusheliel" eventName="X profie" {...props} />
            <SocialLink url="https://github.com/dabush-eliel" eventName="GitHub profie" {...props} />
            {/* <SocialLink url="https://dev.to/dabusheliel" {...props} /> */}
        </div>
    );
}

export default SocialLinks;
