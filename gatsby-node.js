/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const slugify = require('./src/utils/utilities').slugify
// const tagsService = require('./src/utils/tags').tagsService
// const categoriesService = require('./src/utils/categories').categoriesService
// const authors = require('./src/utils/data/authors').authors

exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions
  // is markdown post
  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: slugify(node.frontmatter.title)
    })
    // createNodeField({
    //   node,
    //   name: 'author_slug',
    //   value: slugify(node.frontmatter.author)
    // })
    // if (node.frontmatter.category) {
    //   createNodeField({
    //     node,
    //     name: 'category_slug',
    //     value: categoriesService.addCategory(node.frontmatter.category)
    //   })
    // }
    // if (node.frontmatter.tags && node.frontmatter.tags.length) {
    //   createNodeField({
    //     node,
    //     name: 'tags_slug',
    //     value: node.frontmatter.tags.map(tag => tagsService.addTag(tag))
    //   })
    // }
  }
}

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions
  const postTemplate = path.resolve('src/templates/blog-post.js')
//   const authorTemplate = path.resolve('src/templates/Author.js')
//   const categoryTemplate = path.resolve('src/templates/Category.js')
//   const tagTemplate = path.resolve('src/templates/Tag.js')
  
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors)
      return Promise.reject(res.errors)
    
    // const allCategories = categoriesService.allCategories()
    // const allTags = tagsService.allTags()
    
    const posts = res.data.allMarkdownRemark.edges
    // const _authors = {}
    
    posts.forEach(({node: {frontmatter, fields: {slug}}}) => {
    //   const author = authors.find(({name}) => name === frontmatter.author)
    //   if (!_authors[author_slug]) {
    //     _authors[author_slug] = author_slug
    //     // // AUTHOR page
    //     // createPage({
    //     //   path: `/author/${author_slug}`,
    //     //   component: authorTemplate,
    //     //   context: {
    //     //     author,
    //     //     author_slug,
    //     //     allCategories,
    //     //     allTags,
    //     //     authorImg: author ? author.img : 'users/default-user.png'
    //     //   }
    //     // })
    //   }
      // BLOG-POST page
      createPage({
        path: `/post/${slug}`,
        component: postTemplate,
        context: {
        //   author,
          slug,
        //   allCategories,
        //   allTags,
        //   authorImg: author ? author.img : 'users/default-user.png'
        }
      })
    })
    
    // // CATEGORY page
    // allCategories.forEach(category => {
    //   createPage({
    //     path: `/category/${category.slug}`,
    //     component: categoryTemplate,
    //     context: {
    //       ...category,
    //       allCategories
    //     }
    //   })
    // })
    
    // // TAG page
    // allTags.forEach(tag => {
    //   createPage({
    //     path: `/tag/${tag.slug}`,
    //     component: tagTemplate,
    //     context: {
    //       ...tag,
    //       allTags
    //     }
    //   })
    // })
  })
}