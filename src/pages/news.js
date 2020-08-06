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

const News = ({ posts, meta, product, home }) => (
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
        <Layout product={product} productImage={home.hero_background.url}>
            <NewsWrapper>
                <NewsTitle>
                    News
                </NewsTitle>
                <NewsGrid>
                    {posts.map((post, i) => (
                        <PostCard
                            key={i}
                            author={post.node.post_author}
                            category={post.node.post_category}
                            title={post.node.post_title}
                            date={post.node.post_date}
                            description={post.node.post_preview_description}
                            uid={post.node._meta.uid}
                            thumbnail={post.node.post_hero_image}
                        />
                    ))}
                </NewsGrid>
            </NewsWrapper>
        </Layout>
    </>
);

export default ({ data }) => {
    const posts = data.prismic.allPosts.edges;
    const meta = data.site.siteMetadata;
    const product = data.allStripeSku.edges;
    const home = data.prismic.allHomepages.edges.slice(0, 1).pop();

    if (!posts) return null;

    return (
        <News posts={posts} meta={meta} product={product} home={home.node}/>
    )
}

News.propTypes = {
    posts: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
};


export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        hero_background
                    }
                }
            }  
            allPosts(sortBy: post_date_DESC) {
                edges {
                    node {
                        post_title
                        post_date
                        post_category
                        post_preview_description
                        post_author
                        post_hero_image
                        _meta {
                            uid
                        }
                    }
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
        allStripeSku(filter: {product: {id: {eq: "prod_GVN1SL4dCamlJA"}}}) {
            edges {
                node {
                    id
                    price
                    currency
                    product {
                        name
                        metadata {
                            description
                        }
                    }
                }
            }
        }
    }
`

