import React from "react";
import SectionQuote from "./section-quote";
import SectionTitle from "./section-title";
import SectionSeparator from "./section-separator";

function SectionLayout({ id, title, quote, children }) {
  return (
    <section className="text-white" id={id}>
      {title && <SectionTitle title={title} />}
      {quote && <SectionQuote quote={quote} />}
      {children}
      <SectionSeparator />
    </section>
  );
}

export default SectionLayout;
