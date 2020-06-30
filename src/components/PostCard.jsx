import React from "react";
import Moment from 'react-moment';
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import PropTypes from "prop-types";

const PostCardContainer = styled("article")`
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
    display: inline-block;
    vertical-align: top;
    &:nth-of-type(even) {
        border-bottom: none;
    }
`
const PostImage = styled("img")`
    max-width: 350px;
    max-height: 180px;
    width: 100%;
    height: auto;
    background-color: #eee;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        max-width: 100%;
    }
`

const PostTitle = styled(Link)`
    font-family: 'Gelasio', serif;
    color: #000;
    text-decoration: none;
    line-height: 1;
    margin-bottom: 30px;
    h3 {
        font-size: 2rem;
        font-weight: 500;
        margin: 15px 0;
        @media(max-width: ${dimensions.maxwidthMobile}px) {
            font-size: 1.4rem;
        }
    }
`

const PostDate = styled("div")`
    font-size: 12px;
    color: #555;
`

const PostDescription = styled("div")`
    height: 200px;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        height: 150px;
    }
    p {
        font-family: 'Gelasio';
        margin-top: 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
`

const PostCardAction = styled("div")`
    a {
        font-size: 14px;
        color: #555;
        text-decoration: underline;
    }
    /* font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    } */
`

const PostCard = ({ category, date, title, description, uid, thumbnail}) => (
    <PostCardContainer className="BlogPostCard">
        <PostImage src={thumbnail.thumbnail.url} />
        <PostTitle to={`/blog/${uid}`}><h3>{title[0].text}</h3></PostTitle>
        <PostDate>
            <Moment format="MMMM D, YYYY">{date}</Moment>
        </PostDate>
        <PostDescription>
            {RichText.render(description)}
        </PostDescription>
        <PostCardAction className="PostCardAction">
            <Link to={`/blog/${uid}`}>Read More</Link>
        </PostCardAction>
    </PostCardContainer>
)

export default PostCard;

PostCard.propTypes = {
    // author: PropTypes.string.isRequired,
    category: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired
}