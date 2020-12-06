import { useStaticQuery, graphql } from "gatsby"

export const usePrismicBookData = () => {
    const { prismic } = useStaticQuery(
        graphql`
            query BookProductQuery {
                prismic {
                    allBook_products {
                    edges {
                        node {
                        book_description
                        book_name
                        book_price
                        _meta {
                            uid
                        }
                        book_image
                        }
                    }
                    }
                }
            }
        `
    )
    return prismic.allBook_products.edges[0].node;
}