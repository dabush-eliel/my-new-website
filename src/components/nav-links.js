import React from "react";
import ButtonLink from "./button-link";
import SocialLinks from "./social-links";

function NavLinks({ socialLight = true }) {
    const notionResourcesLink = "//zelick.io";
    const blogUrl = process.env.BLOG_URL;
    const linkToBlog = blogUrl && Boolean(process.env.LINK_TO_BLOG);

    return (
        <nav className="flex flex-wrap justify-center items-center max-w-4xl py-4 md:py-8">
            {linkToBlog ? (
                <>
                    <a className="px-2" target={"_blank"} href={notionResourcesLink}>
                        <ButtonLink underline={false} text={"zelick.io"}></ButtonLink>
                    </a>
                    |
                    <a className="px-2" target={"_blank"} href={blogUrl}>
                        <ButtonLink underline={false} text={"devhabits"}></ButtonLink>
                    </a>
                </>
            ) : null}
            {"|"}
            <span className="w-5"></span>
            <SocialLinks light={socialLight} />
        </nav>
    );
}

export default NavLinks;
