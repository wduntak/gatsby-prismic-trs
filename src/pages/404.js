import React from "react";
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "components/Layout";

const NotFoundPage = ({ home }) => (
    <Layout>
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
    if (!home) return null;

    return (
        <NotFoundPage home={home.node} />
    )
}

NotFoundPage.propTypes = {
    home: PropTypes.object.isRequired,
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
    }
`
