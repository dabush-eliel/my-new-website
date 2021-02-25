import React from "react";
import Layout from "../layout";
import SEO from "../seo";
import { graphql, StaticQuery, Link } from "gatsby";
import PostsList from "../lists/posts-list";
import { keywords } from "../../utils/data/keywords";
import SearchBox from "../search-box";

function BlogPage() {
    return (
        <Layout hideProfile={true}>
            <SEO keywords={keywords} title="Blog" />
            <div>
                <SearchBox />
                <StaticQuery
                    query={blogQuery}
                    render={({ allMarkdownRemark: { edges: posts } }) => (
                        <PostsList posts={posts} />
                    )}
                />
            </div>
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
