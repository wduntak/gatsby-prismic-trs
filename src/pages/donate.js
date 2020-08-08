import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText } from "prismic-reactjs"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import Layout from "components/Layout"
import Img from "gatsby-image"

const DonateContainer = styled("div")`
  max-width: 1140px;
  margin: 0 auto;
`
const DonateHeroSection = styled("header")`
  display: flex;
  height: 600px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-size: cover;
  margin-bottom: 60px;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    height: 300px;
  }
`
const DonateHeroInner = styled("div")`
  max-width: 800px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.97);
  margin: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    max-height: 150px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Gelasio", serif;
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

const DonateBodySection = styled("div")`
  font-family: "Gelasio", serif;
  margin-bottom: 60px;
  padding: 0 20px;
  h1 {
    text-align: center;
    font-size: 2.4rem;
    margin-top: 100px;
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
  h2,
  h3,
  h4 {
    text-align: center;
    font-style: italic;
  }
`

const Donate = ({ donates, meta, home, product }) => (
  <>
    <Helmet
      title={`Donate | Tibetan Resettlement Stories`}
      titleTemplate={`%s | Donate | Tibetan Resettlement Stories`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Donate | Tibetan Resettlement Stories`,
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
      <DonateContainer>
        <DonateHeroSection
          style={{
            backgroundImage: "url(" + donates.donate_title_background.url + ")",
          }}
        >
          <DonateHeroInner>{RichText.render(donates.donate_title)}</DonateHeroInner>
        </DonateHeroSection>
        <DonateBodySection>
          {RichText.render(donates.donate_body)}
        </DonateBodySection>
      </DonateContainer>
    </Layout>
  </>
)

export default ({ data }) => {
  const donates = data.prismic.allDonates.edges[0].node
  const meta = data.site.siteMetadata
  const home = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const product = data.allStripeSku.edges
  if (!donates) return null

  return (
    <Donate donates={donates} meta={meta} home={home.node} product={product} />
  )
}

Donate.propTypes = {
  donates: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
  product: PropTypes.array.isRequired,
}

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
      allDonates {
        edges {
          node {
            donate_title
            donate_title_background
            donate_body
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
    allStripeSku(filter: { product: { id: { eq: "prod_GVN1SL4dCamlJA" } } }) {
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
