import React from 'react';
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Moment from 'react-moment';
import { graphql } from 'gatsby';
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Layout from "components/Layout";
import CheckoutFooter from '../components/CheckoutFooter';

const PostWrapper = styled("div")`
    padding: 30px 20px;
    max-width: 1140px;
    margin: 0 auto;
`

const PostHeroContainer = styled("div")`
    max-height: 600px;
    overflow: hidden;
    display: block;
    margin-bottom: 3em;

    img {
        width: 100%;
    }
`

const PostTitle = styled("div")`
    max-width: 550px;
    margin: 0 auto;
    text-align: center;

    h1 {
        margin-top: 0;
    }
`

const PostBody = styled("div")`
    max-width: 550px;
    margin: 0 auto;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }
    }
`

const PostMetas = styled("div")`
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    justify-content: space-between;
    font-size: 0.85em;
    color: ${colors.grey600};
`

const PostAuthor = styled("div")`
    margin: 0;
`

const PostDate = styled("div")`
    margin: 0;
`

const Post = ({ post, meta, home }) => {
    return (
        <>
            <Helmet
                title={`${post.post_title.text} | Prist, Gatsby & Prismic Starter`}
                titleTemplate={`%s | ${meta.title}`}
                meta={[
                    {
                        name: `description`,
                        content: meta.description,
                    },
                    {
                        property: `og:title`,
                        content: `${post.post_title.text} | Prist, Gatsby & Prismic Starter`,
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
            <Layout>
                <PostWrapper>
                    <PostTitle>
                        {RichText.render(post.post_title.raw)}
                    </PostTitle>
                    <PostMetas>
                        <PostAuthor>
                            {post.post_author}
                        </PostAuthor>
                        <PostDate>
                            <Moment format="MMMM D, YYYY">{post.post_date}</Moment>
                        </PostDate>
                    </PostMetas>
                        {post.post_hero_image && (
                        <PostHeroContainer>
                            <img src={post.post_hero_image.url} alt="bees" />
                        </PostHeroContainer>
                    )}
                    <PostBody>
                        {RichText.render(post.post_body.raw)}
                    </PostBody>
                </PostWrapper>
                <CheckoutFooter productImage={home.hero_background.url} />
            </Layout>
        </>
    )
}

export default ({ data }) => {
    const postContent = data.prismicPost.data;
    const meta = data.site.siteMetadata;
    const home = data.allPrismicHomepage.nodes.slice(0, 1).pop()

    return (
        <Post post={postContent} meta={meta} home={home.data}/>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    home: PropTypes.object.isRequired,
};

export const query = graphql`
    query postBySlugQuery($uid: String!) {
        allPrismicHomepage {
            nodes {
            data {
                hero_background {
                url
                }
            }
            }
        }
        prismicPost(uid: { eq: $uid }) {
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
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`