const path = require("path");

exports.createPages = async({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const pages = await graphql(
        `
            {
                allPrismicPost {
                edges {
                node {
                    data {
                    post_title {
                        html
                        text
                        raw
                    }
                    post_preview_description {
                        html
                        text
                        raw
                    }
                    post_hero_image {
                        alt
                        copyright
                        url
                        thumbnails {
                        Thumbnail {
                            url
                        }
                        }
                    }
                    post_date
                    post_category {
                        html
                        text
                        raw
                    }
                    post_author
                    post_body {
                        html
                        text
                        raw
                    }
                    post_hero_annotation {
                        html
                        text
                        raw
                    }
                    }
                    uid
                }
                }
            }                
            }
        `
    )

    if (pages.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const template = path.resolve(`./src/templates/post.jsx`)
    pages.data.allPrismicPost.edges.forEach(edge => {
        createPage({
            path: `/news/${edge.node.uid}`,
            component: template,
            context: {
                uid: edge.node.uid
            }
        })
    });

}
