import { useStaticQuery, graphql } from "gatsby"

export const usePrismicModalData = () => {
    const { prismic } = useStaticQuery(
        graphql`
            query ModalQuery {
                prismic {
                    allModals {
                        edges {
                            node {
                                modal_content
                                modal_enabled
                                _meta {
                                    id
                                    lastPublicationDate
                                }
                            }
                        }
                    }
                }
            }
        `
    )
    return prismic.allModals.edges[0].node;
}