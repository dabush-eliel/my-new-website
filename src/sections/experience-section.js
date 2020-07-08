import React from "react";
import { jobs } from "../utils/data/experiences/jobs";
import { projects } from "../utils/data/experiences/projects";
import ProjectsList from "./lists/projects-list";
import JobsList from "./lists/jobs-list";
import OtherExperienceList from "./lists/other-experience-list";
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
