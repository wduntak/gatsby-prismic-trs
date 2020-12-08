import { useStaticQuery, graphql } from "gatsby"

export const usePrismicSocialLinksData = () => {
    const { allPrismicSocialMediaLinks } = useStaticQuery(
      graphql`
        query SocialLinkQuery {
          allPrismicSocialMediaLinks {
            edges {
              node {
                data {
                  social_links {
                    social_link_name {
                      html
                      text
                      raw
                    }
                    social_link_url {
                      html
                      text
                      raw
                    }
                  }
                }
              }
            }
          }
        }
      `
    )
    return allPrismicSocialMediaLinks.edges[0].node.data;
}