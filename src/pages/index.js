import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "components/Layout";
import BuyNowButton from "components/BuyNowButton";
import PostCard from "components/PostCard";

const HeroSection = styled("section")`
  padding: 4rem 0;
  color: #fff;
  display: block;
  position: relative;
  background: linear-gradient(135deg, #204f6b 0%, #1c791b 100%);
`

const HeroWrapper = styled("div")`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1140px;
    z-index: 100;
    position: relative;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      padding: 0 2rem;
      flex-flow: column nowrap;
    }
`
const HeroBackground = styled("div")`
    background-image: url('https://images.prismic.io/trs-website/4172a4fb-e548-4ccb-b9a9-4b9add76ca73_trs_group_photo.jpg?auto=compress,format');
    background-position-y: -300px;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(1);
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0.1;
    top: 0;
    z-index: 10;
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
      @media(max-width:${dimensions.maxwidthTablet}px) {
        flex-flow: column nowrap;
        max-width: 420px;
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
    margin: 20px 0;
    @media(max-width:${dimensions.maxwidthMobile}px) {
        font-size: 1.6rem;
    }
    &::after {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
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
const HeroLinkContainer = styled("div")`
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        display: flex;
        flex-flow: column nowrap;
    }
`

const PreviewLink = styled("a")`
  font-family: Gelasio;
  font-size: 16px;
  text-align: center;
  color: #fff;
  padding: 13px 20px;
  border: 2px solid #2196f3;
  background-color: transparent;
  border-radius: 10px;
  margin-left: 20px;
  &:hover {
    color: #fff;
    background-color: #299691;
    text-decoration: none;
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-left: 0;
    margin-top: 15px;
  }
`

const Section = styled("section")`
    padding: 4rem 0;
    border-top: 1px solid rgba(46,46,46,0.1);
    display: block;
    flex-direction: column;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2em auto;
        padding: 2rem 0;
    }
    @media(max-width:${dimensions.maxwidthMobile}px) {
        padding: 0;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
    &.highlight-section {
        position: relative;
        margin-bottom: 0;
        border: none;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            padding: 0 0 2em 0;
        }
    }
    &.testimonial-section {
        padding: 5em 0;
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        @media(max-width: ${dimensions.maxwidthMobile}px) {
            height: 550px;
        }
        .carousel {
            height: 250px;
            .carousel-indicators {
                bottom: -50px;
                @media(max-width: ${dimensions.maxwidthMobile}px) {
                    bottom: -100px;
                }
                li {
                    background-color: #fff;
                }
            }
            .carousel-inner {
                padding: 0 20px;
            }
        }
        &::after {
            content: "";
            background: url('./tibet_map_bg.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0.8;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: -1;
            filter: invert(1);
        }
    }
    &.news-section {
        padding-top: 6em;
        margin-bottom: 8rem;
        & > a {
            display: block;
            text-align: center;
        }
    }
`
const HighlightWrapper = styled("div")`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    justify-content: center;
    align-items: stretch;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        flex-flow: column nowrap;
        max-height: 100%;
    }
`

const HighlightImageContainer = styled("div")`
    flex-grow: 1;
    position: relative;
    width: 50%;
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        width: 100%;
        order: 1;
    }
    img.highlight-photo {
        max-width: 530px;
        max-height: 400px;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: 3px 3px 12px #888888;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            margin: 30px auto 0 auto;
            display: block;
        }
    }
    figure.bg-swatch.right {
        z-index: -1;
        max-width: 18rem;
        right: 0;
        bottom: 0;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            right: 200px;
            bottom: -150px;
        }
        div.swatch-wrapper {
            margin-right: -8rem;
            margin-bottom: -8rem;
        }
    }
    figure.bg-swatch.left {
        z-index: -1;
        max-width: 20rem;
        left: 0;
        bottom: 0;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            left: 200px;
            bottom: -150px;
        }
        div.swatch-wrapper {
            margin-left: -8rem;
            margin-bottom: -8rem;
            transform: rotate(50deg);
        }
    }
`
const HighlightTextContainer = styled("div")`
    flex-grow: 1;
    width: 50%;
    color: #000;
    display: flex;
    align-items: center;
    font-family: 'Gelasio', serif;
    margin-top: 30px;
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        width: 100%;
        order: 2;
        padding: 30px;
        display: flex;
        justify-content: center;
    }
`

const HighlightTextWrapper = styled("div")`
    padding: 0 4rem;
    width: 100%;
    max-width: 650px;
    @media(min-width: ${dimensions.maxwidthTablet}px) {
        &.text-left {
            margin: 0 0 0 auto;
        }
    }
    p {
        color: #545454;
    }
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        h3, p {
            text-align: center;
        }
    }
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding: 0;
    }
`
const TestimonialQuote = styled('p')`
  font-family: 'Gelasio', serif;
  font-size: 18px;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  @media(max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
  }
`

const TestimonialAuthor = styled('p')`
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
  margin: 20px auto;
  max-width: 400px;
  font-size: 12px;
  width: 100%;
`
const TestimonialTitle = styled("h1")`
    font-family: Gelasio;
    font-weight: 200;
    font-size: 2.4rem;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 1em;
    color: #fff;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        font-size: 1.6rem;
    }
    &::after {
        content: "";
        display: block;
        width: 30px;
        height: 2px;
        background-color: #fff;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0;
        margin-top: 23px;
    }    
`

const NewsPostsTitle = styled("h1")`
    font-family: Gelasio;
    font-weight: 200;
    font-size: 2.4rem;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 0;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        font-size: 1.6rem;
    }
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
const NewsPostsWrapper = styled("div")`
    margin: 0;
    column-fill: initial;
    column-count: 3;
    column-gap: 50px;
    max-width: 1140px;
    width: 100%;
    margin: 60px auto 0 auto;
    padding: 0 20px;

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

const RenderBody = ({ home, posts, meta, reviews, previewLink, banner }) => {
  console.log(posts);
  const displayPosts = posts.length === 0 
    ? <></> 
    : (
        <Section className="news-section">
          <NewsPostsTitle>News</NewsPostsTitle>
          <NewsPostsWrapper>
            {
              posts.slice(0).map((post, i) => (
                <PostCard
                  key={i}
                  category={post.node.data.post_category}
                  title={post.node.data.post_title.text}
                  description={post.node.data.post_preview_description.raw}
                  thumbnail={post.node.data.post_hero_image.url}
                  uid={post.node.uid}
                  date={post.node.data.post_date}
                />
              ))
            }
          </NewsPostsWrapper>
          <WorkAction to={"/news"}>
            See all posts
          </WorkAction>
        </Section>
      )
  return (
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
      <HeroSection>
        <HeroWrapper>
          <HeroImageContainer>
            <img src={home.hero_background.url} alt="Book Cover"></img>
          </HeroImageContainer>
          <HeroDetailContainer>
            <>
              {RichText.render(home.hero_title.raw)}
              {RichText.render(home.hero_subtitle.raw)}
            </>
            <HeroLinkContainer>
              <BuyNowButton>Add to Cart</BuyNowButton>
              <PreviewLink href={previewLink} alt="Read book preview">Read Preview</PreviewLink>
            </HeroLinkContainer>
          </HeroDetailContainer>
        </HeroWrapper>
        <HeroBackground />
      </HeroSection>
      <Section className="highlight-section">
        <HighlightWrapper>
          <HighlightImageContainer className="image-left">
            <img src={home.highlight_1[0].highlight_image_1.url} className="highlight-photo" alt={home.highlight_1[0].highlight_image_1.alt} />
            <figure className="max-w-15rem w-100 position-absolute bg-swatch right">
              <div className="swatch-wrapper">
                <img className="img-fluid" src="./swatch-1.svg" alt="Green Splash" />
              </div>
            </figure>
          </HighlightImageContainer>
          <HighlightTextContainer>
            <HighlightTextWrapper className="text-right">
              {RichText.render(home.highlight_1[0].highlight_text_1.raw)}
            </HighlightTextWrapper>
          </HighlightTextContainer>
        </HighlightWrapper>
      </Section>
      <Section className="highlight-section">
        <HighlightWrapper>
          <HighlightTextContainer>
            <HighlightTextWrapper className="text-left">
              {RichText.render(home.highlight_2[0].highlight_text_2.raw)}
            </HighlightTextWrapper>
          </HighlightTextContainer>
          <HighlightImageContainer className="image-right">
            <img src={home.highlight_2[0].highlight_image_2.url} className="highlight-photo" alt={home.highlight_2[0].highlight_image_2.alt} />
            <figure className="max-w-15rem w-100 position-absolute bg-swatch left">
              <div className="swatch-wrapper">
                <img className="img-fluid" src="./swatch-1.svg" alt="Green Splash" />
              </div>
            </figure>
          </HighlightImageContainer>
        </HighlightWrapper>
      </Section>
      <Section className="testimonial-section">
        <TestimonialTitle>Testimonials</TestimonialTitle>
        <Carousel controls={false}>
          {reviews.map((review, i) => {
            return (
              <Carousel.Item key={i}>
                <TestimonialQuote>"{review.node.data.review_copy.text}"</TestimonialQuote>
                <TestimonialAuthor>- {review.node.data.reviewer_name.text}</TestimonialAuthor>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Section>
      { displayPosts }
    </>
  );
}

export default ({ data }) => {
    //Required check for no data being returned
    const doc = data.allPrismicHomepage.edges.slice(0, 1).pop()
    const posts = data.allPrismicPost.edges
    const meta = data.site.siteMetadata;
    const reviews = data.allPrismicReview.edges
    const previews = data.allPrismicPreviewbookpage.edges
    const banner = data.allPrismicSkinnybanner.edges

    if (!doc || !reviews|| !posts || !previews || !banner) return null;

    const previewLink = previews[0].node.data.previewbooklink.url;
    
    return (
        <Layout productImage={doc.node.data.hero_background.url} banner={banner}>
            <RenderBody home={doc.node.data} meta={meta} reviews={reviews} posts={posts} previewLink={previewLink}/>
        </Layout>
    )
}

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    reviews: PropTypes.array.isRequired,
    previewLink: PropTypes.string.isRequired,
};

export const query = graphql`
         {
           allPrismicHomepage {
             edges {
               node {
                 data {
                   hero_background {
                     url
                   }
                   hero_button_link {
                     url
                   }
                   hero_button_text {
                     html
                     text
                     raw
                   }
                   hero_subtitle {
                     raw
                   }
                   hero_title {
                     raw
                   }
                   highlight_1 {
                     highlight_image_1 {
                       alt
                       copyright
                       url
                     }
                     highlight_text_1 {
                       html
                       text
                       raw
                     }
                   }
                   highlight_2 {
                     highlight_image_2 {
                       alt
                       copyright
                       url
                     }
                     highlight_text_2 {
                       html
                       text
                       raw
                     }
                   }
                 }
               }
             }
           }
           allPrismicReview {
             edges {
               node {
                 data {
                   review_copy {
                     html
                     text
                     raw
                   }
                   reviewer_name {
                     html
                     text
                     raw
                   }
                 }
               }
             }
           }
           allPrismicPost(limit: 6, sort: {fields: last_publication_date, order: DESC}) {
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
                   post_category {
                     html
                     text
                     raw
                   }
                   post_date
                 }
                 uid
               }
             }
           }
           allPrismicPreviewbookpage {
             edges {
               node {
                 data {
                   previewbooklink {
                     url
                   }
                 }
               }
             }
           }
           allPrismicSkinnybanner {
             edges {
               node {
                 data {
                   banner_message {
                     html
                     text
                     raw
                   }
                   enable_banner
                 }
               }
             }
           }
           site {
             siteMetadata {
               author
               description
               title
             }
           }
         }
       `