import React from "react";
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "components/Layout";

const NotFoundPage = ({ home, product }) => (
    <Layout product={product}>
        <h1>
            NOT FOUND
        </h1>
        <p>
            You just hit a route that doesn&#39;t exist... the sadness.
        </p>
    </Layout>
)

export default ({ data }) => {
    const home = data.prismic.allHomepages.edges.slice(0, 1).pop();
    const product = data.allStripeSku.edges;
    if (!home || !product) return null;

    return (
        <NotFoundPage home={home.node} product={product} />
    )
}

NotFoundPage.propTypes = {
    home: PropTypes.object.isRequired,
    product: PropTypes.array.isRequired,
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
