import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, StaticQuery, Link } from "gatsby";
import PostsList from "../components/lists/posts-list";
import { keywords } from "../utils/data/keywords";

function BlogPage() {
    return (
        <Layout hideProfile={true}>
            <SEO keywords={keywords} title="Blog" />
            <StaticQuery
                query={blogQuery}
                render={({ allMarkdownRemark: { edges: posts } }) => <PostsList posts={posts} />}
            />
        </Layout>
    );
}

const blogQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    timeToRead
                    html
                    frontmatter {
                        title
                        date(formatString: "MMM Do YYYY")
                        author
                        layout
                        draft
                        category
                        description
                        tags
                        image {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default BlogPage;
