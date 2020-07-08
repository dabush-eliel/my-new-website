import React from "react";
import Img from "gatsby-image";
import { MdLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

function ItemName({ name, link, logo }) {
    return (
        <div className="flex flex-row items-center  w-48">
            {logo && <Img className="inline-block w-16" fluid={logo.childImageSharp.fluid} />}
            {` `}
            {link ? (
                <a className="font-bold underline px-2 w-32" href={link} target="_blank">
                    {name}
                    {` `}
                </a>
            ) : (
                <span className="px-2">{name}</span>
            )}
        </div>
    );
}

function ItemPeriod({ period }) {
    return (
        <div className="text-sm text-blue-500 italic p-2  w-48">
            <FaRegCalendarAlt className="inline-block" />
            {` `}
            <span className="px-2">{` ${period}`}</span>
        </div>
    );
}

function ItemTitle({ title }) {
    return <div className="px-5 font-bold">{title}</div>;
}

function ItemDescription({ description }) {
    return <div className="px-5">{description}</div>;
}

function ItemSkills({ skills = [] }) {
    return (
        <div className="text-xs px-5 py-2 italic">
            {skills.map((skill, index) => `${skill}${index === skills.length - 1 ? `` : `, `}`)}
        </div>
    );
}

function ItemLocation({ location = "can't find it..." }) {
    return (
        <div className="px-5 text-red-500 py-1">
            <MdLocationOn className="inline-block" />
            {` `}
            <span className="px-2">{` ${location}`}</span>
        </div>
    );
}

function ListItem({ item, logo }) {
    return (
        <div className="py-4" key={item.name}>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col content-center py-1">
                    <ItemName name={item.name} link={item.link} logo={logo} />
                    <ItemPeriod period={item.years} />
                </div>
                <div className="flex flex-col content-center py-1 w-full">
                    <ItemTitle title={item.title} />
                    <ItemDescription description={item.description} />
                    <ItemSkills skills={item.skills} />
                    {item.location && <ItemLocation location={item.location} />}
                </div>
            </div>
        </div>
    );
}

function ListItems({ items, title, data }) {
    return (
        <div className={`list-items`}>
            <div className="text-2xl font-bold">{title}</div>
            <div>
                {items.map(item => {
                    const logo =
                        data &&
                        data.allFile.nodes.find(({ childImageSharp: { fluid: { src } } }) =>
                            src.endsWith(item.logo)
                        );
                    return <ListItem item={item} logo={logo} />;
                })}
            </div>
        </div>
    );
}

export default ListItems;
