import { useStaticQuery, graphql } from "gatsby"

export const usePrismicBookData = () => {
    const { allPrismicBookProduct } = useStaticQuery(
      graphql`
        query BookProductQuery {
          allPrismicBookProduct {
            edges {
              node {
                id
                data {
                  book_price
                  book_description {
                    html
                    text
                    raw
                  }
                  book_image {
                    alt
                    copyright
                    url
                  }
                  book_name {
                    html
                    text
                    raw
                  }
                }
                uid
              }
            }
          }
        }
      `
    )
    return allPrismicBookProduct.edges[0].node;
}