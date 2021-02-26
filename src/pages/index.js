import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionSeparator from "../components/section-separator";
import { keywords } from "../utils/data/keywords";
import MainSection from "../components/page-sections/main-section";
import SecondarySection from "../components/page-sections/secondary-section";

function IndexPage() {
    return (
        <Layout>
            <SEO keywords={keywords} title="Home" />
            <MainSection />
            <SectionSeparator />
            <SecondarySection />
            <SectionSeparator />
        </Layout>
    );
}

export default IndexPage;
