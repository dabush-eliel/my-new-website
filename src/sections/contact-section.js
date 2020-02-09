import React from "react";
import SocialLinks from "../components/social-links";
import SectionLayout from "../components/sections/section-layout";
import { Link } from "gatsby";
import { IoIosArrowUp } from "react-icons/io";

function ContactSection() {
  return (
    <SectionLayout id="contact-section" quote="" title="CONTACT">
      <div className="flex flex-col items-center justify-center">
        <SocialLinks className="py-10" light={false} />
        <Link className="text-5xl p-2 m-6" title="back to top" to="/">
          <IoIosArrowUp />
        </Link>
      </div>
    </SectionLayout>
  );
}

export default ContactSection;
