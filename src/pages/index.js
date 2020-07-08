import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import MainSection from "../sections/main-section";
import ExperienceSection from "../sections/experience-section";
import EducationSection from "../sections/education-section";
import AbilitiesSection from "../sections/abilities-section";
import SectionSeparator from "../components/sections/section-separator";
import { keywords } from "../utils/data/keywords";

function IndexPage() {
    return (
        <Layout>
            <SEO keywords={keywords} title="Home" />
            <MainSection />
            <SectionSeparator />
            <ExperienceSection />
            <EducationSection />
            <AbilitiesSection />
        </Layout>
    );
}

export default IndexPage;
