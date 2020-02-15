import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import TagsList from "../components/lists/tags-list";

function BlogPost({ data, pageContext }) {
    //   const { author, allTags, allCategories } = pageContext;
    const { markdownRemark: post } = data;
    const { frontmatter } = post;
    console.log(`post`, post);
    console.log(`pageContext`, pageContext);
    return (
        <Layout className="text-white" hideProfile>
            <SEO keywords={[`eliel`, `dabush`, frontmatter.title]} title={frontmatter.title} />
            <div className="pb-5">
                <Link className=" text-sm inline-block" to={`/blog`}>
                    <IoIosArrowBack className="inline-block" title="Back" />
                    {` Back`}
                </Link>
            </div>
            {frontmatter.image && (
                <Img className="h-64" fluid={frontmatter.image.childImageSharp.fluid} />
            )}
            <div className="text-gray-100">
                <div className="text-3xl text-yellow-600 py-5">
                    {frontmatter.title}
                    <div className="text-sm text-blue-500 italic p-2">
                        <span className="">
                            <FaRegCalendarAlt className="inline-block" />
                            {` `}
                            <span className="px-2">{` ${frontmatter.date}`}</span>
                        </span>
                        <span className="">
                            <GoPrimitiveDot className="inline-block" />
                            <span className="px-2">{` ${post.timeToRead} min read`}</span>
                        </span>
                        <TagsList tags={frontmatter.tags} />
                    </div>
                </div>
                <div className="py-2">{frontmatter.description}</div>

                <div className="" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    );
}

export const blogPostQuery = graphql`
    query BlogPostQueryBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
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
`;

export default BlogPost;
