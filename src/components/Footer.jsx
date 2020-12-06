import React from "react";
import { Link } from "gatsby";
import { usePrismicSocialLinksData } from "../hooks/use-prismic-social-links-data"
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const FooterContainer = styled("footer")`
    padding: 75px 30px 45px 30px;
    flex: 0 0 auto;
    position: relative;
    background-color: #e8ece9;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding: 30px;
    }
`

const FooterColumns = styled("div")`
    justify-content: flex-end;
    flex-flow: row wrap;
    text-align: left;
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        flex-flow: column nowrap;
    }
`

const FooterColumn = styled("div")`
    margin-left: 0;
    margin-top: 0;
    padding-top: 0;
    flex-grow: 1;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        &:nth-of-type(1) {
            order: 3;
            svg {
                max-width: 140px;
                margin: 0 auto;
                display: block;
            }
        }    
        &:nth-of-type(3), &:nth-of-type(4) {
            order: 1;
            text-align: center;
            margin-bottom: 20px;
        }
    }
    h3 {
        font-size: 16px;
    }
    ul {
        list-style: none;
        padding: 0;
        font-size: 14px;
        li {
            margin-top: 20px;
            a {
                color: #757575;
                text-decoration: none;
                img {
                    width: 25px;
                    margin-right: 5px;
                }
            }
        }
    }
`

const Footer = () => {
    const social_links = usePrismicSocialLinksData();
    return (
        <FooterContainer>
            <FooterColumns>
                <FooterColumn>
                    <Link to="/">
                        <Logo />
                    </Link>
                </FooterColumn>
                <FooterColumn></FooterColumn>
                <FooterColumn>
                    <h3>About</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Gallery</Link></li>
                        <li><Link to="/">Blog</Link></li>
                    </ul>
                </FooterColumn>
                <FooterColumn>
                    <h3>Social</h3>
                    <ul>
                        {social_links.map((link, i) => (
                            <li key={i}><a href={link.social_link_url[0].text}><span>{link.social_link_name[0].text}</span></a></li>
                        ))}
                    </ul>
                </FooterColumn>
            </FooterColumns>
        </FooterContainer>
    );
}

export default Footer;
