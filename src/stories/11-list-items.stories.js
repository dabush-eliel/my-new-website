import React from "react";
import ListItems from "../components/sections/list-items";
import { jobs } from "../utils/data/experiences/jobs";

export default {
    title: "List Items",
    components: ListItems
};

export const ItemsList = () => <ListItems items={jobs} title="Work" />;
