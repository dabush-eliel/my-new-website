import React from "react";
import { ColorContext, colors } from "../context/color-context";

function ColorPicker({ setColor }) {
    const color = React.useContext(ColorContext);
    const setter = event => {
        return setColor(event.target.value);
    };

    return (
        <span className={""}>
            <select
                className={
                    `cursor-pointer rounded-full` +
                    ` focus:outline-none` +
                    ` bg-${color}-100 text-${color}-700` +
                    ` border-${color}-800 border-2` +
                    ` p-1 px-2` +
                    ` opacity-50 hover:opacity-80`
                }
                onChange={setter}
            >
                {colors.map(ccolor => (
                    <option className={""} selected={ccolor === color} key={ccolor} value={ccolor}>
                        {ccolor}
                    </option>
                ))}
            </select>
        </span>
    );
}

export default ColorPicker;
