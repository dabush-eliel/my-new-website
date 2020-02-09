import React from "react";
import Profile from "../components/profile";

function AboutSection() {
  return (
    <section id="about-section">
      <div className="my-8 text-gray-300 flex flex-col items-center">
        <div>
          <div>
            I am a full-stack javascript developer. Nowadays I am working @{` `}
            <a
              className="font-bold underline"
              href="https://jolt.io/"
              target="_blank"
            >
              Jolt.io
            </a>
            .
          </div>
          <div>My main stack is NodeJS, React, GraphQL & TypeScript.</div>
          <div>
            I am an agile team player who loves web engineering, clean code,
            system design and architecture.
          </div>
          <div>
            I am curious about productivity and self improvement and I LOVE{" "}
            {` `}
            <a
              className="font-bold underline"
              href="https://www.notion.so/?r=ed2f52a7398643868ba6a4f788df9362"
              target="_blank"
            >
              Notion.so
            </a>
            .
          </div>
          <div>⚽ I am a fan of Maccabi Tel-Aviv.</div>
          <div>🧘‍♂️ I do meditations.</div>
          <div>☕ And I like my coffee extra hot.</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
