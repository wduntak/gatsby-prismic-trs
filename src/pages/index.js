import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Button from "components/_ui/Button";
import Layout from "components/Layout";
import PostCard from "components/PostCard";
import ReviewSlider from "components/ReviewSlider";


const Hero = styled("div")`
    margin: 7.5rem auto;
    max-width: 1140px;
    display: flex;
    position: relative;
    flex-flow: row nowrap;
    justify-content: space-between;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin: 20px auto 40px auto;
        flex-flow: column nowrap;
    }
`

const HeroImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 2;
  flex-basis: 1;
  @media(max-width:${dimensions.maxwidthTablet}px) {
    max-width: 600px;
    margin: 0 auto;
  }
  img {
      width: 100%;
      border-width: 8px 10px;
      border-color: #000;
      border-style: solid;
      @media(max-width:${dimensions.maxwidthTablet}px) {
        flex-flow: column nowrap;
      }
  }
`

const HeroDetailContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 3;
  flex-basis: 1;
  padding-left: 60px;
  flex-direction: column;
  @media(max-width:${dimensions.maxwidthTablet}px) {
    padding: 0 30px;
  }
  h1 {
    font-family: Gelasio;
    font-weight: 200;
    font-size: 2.4rem;
    line-height: 1.2;

    &::after {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${colors.green800};
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
      margin-top: 23px;
    }
  }
  p {
    font-family: "Gelasio", serif;
  }
`

const Section = styled("section")`
    border-top: 1px solid rgba(46,46,46,0.1);
    margin-bottom: 6em;
    display: flex;
    flex-direction: column;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2em auto;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
    &.highlight-section {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        position: relative;
        justify-content: center;
        align-items: stretch;
        max-height: 700px;
        margin-bottom: 0;
        border: none;
    }
`
const HighlightImageContainer = styled("div")`
    flex-grow: 1;
    position: relative;
    width: 50%;
    img {
        width: 100%;
        height: 100%;
    }
    &.image-right {
        box-shadow: -3px -4px 8px #133810;
    }
    &.image-left {
        box-shadow: 3px 4px 8px #133810;
    }
`
const HighlightTextContainer = styled("div")`
    flex-grow: 1;
    width: 50%;
    background-color: ${colors.green800};
    color: #fff;
    display: flex;
    align-items: center;
    font-family: 'Gelasio', serif;
`

const HighlightTextWrapper = styled("div")`
    padding: 0 4rem;
    max-width: 500px;
    &.text-left {
        margin: 0 0 0 auto;
    }
`

const BlogPostsTitle = styled("h1")`
    font-family: Gelasio;
    font-weight: 200;
    font-size: 2.4rem;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 0;
    &::after {
        content: "";
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${colors.green800};
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0;
        margin-top: 23px;
    }    
`
const BlogPostsWrapper = styled("section")`
    column-rule: 1px solid #eee;
    margin: 0;
    column-fill: initial;
    column-count: 3;
    column-gap: 50px;
    max-width: 1140px;
    width: 100%;
    margin: 60px auto 0 auto;

    @media (min-width: ${dimensions.maxwidthDesktop}px) {
        column-count: 3;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
        column-count: 2;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
        column-count: 1;
    }
`

const WorkAction = styled(Link)`
    font-weight: 500;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;
    margin: 30px auto 0 auto;
    text-decoration: underline;
    &:hover {
        color: ${colors.green600};
        transition: all 150ms ease-in-out;
    }
`

const RenderBody = ({ home, posts, meta, reviews }) => (
    <>
        <Helmet
            title={meta.title}
            titleTemplate={`%s | ${meta.title}`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: meta.title,
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
        <Hero>
            <HeroImageContainer>
                <img src={home.hero_background.url}></img>
            </HeroImageContainer>
            <HeroDetailContainer>
                <>
                    {RichText.render(home.hero_title)}
                    {RichText.render(home.hero_subtitle)}
                </>
                <a href={home.hero_button_link.url}
                target="_blank" rel="noopener noreferrer">
                    <Button>
                        {RichText.render(home.hero_button_text)}
                    </Button>
                </a>
            </HeroDetailContainer>
        </Hero>
        <Section className="highlight-section">
            <HighlightImageContainer className="image-left">
                <img src={home.highlight_1[0].highlight_image_1.url} />
            </HighlightImageContainer>
            <HighlightTextContainer>
                <HighlightTextWrapper className="text-right">
                    {RichText.render(home.highlight_1[0].highlight_text_1)}
                </HighlightTextWrapper>
            </HighlightTextContainer>
        </Section>   
        <Section className="highlight-section">
            <HighlightTextContainer>
                <HighlightTextWrapper className="text-left">
                    {RichText.render(home.highlight_2[0].highlight_text_2)}
                </HighlightTextWrapper>
            </HighlightTextContainer>
            <HighlightImageContainer className="image-right">
                <img src={home.highlight_2[0].highlight_image_2.url} />
            </HighlightImageContainer>
        </Section>             
        <Section className='testimonial-section'>
            <ReviewSlider reviews={reviews}/>
        </Section>
        <Section>
            <BlogPostsTitle>Blog Posts</BlogPostsTitle>
            <BlogPostsWrapper>
                {posts.slice(0).reverse().map((post, i) => (
                    <PostCard 
                        key={i}
                        category={post.node.post_category}
                        title={post.node.post_title}
                        description={post.node.post_preview_description}
                        thumbnail={post.node.post_hero_image}
                        uid={post.node._meta.uid}                    
                    />
                ))}
            </BlogPostsWrapper>
            <WorkAction to={"/blog"}>
                See all posts
            </WorkAction>
        </Section>
    </>
);

export default ({ data }) => {
    //Required check for no data being returned
    const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
    const posts = data.prismic.allPosts.edges;
    const meta = data.site.siteMetadata;
    const reviews = data.prismic.allReviews.edges;
    console.log('Home: ', doc.node);
    if (!doc || !reviews|| !posts) return null;

    return (
        <Layout>
            <RenderBody home={doc.node} meta={meta} reviews={reviews} posts={posts}/>
        </Layout>
    )
}

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    reviews: PropTypes.array.isRequired
};

export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        hero_title
                        hero_subtitle
                        hero_button_text
                        hero_background
                        hero_button_link {
                            ... on PRISMIC__ExternalLink {
                                _linkType
                                url
                            }
                        }
                        content
                        highlight_1 {
                            highlight_image_1
                            highlight_text_1
                        }
                        highlight_2 {
                            highlight_image_2
                            highlight_text_2
                        }
                        about_title
                        about_bio
                        about_links {
                            about_link
                        }
                    }
                }
            }
            allReviews(last: 3) {
                edges {
                    node {
                        review_copy
                        reviewer_name
                    }
                }
            }
            allPosts(last: 6) {
                edges {
                    node {
                        post_title
                        post_preview_description
                        post_hero_image
                        post_category
                        post_date
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
    }
`