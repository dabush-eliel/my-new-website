import React, { useContext } from "react";
import { jobs } from "../../utils/data/experiences/jobs";
import { projects } from "../../utils/data/experiences/projects";
import { otherExperience } from "../../utils/data/experiences/other-experience";
import SectionLayout from "../sections/section-layout";
import { MdLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ColorContext } from "../../context/color-context";
import { education } from "../../utils/data/educations/education";

function ItemName({ name, link }) {
    return link ? (
        <a className="underline" href={link} target="_blank">
            {name}
            {` `}
        </a>
    ) : (
        <span className="">{name}</span>
    );
}

function ItemSkills({ skills = [] }) {
    return (
        <div className="text-xs px-2 py-3 italic">
            {skills.map((skill, index) => `${skill}${index === skills.length - 1 ? `` : `, `}`)}
        </div>
    );
}

function ItemLocation({ location = "" }) {
    return (
        <div className="text-red-500 text-xs">
            <MdLocationOn className="inline-block" />
            {` `}
            <span className="">{` ${location}`}</span>
        </div>
    );
}

function ListItem({ item }) {
    const color = React.useContext(ColorContext);
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-4 py-5" key={item.name}>
            {/* <div className="flex flex-col md:flex-row py-4" key={item.name}> */}
            <span className={`md:col-span-4 text-sm text-${color}-600`}>{item.years}</span>
            <div className="md:col-span-8">
                <h3 className="font-bold ">
                    {item.title} @ <ItemName name={item.name} link={item.link} />
                </h3>
                <ItemSkills skills={item.skills} />
                {item.location && <ItemLocation location={item.location} />}
            </div>
        </div>
    );
}

function ListItems({ items, title }) {
    return (
        <div className={`list-items`}>
            <div className="text-2xl font-bold py-1">{title}</div>
            <div>
                {items.map(item => {
                    return <ListItem item={item} />;
                })}
            </div>
        </div>
    );
}

function SecondarySection() {
    return (
        <div className="grid grid-cols-1 md:gap-10 md:grid-cols-2 py-2">
            <ListItems items={jobs} />
            <span>
                <ListItems items={education} />
                <ListItems items={otherExperience} />
            </span>
        </div>
    );
}

export default SecondarySection;
