import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const BuyFooterContainer = styled("section")`
  color: #fff;
  background: linear-gradient(135deg, #316d63 0%, #319c2f 100%);
  display: block;

  svg {
    display: block;
    position: relative;
    z-index: 0;
    height: 6rem;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
  }
`

const BuyFooterInfoWrapper = styled("div")`
  padding-top: 3rem;
  padding-bottom: 3rem;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  h3 {
      display: block;
      font-weight: bold;
      font-size: 2.0rem;
      margin-bottom: 20px;
  }
  a {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0);
    color: #fff;
    padding: 0.6875rem 1.5rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    display: inline-block;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0.3125rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`

const BuyNowFooter = () => (
  <BuyFooterContainer>
    <svg
      preserveAspectRatio="none"
      viewBox=" 0 0 100 100"
    >
      <polygon fill="#FFF" points="0 0 100 0 100 100"></polygon>
    </svg>
    <BuyFooterInfoWrapper>
        <h3>Read about our stories now</h3>
        <a>Purchase Now</a>
    </BuyFooterInfoWrapper>
  </BuyFooterContainer>
)

export default BuyNowFooter;
