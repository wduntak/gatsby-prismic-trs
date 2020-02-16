import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";

const FooterContainer = styled("footer")`
    margin-top: 125px;
    padding: 75px 30px 45px 30px;
    flex: 0 0 auto;
    position: relative;
    background-color: #e8ece9;
`

const FooterColumns = styled("div")`
    justify-content: flex-end;
    flex-flow: row wrap;
    text-align: left;
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`

const FooterColumn = styled("div")`
    margin-left: 0;
    margin-top: 0;
    padding-top: 0;
    flex-grow: 1;
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
            <FooterColumn></FooterColumn>
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
