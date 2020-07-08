import React from "react";
import { education } from "../utils/data/educations/education";
import EducationList from "./lists/education-list";
import SectionLayout from "../components/sections/section-layout";

function EducationSection() {
    return (
        <SectionLayout id="education-section" quote="always be learning" title="EDUCATION">
            <EducationList items={education} />
        </SectionLayout>
    );
}

export default EducationSection;
