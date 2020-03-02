const path = require('path');

const wrapper = promise =>
    promise.then(result => {
        if (result.errors) {
            throw result.errors
        }
        return result
    });

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await wrapper(
        graphql(`
        {
            prismic {
                allPosts {
                    edges {
                        node {
                            post_title
                            post_hero_image
                            post_hero_annotation
                            post_date
                            post_category
                            post_body
                            post_preview_description
                            post_author
                            _meta {
                                uid
                            }
                        }
                    }
                }
            }
        }
    `)
    )

    const postsList = result.data.prismic.allPosts.edges;

    const postTemplate = require.resolve('./src/templates/post.jsx');

    postsList.forEach(edge => {
        createPage({
            type: 'Post',
            match: '/blog/:uid',
            path: `/blog/${edge.node._meta.uid}`,
            component: postTemplate,
            context: {
                uid: edge.node._meta.uid,
            },
        })
    })
}
