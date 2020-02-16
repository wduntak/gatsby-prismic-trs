import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import colors from "styles/colors";

const ReviewSliderTitle = styled('h1')`
    font-family: Gelasio;
    font-weight: 200;
    font-size: 2.4rem;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 0;
    margin-top: 6rem;
    &::after {
        content: "";
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${colors.green800};
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0;
        margin-top: 23px;
    }
`

const ReviewSliderWrapper = styled("div")`
    height: 350px;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    .slider__nav:checked {
        -webkit-animation: check 0.4s linear forwards;
        animation: check 0.4s linear forwards;
    }
    .slider__nav:checked:nth-of-type(1) ~ .slider__inner {
        left: 0%;
    }
    .slider__nav:checked:nth-of-type(2) ~ .slider__inner {
        left: -100%;
    }
    .slider__nav:checked:nth-of-type(3) ~ .slider__inner {
        left: -200%;
    }
    .slider__nav:checked:nth-of-type(4) ~ .slider__inner {
        left: -300%;
    }
    @-webkit-keyframes check {
        100% {
            outline-color: ${colors.green600};
        }
    }

    @keyframes check {
        100% {
            outline-color: ${colors.green600};
        }
    }
`

const ReviewSliderContainer = styled("div")`
    position: absolute;
    top: 0;
    left: 0;
    width: 300%;
    height: 100%;
    -webkit-transition: left 0.4s;
    transition: left 0.4s;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
`


const ReviewSliderContent= styled("div")`
    height: 100%;
    padding: 2rem;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-flow: column nowrap;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
`

const ReviewSliderQuote = styled('p')`
  font-family: 'Gelasio', serif;
  color: #000;
  margin: 0 0 1rem 0;
  max-width: 600px;
  width: 100%;
`

const ReviewSliderAuthor = styled('p')`
  color: #000;
  margin-bottom: 3rem;
  max-width: 400px;
  font-size: 12px;
  width: 100%;
`

const ReviewSliderNav = styled.input`
    width: 12px;
    height: 12px;
    margin: 2rem 12px;
    border-radius: 50%;
    z-index: 10;
    outline: 6px solid ${colors.green200};
    outline-offset: -6px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`

const ReviewSlider = ({ reviews }) => (
    <>
    <ReviewSliderTitle>Testimonials</ReviewSliderTitle>
    <ReviewSliderWrapper>
            {reviews.map((review, i) => {
                if (i == 0) {
                    return (<ReviewSliderNav key={i} type="radio" name="slider" title={ "slide" + (i + 1) } checked="checked" className="slider__nav"/>);
                } 
                else {
                    return (<ReviewSliderNav key={i} type="radio" name="slider" title={ "slide" + (i + 1) } className="slider__nav"/>);
                }
            })}
        <ReviewSliderContainer className="slider__inner">
            {reviews.map((review, i) => {
                return (
                    <ReviewSliderContent key={i}>
                        <ReviewSliderQuote>"{review.node.review_copy[0].text}"</ReviewSliderQuote>
                        <ReviewSliderAuthor>- {review.node.reviewer_name[0].text}</ReviewSliderAuthor>
                    </ReviewSliderContent>
                );                
            })}
        </ReviewSliderContainer>
    </ReviewSliderWrapper>
    </>
)

export default ReviewSlider;

ReviewSlider.propTypes = {
    reviews: PropTypes.array.isRequired
}