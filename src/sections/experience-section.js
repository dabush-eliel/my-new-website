import React from "react";
import LinksBar from "../components/links-bar";
import { jobs } from "../utils/data/experiences/jobs";
import { projects } from "../utils/data/experiences/projects";
import SectionTitle from "../components/sections/section-title";
import SectionQuote from "../components/sections/section-quote";
import ProjectsList from "../components/lists/projects-list";
import JobsList from "../components/lists/jobs-list";
import OtherExperienceList from "../components/lists/other-experience-list";
import { otherExperience } from "../utils/data/experiences/other-experience";
import SectionLayout from "../components/sections/section-layout";

function ExperienceSection() {
    return (
        <SectionLayout id="experience-section" quote="get things done" title="EXPERIENCE">
            <JobsList jobs={jobs} />
            <ProjectsList projects={projects} />
            <OtherExperienceList items={otherExperience} />
        </SectionLayout>
    );
}

export default ExperienceSection;
