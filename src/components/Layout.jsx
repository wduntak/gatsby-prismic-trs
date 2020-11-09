import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import globalStyles from 'styles/global';
import { RichText } from "prismic-reactjs"
import typeStyles from 'styles/typography';
import dimensions from "styles/dimensions";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import 'styles/fonts.scss';

const LayoutContainer = styled.div`
    main.Layout__content {
        margin-top: 108px;
        @media(max-width: ${dimensions.maxwidthTablet}px) {
            margin-top: 100px;    
        }
        @media(max-width: ${dimensions.maxwidthMobile}px) {
            margin-top: 90px;
        }
    }
`;

const BannerContainer = styled.div`
  width: 100%;
  color: #000;
  text-align: center;
  font-size: 1rem;
  color: #2196f3;
  padding: 10px;
  p {
      margin: 0;
      padding: 20px 10px;
      background-color: #f7f7f7;
  }
`

const Layout = ({ children, productImage, banner }) => {
  let bannerTemplate = null;
  if (banner !== undefined) {
    const isBannerEnabled = banner[0].node.enable_banner;
    if (isBannerEnabled) {
      bannerTemplate = <BannerContainer>{RichText.render(banner[0].node.banner_message)}</BannerContainer>;
    }
  }

  return (
    <LayoutContainer className="div">
      <Global styles={[globalStyles, typeStyles]} />
      <Navbar productImage={productImage} />
      <div className="Layout">
        <main className="Layout__content">
          {bannerTemplate}
          {children}
        </main>
        <Footer />
      </div>
    </LayoutContainer>
  );  
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
