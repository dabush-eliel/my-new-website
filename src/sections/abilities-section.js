import React from "react";
import SectionLayout from "../components/sections/section-layout";
import { skills } from "../utils/data/abilities/skills";
import SkillsList from "./lists/skills-list";
import ToolsList from "./lists/tools-list";
import { tools } from "../utils/data/abilities/tools";

function AbilitiesSection() {
    return (
        <SectionLayout id="abilities-section" quote="ready for anything" title="ABILITIES">
            <SkillsList skills={skills} />
            {/* <ToolsList tools={tools} /> */}
        </SectionLayout>
    );
}

export default AbilitiesSection;
