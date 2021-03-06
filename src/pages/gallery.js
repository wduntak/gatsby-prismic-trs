import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Layout from "components/Layout";

const ImageGalleryContainer = styled('div')`
    display: block;
    max-width: 1140px;
    margin: 0 auto 8rem auto;

    @media(min-width: ${dimensions.maxwidthDesktop}px) {
        padding-top: 40px;
    }
    .image-gallery-content .image-gallery-slide .image-gallery-image {
        height: 600px;
        max-height: 600px;
        width: 100%;
        background-color: #000;
    }
    .image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg {
        height: 60px;
        width: 60px;
    }
`

const Gallery = ({ images, meta, home }) => (
    <>
        <Helmet
            title={`Gallery | Prist, Gatsby & Prismic Starter`}
            titleTemplate={`%s | Gallery | Prist, Gatsby & Prismic Starter`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Gallery | Prist, Gatsby & Prismic Starter`,
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
            <ImageGalleryContainer>
                <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showIndex={true} />
            </ImageGalleryContainer>
        </Layout>
    </>
);

export default ({ data }) => {
    const gallerys = data.allPrismicGalleryBodyImageGallery.edges
    const meta = data.site.siteMetadata;
    const home = data.allPrismicHomepage.nodes.slice(0, 1).pop()

    if (!gallerys) return null;

    const images = gallerys[0].node.items.map((image, i) => {
        return {
            original: image.gallery_image.url,
            thumbnail: image.gallery_image.thumbnails.Thumbnail.url,
            description: image.caption.text,
            originalAlt: image.alt_text.text
        };
    });

    return (
        <Gallery images={images} meta={meta} home={home.data} />
    )
}

Gallery.propTypes = {
    images: PropTypes.array.isRequired,
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
        allPrismicGalleryBodyImageGallery {
            edges {
            node {
                items {
                alt_text {
                    html
                    text
                    raw
                }
                gallery_image {
                    alt
                    copyright
                    url
                    thumbnails {
                        Thumbnail {
                            url
                        }
                    }
                }
                caption {
                    html
                    text
                    raw
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
