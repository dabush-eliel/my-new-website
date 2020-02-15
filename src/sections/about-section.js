import React from "react";
import Profile from "../components/profile";

function AboutSection() {
    return (
        <section id="about-section">
            <div className="my-8 text-gray-300 flex flex-col items-center">
                <div>
                    <div>
                        I am a full-stack javascript developer. I work at{` `}
                        <a className="font-bold underline" href="https://jolt.io/" target="_blank">
                            Jolt.io
                        </a>
                        .
                    </div>
                    <div>
                        Jolt is a Business school for the self made that gives a competitive
                        advantage from day one.
                    </div>
                    <div>My main stack is NodeJS, React, GraphQL & TypeScript.</div>
                    <div>
                        I am an agile team player who loves web engineering, clean code, system
                        design and architecture.
                    </div>
                    <div>
                        I am curious about productivity and self improvement and {` `}
                        {` `}
                        <a
                            className="font-bold underline"
                            href="https://www.notion.so/?r=ed2f52a7398643868ba6a4f788df9362"
                            target="_blank"
                        >
                            Notion
                        </a>
                        {` `} is my favourite tool.
                    </div>
                    <div>⚽ I am a fan of Maccabi Tel-Aviv.</div>
                    <div>🧘‍♂️ I meditate daily.</div>
                    <div>☕ And I like my coffee extra hot.</div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
