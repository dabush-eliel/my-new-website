import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LinksBar from "../components/links-bar";
import profile from "../images/profile.png";
import AboutSection from "../sections/about-section";
import ExperienceSection from "../sections/experience-section";
import EducationSection from "../sections/education-section";
import AbilitiesSection from "../sections/abilities-section";
import ContactSection from "../sections/contact-section";
import SectionSeparator from "../components/sections/section-separator";

// function SectionSe

function IndexPage() {
    return (
        <Layout>
            <SEO
                keywords={[
                    `eliel`,
                    `dabush`,
                    `software engineer`,
                    `gatsby`,
                    `tailwind`,
                    `react`,
                    `tailwindcss`
                ]}
                title="Home"
            />
            <AboutSection />
            <SectionSeparator />

            <ExperienceSection />
            <EducationSection />
            <AbilitiesSection />
            <ContactSection />
        </Layout>
    );
}

export default IndexPage;
