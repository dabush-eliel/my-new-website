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
                            I'm Eliel Dabush,
                        </h1>
                        <div>
                            I am full-stack javascript engineer. I build web & mobile applications.
                            <br />
                            My favourite stack these days is: NodeJS/NestJS, React, GraphQL and
                            MongoDB, although sometimes PostgreSQL/MySQL would be the better choice
                            😉.
                        </div>
                        <div>
                            My programming journey started back in 2015, just when I finished my CS
                            degree.
                        </div>
                        <div>
                            I am a team player who loves coding, web engineering, system design and
                            architecture, clean code, lean development, agile methodologies,
                            automations and there is so much more.
                        </div>
                    </div>
                    <span className="text-sm">
                        <div className="py-1">
                            📍 &nbsp; &nbsp;{" "}
                            <span className="block md:inline-block">I live in Tel Aviv.</span>
                        </div>
                        <div className="py-1">
                            🧘 &nbsp; &nbsp;{" "}
                            <span className="block md:inline-block">I do yoga and meditation</span>
                            daily.
                        </div>
                        <div className="py-1">
                            ⚽ &nbsp; &nbsp;{" "}
                            <span className="block md:inline-block">I'm a fan of Maccabi</span>
                            Tel-Aviv.
                        </div>
                        <div className="py-1">
                            🔥 &nbsp; &nbsp;{" "}
                            <span className="block md:inline-block">
                                And I like my coffee extra
                            </span>
                            hot.
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
