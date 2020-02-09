import React from "react";
import Img from "gatsby-image";
import { MdLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

function ListItems({ items, title, data }) {
  return (
    <div className={`list-items`}>
      <div className="text-2xl font-bold text-gray-300">{title}</div>
      <div>
        {items.map(item => {
          const logo =
            data &&
            data.allFile.nodes.find(({ childImageSharp: { fluid: { src } } }) =>
              src.endsWith(item.logo)
            );
          return (
            <div className="py-4" key={item.name}>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col content-center py-1 w-48">
                  <div className="flex flex-row items-center text-gray-300">
                    {logo && (
                      <Img
                        className="inline-block w-16"
                        fluid={logo.childImageSharp.fluid}
                      />
                    )}
                    {` `}
                    {item.link ? (
                      <a
                        className="font-bold underline px-2 w-32"
                        href={item.link}
                        target="_blank"
                      >
                        {item.name}
                        {` `}
                      </a>
                    ) : (
                      <span className="px-2">{item.name}</span>
                    )}
                  </div>
                  <div className="text-sm text-blue-500 italic p-2">
                    <FaRegCalendarAlt className="inline-block" />
                    {` `}
                    <span className="px-2">{` ${item.years}`}</span>
                  </div>
                </div>
                <div className="flex flex-col content-center py-1">
                  <div className="px-5 font-bold text-yellow-600">
                    {item.title}
                  </div>
                  <div className="px-5 text-gray-300">{item.description}</div>
                  <div className="text-xs px-5 py-2 text-gray-500 italic">
                    {item.skills.map(
                      (skill, index) =>
                        `${skill}${
                          index === item.skills.length - 1 ? `` : `, `
                        }`
                    )}
                  </div>
                  {item.location && (
                    <div className="px-5 text-red-500 py-1">
                      <MdLocationOn className="inline-block" />
                      {` `}
                      <span className="px-2">{` ${item.location}`}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListItems;
