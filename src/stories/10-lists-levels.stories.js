import React from "react";
import ListLevels from "../components/sections/list-levels";
import { jobs } from "../utils/data/experiences/jobs";

export default {
    title: `List Levels`,
    component: ListLevels
};

const items = [
    {
        name: `Sing`,
        level: 1
    },
    {
        name: `Draw`,
        level: 2
    },
    {
        name: `Design`,
        level: 3
    },
    {
        name: `Music`,
        level: 4
    },
    {
        name: `Development`,
        level: 5
    }
];

export const LevelsList = () => <ListLevels items={items} title="My Levels List" />;
