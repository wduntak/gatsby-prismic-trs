import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const HeaderContainer = styled("header")`
    padding: 10px 20px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    transition: opacity 0.25s,transform 0.25s;
    will-change: opacity,transform;
    background-color: rgba(255,255,255,0.97);
    border-bottom: 1px solid rgba(46,46,46,0.1);
    background-clip: padding-box;
`

const HeaderContent = styled("div")`
    height: 80px;
    position: relative;
    height: 60px;
    padding-top: 0.02px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    @media screen and (min-width: ${dimensions.maxwidthDesktop}px) {
        height: 90px;
        transition: height: 0.15s ease;
        max-width: 1140px;
        padding-right: 0;
        padding-left: 0;
    }
    .logo {
        position: absolute;
        left: 0;
        top: 50%;
        width: 116px;
        height: 26px;
        margin-top: -20px;
        color: #ff9326;
        @media(min-width: 880px) {
            width: 150px;
            height: 33px;
            margin-top: -17px;
        }
        svg {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 50%;
            width: 180px;
            height: 70px;
            margin-top: -24px;
            color: #ff9326;
        }
    }
`

const HeaderLinks = styled("nav")`
    display: block;
    ul {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 20px;
        justify-content: flex-end;
        padding-left: 0;
        @media(min-width: 880px) {
            margin-top: 20px;
        }
        @media(min-width: 1140px) {
            margin-top: 32px;
        }
    }
    
    li {
        font-family: Gelasio;
        font-size: 1.2rem;
        font-weight: 500;
        display: none;
        flex: 0 0 auto;
        margin-right: 5px;
        margin-left: 5px;
        list-style-type: none;
        &:first-child {
            margin-left: 0;
        }
        @media(min-width: 880px) {
            display: block;
            margin-right: 20px;
            margin-left: 20px;
        }
    }


    a {
        color: #2e2e2e;
        background-image: linear-gradient(to bottom,#e5e5e5,#e5e5e5);
        background-repeat: repeat-x;
        background-size: 1px 1px;
        background-position: 0 1.2em;
        padding-bottom: 10px;
        margin-bottom: -10px;
        text-decoration: none;

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 18px;
            height: 3px;
            background: transparent;
            bottom: -3px;
            right: 50%;
            margin-right: -9px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            background-image: linear-gradient(to bottom,#bdbdbd,#bdbdbd);
            background-repeat: repeat-x;
            background-size: 1px 1px;
            background-position: 0 1.2em;
            padding-bottom: 10px;
            margin-bottom: -10px;
            text-decoration: none;
        }

        // &.Link--is-active {
        //     &:after {
        //         background: ${colors.blue500};
        //         transition: 100ms ease-in-out background;
        //     }
        // }
    }
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <Link 
                to="/"
                className="logo">
                <Logo/>
            </Link>
            <HeaderLinks>
                <ul>
                    <li>
                        <Link
                            activeClassName="Link--is-active"
                            to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClassName="Link--is-active"
                            to="/blog">
                            Blog
                        </Link>

                    </li>
                    <li>
                        <Link
                            activeClassName="Link--is-active"
                            to="/donate">
                            Donate
                        </Link>
                    </li>
                </ul>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;