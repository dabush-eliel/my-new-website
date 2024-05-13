import React from "react";
import ProfileImage from "../profile-image";

function MainSection() {
    return (
        <section className="grid grid-cols-1 md:gap-4 py-2 md:grid-cols-3">
            <div className="flex flex-col items-center md:col-span-3">
                <ProfileImage />
                <div className="p-5 leading-relaxed md:leading-loose ">
                    <div className="my-8 pb-2">
                        <h1 className="font-medium py-2 text-xl md:text-4xl md:pb-4">
                            Hey, <br />
                            I'm Eliel,
                        </h1>
                        <div className="my-3">
                            I love watching football ⚽, playing ping-pong 🏓 and practice yoga 🤸‍♂️.
                        </div>
                        <div className="my-5">
                            <span className="block">
                                I am a Staff Software Engineer @ LinkedIn.
                            </span>
                            <span className="block">
                                I plan, design and implement distributed full-stack web and data applications at scale.
                            </span>
                            <span className="block">
                                My programming career journey started back in 2015, just when I finished my CS degree.
                            </span>
                        </div>
                        <div className="my-3">
                            I write & share my own insights and experience about career, personal growth and software engineering. (subscribe)
                        </div>
                        <div className="my-3">
                            I believe communication is the key in team's success. Proactivity is the key for personal success.
                        </div>
                        <div className="my-3">
                            I am curious about productivity and self growth, about 3P integrations and automation tools, and about using AI applications to mix it all together.
                        </div>
                        <div className="my-3">
                            I use Notion to manage my notes, my projects, my knowledge and more areas of my life. I build free and premium Notion templates and I share Notion tips, knowledge and resources.
                        </div>
                    </div>
                    <span className="text-sm">
                        <div className="py-3">
                            💤 &nbsp;{" "}
                            <span className="block md:inline-block">
                                I go to bed late.
                            </span>
                        </div>
                        {/* <div className="py-3">
                            🧘 &nbsp; &nbsp;{" "}
                            <span className="block md:inline-block">I do yoga and meditation daily.</span>
                        </div>
                        <div className="py-3">
                            ⚽ &nbsp; &nbsp;{" "}
                            <span className="block md:inline-block">I'm a fan of Maccabi Tel-Aviv.</span>
                        </div> */}
                        <div className="py-3">
                            🔥 &nbsp;{" "}
                            <span className="block md:inline-block">
                                And I like my latte extra hot.
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center md:justify-center">
                {/* <span className="text-red-500"></span> */}
            </div>
        </section>
    );
}

export default MainSection;
