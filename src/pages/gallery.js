import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
// import styled from "@emotion/styled";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Layout from "components/Layout";

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
            <ImageGallery items={images} />
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
            thumbnail: image.gallery_image.Thumbnail.url
        };
    });

    console.log('images', images);

    return (
        <Gallery images={images} meta={meta}/>
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