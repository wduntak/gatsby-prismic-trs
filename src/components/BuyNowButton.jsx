import React from "react"
import styled from "@emotion/styled"
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

const BuyNowButton = ({ children }) => (
    <BuyNowContainer>
        <button
            className="snipcart-add-item"
            data-item-id="trs-boston-book"
            data-item-price="49.99"
            data-item-url="/"
            data-item-description="Stories of Tibetan Resettlement"
            data-item-image="./trs-book.png"
            data-item-name="Tibetan Resettlement Stories: Voices of Boston"
            >
            {children}
        </button>
    </BuyNowContainer>
)

export default BuyNowButton;

BuyNowButton.propTypes = {
    children: PropTypes.string.isRequired,
};