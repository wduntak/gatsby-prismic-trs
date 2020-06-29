import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import globalStyles from 'styles/global';
import typeStyles from 'styles/typography';
import dimensions from "styles/dimensions";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import 'styles/fonts.scss';

const LayoutContainer = styled.div`
    main.Layout__content {
        margin-top: 100px;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            margin-top: 100px;    
        }
        @media(max-width: ${dimensions.maxwidthMobile}px) {
            margin-top: 90px;
        }
    }
`;

const Layout = ({ children, product, productImage }) => (
  <LayoutContainer className="div">
    <Global styles={[globalStyles, typeStyles]} />
    <Navbar product={product} productImage={productImage} />
    <div className="Layout">
      <main className="Layout__content">{children}</main>
      <Footer />
    </div>
  </LayoutContainer>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
