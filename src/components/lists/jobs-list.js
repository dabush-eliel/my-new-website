import React from "react";
import { graphql, StaticQuery } from "gatsby";
import ListItems from "../sections/list-items";

function JobsList({ jobs }) {
    return (
        <StaticQuery
            query={graphql`
                query JobsImages {
                    allFile(
                        filter: {
                            relativePath: {
                                in: [
                                    "jobs/joltlogo.png"
                                    "jobs/nicelogo.png"
                                    "jobs/ladbrokeslogo.png"
                                ]
                            }
                        }
                    ) {
                        nodes {
                            childImageSharp {
                                fluid(maxWidth: 300) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            `}
            render={data => <ListItems data={data} items={jobs} title="Jobs" />}
        />
    );
}

export default JobsList;
