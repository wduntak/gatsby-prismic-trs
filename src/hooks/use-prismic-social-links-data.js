import { useStaticQuery, graphql } from "gatsby"

export const usePrismicSocialLinksData = () => {
    const { prismic } = useStaticQuery(
        graphql`
            query MyQuery {
                prismic {
                    allSocial_media_linkss {
                    edges {
                        node {
                        social_links {
                            social_link_name
                            social_link_url
                        }
                        }
                    }
                    }
                }
            }
        `
    )
    return prismic.allSocial_media_linkss.edges[0].node.social_links;
}