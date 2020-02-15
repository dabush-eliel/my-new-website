import React from "react";

function TagsList({ tags, className = `` }) {
    return (
        <div className={`px-3 py-4 ${className}`}>
            {tags.map(tag => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
                    {`#${tag}`}
                </span>
            ))}
        </div>
    );
}

export default TagsList;
