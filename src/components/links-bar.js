import React from "react";
import { Link } from "gatsby";

function BarItem({ name, to }) {
  return (
    <li className="text-center p-3">
      <Link className="uppercase no-underline" to={to}>
        {name}
      </Link>
    </li>
  );
}

function LinksBar({ className = `` }) {
  return (
    <ul
      className={`${className} flex-col justify-center items-center min-h-full md:inline-block w-full md:w-auto`}
    >
      <BarItem name="about" to="/" />
      <BarItem name="experience" to="/#experience-section" />
      <BarItem name="education" to="/#education-section" />
      <BarItem name="abilities" to="/#abilities-section" />
      <BarItem name="contact" to="/#contact-section" />
      <BarItem name="blog" to="/blog" />
    </ul>
  );
}

export default LinksBar;
