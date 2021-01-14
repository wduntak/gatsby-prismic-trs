import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import Layout from "components/Layout";

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
    max-height: 250px;
    height: 100%;
    background-color: rgba(255,255,255,0.90);
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
        margin-top: 80px;
        margin-bottom: 40px;
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
        @media(max-width: ${dimensions.maxwidthMobile}px) {
            font-size: 1.6rem;
        }
    }
    h2, h3, h4 {
        text-align: center;
        font-style: italic;
    }
    img {
        display: block;
        margin: 30px auto;
        width: 100%;
        max-width: 800px;
    }
`

const About = ({ abouts, meta, home }) => (
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
        <Layout productImage={home.hero_background.url}>
            <AboutContainer>
                <AboutHeroSection style={{backgroundImage: "url(" + abouts.about_title_background.url + ")"}}>
                    <AboutHeroInner>
                        {RichText.render(abouts.about_title.raw)}
                    </AboutHeroInner>
                </AboutHeroSection>
                <AboutBodySection>
                    {RichText.render(abouts.about_body.raw)}
                </AboutBodySection>
            </AboutContainer>
        </Layout>
    </>
);

export default ({ data }) => {
    const abouts = data.allPrismicAbout.edges[0].node.data;
    const meta = data.site.siteMetadata;
    const home = data.allPrismicHomepage.nodes.slice(0, 1).pop();
    console.log('home', home);

    if (!abouts) return null;

    return (
        <About abouts={abouts} meta={meta} home={home.data} />
    )
}

About.propTypes = {
    abouts: PropTypes.object.isRequired,
    home: PropTypes.object.isRequired,
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
    allPrismicAbout {
        edges {
        node {
            data {
            about_body {
                html
                text
                raw
            }
            about_title {
                html
                text
                raw
            }
            about_title_background {
                alt
                copyright
                url
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
