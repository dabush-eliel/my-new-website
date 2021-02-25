import React from "react";
import Layout from "../layout";
import SEO from "../seo";
import ExperienceSection from "../../sections/experience-section";
import EducationSection from "../../sections/education-section";
import AbilitiesSection from "../../sections/abilities-section";
import SectionSeparator from "../sections/section-separator";
import { keywords } from "../../utils/data/keywords";
import ProfileImage from "../profile-image";
import { Link } from "gatsby";

const AboutSection = () => (
    <section className="grid grid-cols-1 md:gap-4 py-5 md:grid-cols-3">
        <div className="flex flex-col items-center">
            <ProfileImage />
            <div className="p-5"></div>
            <div className="">
                <div className="font-bold text-secondary text-lg">Hey, I'm Eliel Dabush,</div>
                <div>
                    I'm a full-stack javascript developer, I build full-stack web & mobile
                    applications. My favourite stack is: NodeJS, React and GraphQL.
                </div>
                <div>
                    I have started my programming journey back in 2015, just before I finished my CS
                    degree.
                </div>
                <div>I love web engineering, clean code, system design and architecture.</div>
                <div>
                    In 2020 I started my blog. I write about web technologies, programming, dev
                    processes, dev teams, cloud infrastructure, productivity, tools and more.
                </div>
                <div className="my-8"></div>
                <div>📍 &nbsp; &nbsp; I live in Tel Aviv, Israel.</div>
                <div>🧘‍♂️ &nbsp; &nbsp; I meditate daily.</div>
                <div>⚽ &nbsp; &nbsp; I'm a fan of Maccabi Tel-Aviv.</div>
                <div>☕ &nbsp; &nbsp; And I like my coffee extra hot.</div>
            </div>
        </div>
    </section>
);

function AboutPage() {
    return (
        <Layout>
            <SEO keywords={keywords} title="About" />
            <AboutSection />
            <SectionSeparator />
            <ExperienceSection />
            <EducationSection />
            <AbilitiesSection />
        </Layout>
    );
}

export default AboutPage;
