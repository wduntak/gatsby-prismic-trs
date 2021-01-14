import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"

import CartButton from "./CartButton"
import BuyNowButton from "./BuyNowButton"

const NavbarContainer = styled("nav")`
    padding: 10px 20px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 200;
    transition: opacity 0.25s,transform 0.25s;
    will-change: opacity,transform;
    background-color: rgba(255,255,255,0.97);
    border-bottom: 1px solid rgba(46,46,46,0.1);
    background-clip: padding-box;
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        &.is-active {
        }
    }
`

const NavbarWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 3.25rem;
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    max-width: 1140px;
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        display: block;
    }
`

const NavbarBrand = styled("div")`
    flex-shrink: 0;
    align-items: center;
    display: flex;
    min-height: 3.25rem;
    .logo {
        display: flex;
        align-items: center;
        flex-grow: 0;
        flex-shrink: 0;
        position: relative;
        padding: 10px;
        svg {
            height: auto;
            max-height: 3.75rem;
            max-width: 100%;
            width: 200px;
            display: block;
            position: relative;
            @media(max-width: ${dimensions.maxwidthMobile}px) {
                width: 150px;
            }
        }
    }
    .navbar-burger {
        display: none;
        color: #4a4a4a;
        cursor: pointer;
        height: 3.25rem;
        position: relative;
        width: 3.25rem;
        margin-left: auto;
        &:hover {
            background-color: rgba(0,0,0,.05);
        }
        span {
            background-color: currentColor;
            display: block;
            height: 2px;
            left: calc(50% - 8px);
            position: absolute;
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transition-duration: 86ms;
            transition-duration: 86ms;
            -webkit-transition-property: background-color,opacity,-webkit-transform;
            transition-property: background-color,opacity,-webkit-transform;
            transition-property: background-color,opacity,transform;
            transition-property: background-color,opacity,transform,-webkit-transform;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
            width: 16px;
            &:first-of-type {
                top: calc(50% - 6px);
            }
            &:nth-of-type(2) {
                top: calc(50% - 1px);
            }
            &:nth-of-type(3) {
                top: calc(50% + 4px);
            }
        }
        &.is-active {
            span {
                &:first-of-type {
                    -webkit-transform: translateY(5px) rotate(45deg);
                    transform: translateY(5px) rotate(45deg);
                }
                &:nth-of-type(2) {
                    opacity: 0;
                }
                &:nth-of-type(3) {
                    -webkit-transform: translateY(-5px) rotate(-45deg);
                    transform: translateY(-5px) rotate(-45deg);
                }
            }
        }
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            display: block;
        }
    }
    .navbar-cart-mobile-container {
        display: none;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            display: block;
        }

    }
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        width: 100%;
    }
`

const NavbarMenu = styled("div")`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    ul {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 20px;
        justify-content: flex-end;
        padding-left: 0;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            flex-flow: column nowrap;
        }
        li {
            font-family: Gelasio;
            font-size: 1.2rem;
            font-weight: 500;
            flex: 0 0 auto;
            margin: 0 10px;
            list-style-type: none;
            text-align: center;
            display: flex;
            align-items: center;
            &.purchase-options-container {
                div:last-child {
                    margin-left: 10px;
                }
            }
            @media (max-width: ${dimensions.maxwidthTablet}px) {
                border: none;
                margin: 10px 0;
                display: inline;
            }
            a {
                color: #2e2e2e;
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
                    text-decoration: underline;
                }
            }
            @media(min-width: ${dimensions.maxwidthTablet}px) {
            }
        }
    }
    @media(max-width: ${dimensions.maxwidthTablet}px) {
        display: none;
        &.is-active {
            display: block;
        }
    }
`

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarActiveClass: "",
            active: false,
        }
    }

    toggleMenu() {
        this.setState({ 
            active: !this.state.active,
        }, () => {
            this.state.active
                ? this.setState({
                    navbarActiveClass: 'is-active'
                })
                : this.setState({
                    navbarActiveClass: "",
                })
        })
    }

    render() {
        return (
            <NavbarContainer className={`${this.state.navbarActiveClass}`}>
                <NavbarWrapper>
                    <NavbarBrand>
                        <Link 
                            to="/"
                            className="logo">
                            <Logo/>
                        </Link>
                        <div
                            className={`navbar-burger burger ${this.state.navbarActiveClass}`}
                            onClick={() => this.toggleMenu()}
                            onKeyDown={() => this.toggleMenu()}
                            role="button"
                            tabIndex="0">
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="navbar-cart-mobile-container">
                            <CartButton />
                        </div>
                    </NavbarBrand>
                    <NavbarMenu className={`${this.state.navbarActiveClass}`}>
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
                                    to="/news">
                                    News
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
                                    to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClassName="Link--is-active"
                                    to="/donate">
                                    Donate
                                </Link>
                            </li>
                            <li className="purchase-options-container">
                                <BuyNowButton>Buy Now</BuyNowButton>
                                <CartButton />
                            </li>
                        </ul>
                    </NavbarMenu>
                </NavbarWrapper>
        </NavbarContainer>            
        );
    }
}

export default Navbar;