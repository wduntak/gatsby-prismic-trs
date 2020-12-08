import { useStaticQuery, graphql } from "gatsby"

export const usePrismicModalData = () => {
    const { allPrismicModal } = useStaticQuery(
      graphql`
        query ModalQuery {
          allPrismicModal {
            edges {
              node {
                data {
                  modal_content {
                    html
                    text
                    raw
                  }
                  modal_enabled
                }
                last_publication_date
              }
            }
          }
        }
      `
    )
    return allPrismicModal.edges[0].node;
}