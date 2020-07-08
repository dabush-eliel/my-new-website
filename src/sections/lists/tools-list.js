import React from "react";
import ListLevels from "../../components/lists/list-levels";

function ToolsList({ tools }) {
    return <ListLevels items={tools} title="Tools" />;
}

export default ToolsList;
