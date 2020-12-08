import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import Layout from "components/Layout";
import PostCard from "components/PostCard";

const NewsTitle = styled("h1")`
    font-family: 'Gelasio', serif;
    margin-bottom: 1em;
    text-align: center;
`

const NewsGrid = styled("div")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5em;

    @media(max-width: 1050px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-template-columns: 1fr;
        grid-gap: 2.5em;
    }
`

const NewsWrapper = styled("div")`
    padding: 20px 30px 0 30px;
    max-width: 1140px;
    margin: 0 auto;
`

const News = ({ posts, meta, home }) => (
    <>
        <Helmet
            title={`News | Prist, Gatsby & Prismic Starter`}
            titleTemplate={`%s | News | Prist, Gatsby & Prismic Starter`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `News | Prist, Gatsby & Prismic Starter`,
                },
                {
                    property: `og:description`,
                    content: meta.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <Layout productImage={home.hero_background.url}>
            <NewsWrapper>
                <NewsTitle>
                    News
                </NewsTitle>
                <NewsGrid>
                    {posts.map((post, i) => (
                        <PostCard
                            key={i}
                            author={post.node.data.post_author}
                            category={post.node.data.post_category.text}
                            title={post.node.data.post_title.text}
                            date={post.node.data.post_date}
                            description={post.node.data.post_preview_description.raw}
                            uid={post.node.uid}
                            thumbnail={post.node.data.post_hero_image.url}
                        />
                    ))}
                </NewsGrid>
            </NewsWrapper>
        </Layout>
    </>
);

export default ({ data }) => {
    const posts = data.allPrismicPost.edges;
    const meta = data.site.siteMetadata;
    const home = data.allPrismicHomepage.nodes.slice(0, 1).pop()

    if (!posts) return null;

    return (
        <News posts={posts} meta={meta} home={home.data}/>
    )
}

News.propTypes = {
    posts: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
};


export const query = graphql`
    {
        allPrismicHomepage {
            nodes {
            data {
                hero_background {
                url
                }
            }
            }
        }
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
                }
                post_date
                post_category {
                    html
                    text
                    raw
                }
                post_author
                }
                uid
            }
            }
        }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`

