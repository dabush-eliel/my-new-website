import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <div className="flex flex-col items-center">
                <img
                    alt="Ghost getting abducted by aliens"
                    className="block mx-auto w-1/2"
                    src={abductionIllustration}
                />
                <h2 className="text-2xl font-bold text-center inline-block my-8 mx-auto p-3">
                    Ooops...
                </h2>
                <span className="underline p-5">
                    <Link to="/"> Back Home</Link>
                </span>
            </div>
        </Layout>
    );
}

export default NotFoundPage;
