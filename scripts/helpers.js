const fs = require("fs");

const colors = ["indigo", "amber", "emerald", "rose", "pink", "violet", "gray"];
const properties = ["bg", "text", "border", "from", "to"]; //  "bg", "text", "border", "from", "to"
const levels = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];

function generateClassNamesToCopy() {
    const classNames = [];
    properties.forEach(prop => {
        colors.forEach(color => {
            levels.forEach(level => {
                classNames.push(`${prop}-${color}-${level}`);
            });
        });
    });
    console.log(classNames);
    fs.writeFileSync("./theme-class-names.json", JSON.stringify(classNames), err => {
        console.log("err", err);
    });

    return classNames;
}

generateClassNamesToCopy();
