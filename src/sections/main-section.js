import React from "react";
import ProfileImage from "../components/profile-image";
import { Link } from "gatsby";

function AboutSide() {
    return (
        <div className="flex flex-col items-center">
            <ProfileImage />
            <div className="p-5"></div>
            <div className="">
                <div className="font-bold text-teal-400 text-lg">Hey, I'm Eliel Dabush,</div>
                <div>
                    I'm a full-stack javascript developer, I build full-stack web & mobile
                    applications. My favourite stack is: NodeJS, React and GraphQL.
                </div>
                <div>
                    I have started my programming journey back in 2015, just before I finished my CS
                    degree.
                </div>
                <div>I love web engineering, clean code, system design and architecture.</div>
                <div>
                    In 2020 I started my blog. I write about web technologies, programming, dev
                    processes, dev teams, cloud infrastructure, productivity, tools and more.
                </div>
                <div className="my-8"></div>
                <div>📍 &nbsp; &nbsp; I live in Tel Aviv, Israel.</div>
                <div>🧘‍♂️ &nbsp; &nbsp; I meditate daily.</div>
                <div>⚽ &nbsp; &nbsp; I'm a fan of Maccabi Tel-Aviv.</div>
                <div>☕ &nbsp; &nbsp; And I like my coffee extra hot.</div>
            </div>
        </div>
    );
}

function Button({ text }) {
    return (
        <div className="uppercase no-underline text-white bg-teal-500 hover:bg-teal-700 font-semibold py-2 px-8 rounded">
            {text}
        </div>
    );
}

function BlogSide() {
    return (
        <div className="h-32 flex flex-col items-center md:col-span-2 md:h-auto justify-center">
            <Link className="" to={"/blog"}>
                <Button text={"blog"} />
            </Link>
        </div>
    );
}

function MainSection() {
    //md:grid-cols-3
    return (
        <section id="main-section">
            <div className="grid grid-cols-1 md:gap-4 py-5">
                <AboutSide />
                {/* <BlogSide /> */}
            </div>
        </section>
    );
}

export default MainSection;
