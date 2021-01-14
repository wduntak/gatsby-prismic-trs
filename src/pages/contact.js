import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import ContactUs from "components/ContactUs";


const ContactContainer = styled("div")`
  max-width: 1140px;
  margin: 0 auto;
  padding: 40px 0;
`

const Contact = ({ meta, home }) => (
    <>
        <Helmet
            title={`Contact Us | Tibetan Resettlement Stories`}
            titleTemplate={`%s | Contact Us | Tibetan Resettlement Stories`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Contact Us | Tibetan Resettlement Stories`,
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
            <ContactContainer>
                <ContactUs />
            </ContactContainer>
        </Layout>
    </>
)

export default ({ data }) => {
    const meta = data.site.siteMetadata
    const home = data.allPrismicHomepage.nodes.slice(0, 1).pop()

    return (
        <Contact meta={meta} home={home.data} />
    )
}

Contact.propTypes = {
    home: PropTypes.object.isRequired,
}

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
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
