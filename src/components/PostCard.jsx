import React from "react";
import Moment from 'react-moment';
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import colors from "styles/colors";
import PropTypes from "prop-types";

const PostCardContainer = styled("article")`
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
    display: inline-block;
    vertical-align: top;
    &:nth-child(even) {
        border-bottom: none;
    }
`
const PostImage = styled("img")`
    max-width: 350px;
    width: 100%;
`

const PostCategory = styled("h6")`
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
    }
`

const PostMetas = styled("div")`
`

const PostAuthor = styled("div")`
`

const PostDate = styled("div")`
    font-size: 12px;
    color: #555;
`

const PostDescription = styled("div")`
    p {
        font-family: 'Gelasio';
        margin-top: 10px;
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

const PostCard = ({ author, category, date, title, description, uid, thumbnail}) => (
    <PostCardContainer className="BlogPostCard">
        <PostImage src={thumbnail.thumbnail.url} />
        <PostTitle><h3>{title[0].text}</h3></PostTitle>
        <PostDate>
            <Moment format="MMMM D, YYYY">{date}</Moment>
        </PostDate>
        <PostDescription>
            {RichText.render(description)}
        </PostDescription>
        <PostCardAction className="PostCardAction">
            <Link to={`blog/${uid}`}>Read More</Link>
        </PostCardAction>
        <PostMetas>
            <PostAuthor>
                {author}
            </PostAuthor>
        </PostMetas>
    </PostCardContainer>
)

export default PostCard;

PostCard.propTypes = {
    author: PropTypes.string.isRequired,
    category: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired
}