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
        transition: height 0.15s ease;
        max-width: 1140px;
        padding-right: 0;
        padding-left: 0;
    }
    .hidden {
        display: none;
    }
`

const HeaderLinks = styled("nav")`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .logo {
        width: 150px;
        height: 100%;
        svg {
            width: 100%;
            height: 100%;
        }
    }
    ul {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 20px;
        justify-content: flex-end;
        padding-left: 0;
    
        li {
            font-family: Gelasio;
            font-size: 1.2rem;
            font-weight: 500;
            display: none;
            flex: 0 0 auto;
            margin-right: 5px;
            margin-left: 5px;
            list-style-type: none;
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
            }
            &:first-child {
                margin-left: 0;
            }
            @media(min-width: 880px) {
                display: block;
                margin-right: 20px;
                margin-left: 20px;
            }
        }
    }
    svg.icon--menu {
        width: 100px;
        height: 25px;
        display: none;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            display: block;
        }
    }
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <svg className="hidden">
                <symbol id="icon-menu" viewBox="0 0 24 24">
                    <title>menu</title>
                    <path d="M23.8,6H0.1V3h23.7V6z M23.8,10.5H0.1v3h23.7V10.5z M14.2,18h-14v3h14V18z"/>
                </symbol>
                <symbol id="icon-cross" viewBox="0 0 24 24">
                    <title>cross</title>
                    <path d="M14.1,12l7.3,7.3l-2.1,2.1L12,14.1l-7.3,7.3l-2.1-2.1L9.9,12L2.6,4.7l2.1-2.1L12,9.9l7.3-7.3l2.1,2.1L14.1,12z"/>
                </symbol>
            </svg>
            <HeaderLinks>
                <Link 
                    to="/"
                    className="logo">
                    <Logo/>
                </Link>
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
                            to="/team">
                            Team
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
                            to="/gallery">
                            Gallery
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
                <svg className="icon icon--menu"><use xlinkHref="#icon-menu"></use></svg>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;