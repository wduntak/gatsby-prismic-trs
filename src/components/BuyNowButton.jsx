import React from "react"
import styled from "@emotion/styled"
import { usePrismicBookData } from "../hooks/use-prismic-book-data"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"

const BuyNowContainer = styled("div")`
    display: inline-block;
    button {
        background-color: #2196f3;
        border: 2px solid #2196f3;
        color: #fff;
        font-family: "Gelasio";
        font-size: 16px;
        text-align: center;
        padding: 12px 30px;
        border-radius: 10px;
        vertical-align: middle;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

        &:hover {
            background-color: #03a9f4;
        }
    }
`

const BuyNowButton = ({ children }) => {
    const { book_description, book_price, book_name, book_image, _meta } = usePrismicBookData()
    return (
        <BuyNowContainer>
            <button
                className="snipcart-add-item"
                data-item-id={_meta.uid}
                data-item-price={book_price}
                data-item-url="/"
                data-item-description={book_description[0].text}
                data-item-image={book_image.url}
                data-item-name={book_name[0].text}
                >
                {children}
            </button>
        </BuyNowContainer>
    );
}

export default BuyNowButton;

BuyNowButton.propTypes = {
    children: PropTypes.string.isRequired,
};