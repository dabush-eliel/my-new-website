import React from "react";
import SectionLayout from "../components/sections/section-layout";
import { tools } from "../utils/data/abilities/tools";
import { skills } from "../utils/data/abilities/skills";
import SkillsList from "../components/lists/skills-list";
import ToolsList from "../components/lists/tools-list";

function AbilitiesSection() {
    return (
        <SectionLayout id="abilities-section" quote="ready for anything" title="ABILITIES">
            <SkillsList skills={skills} />
            <ToolsList tools={tools} />
        </SectionLayout>
    );
}

export default AbilitiesSection;
