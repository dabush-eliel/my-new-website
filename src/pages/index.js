import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionSeparator from "../components/section-separator";
import { keywords } from "../utils/data/keywords";
import MainSection from "../components/page-sections/main-section";
import FeaturedSection from "../components/page-sections/featured-section";

function IndexPage() {
    return (
        <Layout>
            <SEO keywords={keywords} title="Home" />
            {/* <a href="https://devhabits.substack.com/">Read the blog</a> */}
            <MainSection />
            {/* <SectionSeparator /> */}
            {/* <FeaturedSection /> */}
            {/* <SectionSeparator /> */}
        </Layout>
    );
}

export default IndexPage;

export function Head() {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                rel="stylesheet"
            />
        </>
    );
}
