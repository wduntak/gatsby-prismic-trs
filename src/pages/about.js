import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import Layout from "components/Layout";
import Img from "gatsby-image"

const AboutContainer = styled('div')`
   max-width: 1140px;
   margin: 0 auto;
`
const AboutHeroSection = styled('header')`
   display: flex;
   height: 600px;
   width: 100%;
   justify-content: center;
   align-items: center;
   background-size: cover;
   margin-bottom: 60px;
   @media(max-width: ${dimensions.maxwidthMobile}px) {
       height: 300px;
   }
`
const AboutHeroInner = styled('div')`
    max-width: 800px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    background-color: rgba(255,255,255,0.97);
    margin: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
       max-height: 150px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Gelasio', serif;
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
`

const AboutBodySection = styled('div')`
    font-family: 'Gelasio', serif;
    margin-bottom: 60px;
    padding: 0 20px;
    h1 {
        text-align: center;
        font-size: 2.4rem;
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
    h2, h3, h4 {
        text-align: center;
        font-style: italic;
    }
`
const AboutImages = styled('div')`

`

const AboutImagesTitle = styled('div')`
    font-family: 'Gelasio', serif;
    h2 {
        text-align: center;
        font-size: 1.8rem;
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
`
const AboutImagesWrapper = styled('div')`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

`

const About = ({ abouts, images, meta }) => (
    <>
        <Helmet
            title={`About | Tibetan Resettlement Stories`}
            titleTemplate={`%s | About | Tibetan Resettlement Stories`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `About | Tibetan Resettlement Stories`,
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
            <AboutContainer>
                <AboutHeroSection style={{backgroundImage: "url(" + abouts.about_title_background.url + ")"}}>
                    <AboutHeroInner>
                        {RichText.render(abouts.about_title)}
                    </AboutHeroInner>
                </AboutHeroSection>
                <AboutBodySection>
                    {RichText.render(abouts.about_body)}
                </AboutBodySection>
                <AboutImages>
                    <AboutImagesTitle>
                        <h2>Stay Connected With Us</h2>
                    </AboutImagesTitle>
                    <AboutImagesWrapper>
                        {images.map((image, i) => (
                            <a href={"https://www.instagram.com/voicesofbostontrs/"}>
                                <Img 
                                    key={i}
                                    fixed={image.node.localFile.childImageSharp.fixed}        
                                />
                            </a>
                        ))}
                    </AboutImagesWrapper>
                </AboutImages>
            </AboutContainer>
        </Layout>
    </>
);

export default ({ data }) => {
    const abouts = data.prismic.allAbouts.edges[0].node;
    const meta = data.site.siteMetadata;
    console.log(data);
    const instaImages = data.allInstaNode.edges;
    if (!abouts) return null;

    return (
        <About abouts={abouts} meta={meta} images={instaImages} />
    )
}

About.propTypes = {
    abouts: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired
};

export const query = graphql`
    {
        allInstaNode(limit: 4, sort: {fields: timestamp, order: DESC}) {
            edges {
                node{
                    localFile {
                        childImageSharp {
                            fixed(width: 250, height: 250) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }

                }
            }
        }
        prismic {
            allAbouts {
                edges {
                    node {
                        about_title
                        about_title_background
                        about_body
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