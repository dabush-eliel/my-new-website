import React from "react";
import ButtonLink from "./button-link";
import SocialLinks from "./social-links";

function NavLinks({ socialLight = true }) {
    const notionResourcesLink = "https://zelick.io";
    const blogUrl = "https://substack.com/@elieldabush";
    const linkToBlog = true; // blogUrl && Boolean(process.env.LINK_TO_BLOG);

    return (
        <nav className="flex flex-wrap justify-center items-center max-w-4xl py-4 md:py-8">
            {linkToBlog ? (
                <div className="my-5 md:my-0">
                    <a className="px-2" target={"_blank"} href={notionResourcesLink}>
                        <ButtonLink underline={false} text={"zelick.io"}></ButtonLink>
                    </a>
                    |
                    <a className="px-2" target={"_blank"} href={blogUrl}>
                        <ButtonLink underline={false} text={"devhabits"}></ButtonLink>
                    </a>
                    <span className="md:visible invisible">{"|"}</span>
                </div>
            ) : null}
            <SocialLinks light={socialLight} />
        </nav>
    );
}

export default NavLinks;
