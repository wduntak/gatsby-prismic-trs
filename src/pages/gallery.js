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
    margin: 0 auto;

    @media(min-width: ${dimensions.maxwidthDesktop}px) {
        padding-top: 40px;
    }
    .image-gallery-image {
        background-color: #000;
    }
`

const Gallery = ({ images, meta }) => (
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
        <Layout>
            <ImageGalleryContainer>
                <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showIndex={true} />
            </ImageGalleryContainer>
        </Layout>
    </>
);

export default ({ data }) => {
    const gallerys = data.prismic.allGallerys.edges;
    const meta = data.site.siteMetadata;
    if (!gallerys) return null;

    const images = gallerys[0].node.body[0].fields.map((image, i) => {
        return {
            original: image.gallery_image.url,
            thumbnail: image.gallery_image.Thumbnail.url,
            description: image.caption[0].text,
            originalAlt: image.alt_text[0].text
        };
    });

    return (
        <Gallery images={images} meta={meta} />
    )
}

Gallery.propTypes = {
    gallerys: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        prismic {
            allGallerys {
                edges {
                    node {
                        body {
                            ... on PRISMIC_GalleryBodyImage_gallery {
                                fields {
                                    gallery_imageSharp {
                                        id
                                    }
                                    gallery_image
                                    alt_text
                                    caption
                                }
                            }
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
