import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import TagsList from "./tags-list";

function PostsList({ posts }) {
    console.log(`posts`, posts.length);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2" style={{ justifyItems: `center` }}>
            {posts.map(({ node: { id, timeToRead, frontmatter, fields: { slug } } }) => (
                <div className="py-10 w-full" key={frontmatter.title}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                        <Link to={`/post/${slug}`}>
                            {frontmatter.image && (
                                <Img
                                    className="w-full h-56"
                                    fluid={frontmatter.image.childImageSharp.fluid}
                                />
                            )}
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{frontmatter.title}</div>
                                <p className="text-gray-500 text-base h-20">
                                    {frontmatter.description}
                                </p>
                            </div>
                        </Link>
                        <TagsList tags={frontmatter.tags} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostsList;
