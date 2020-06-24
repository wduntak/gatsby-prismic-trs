import React from "react";
import { Link } from "gatsby";
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
        &:nth-child(1) {
            order: 3;
            svg {
                max-width: 200px;
                margin: 0 auto;
                display: block;
            }
        }    
        &:nth-child(3), &:nth-child(4) {
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
        li {
            margin-top: 20px;
            a {
                color: #757575;
                text-decoration: none;
            }
        }
    }
`

const Footer = () => (
    <FooterContainer>
        <FooterColumns>
            <FooterColumn>
                <Link to="/">
                    <Logo />
                </Link>
            </FooterColumn>
            <FooterColumn></FooterColumn>
            <FooterColumn>
                <h3>Browse</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Gallery</Link></li>
                    <li><Link to="/">Blog</Link></li>
                </ul>
            </FooterColumn>
            <FooterColumn>
                <h3>Follow</h3>
                <ul>
                    <li><Link to="/">Twitter</Link></li>
                    <li><Link to="/">Facebook</Link></li>
                    <li><Link to="/">Instagram</Link></li>
                    <li><Link to="/">Youtube</Link></li>
                </ul>
            </FooterColumn>
        </FooterColumns>
    </FooterContainer>
)

export default Footer;
