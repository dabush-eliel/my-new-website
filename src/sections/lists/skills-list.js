import React from "react";
import ListLevels from "../../components/lists/list-levels";

function SkillsList({ skills }) {
    return <ListLevels items={skills} title="Skills" />;
}

export default SkillsList;
