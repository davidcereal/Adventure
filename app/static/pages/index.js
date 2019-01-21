import React, { PureComponent } from 'react';
import styled, { css, keyframes, createGlobalStyle} from 'styled-components';
// import { injectGlobal } from 'styled-components';

import rem from '../utils/rem';
import { monospace } from '../utils/fonts';
import { mobile } from '../utils/media';
import { violetRed, gold, grey, paleGrey, red } from '../utils/colors';
import Link from '../components/Link';
import Nav from '../components/nav/Navbar';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div.attrs({
  className: 'hero-header', // for integration tests
})`
  color: white;
  background: linear-gradient(20deg, ${violetRed}, ${gold});
  // box-shadow: 0 2px 20px rgba(0, 0, 0, 0.17);
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100px 500px 1fr;
    grid-template-rows: 50px 300px 100px;
    grid-template-areas:
    "header header header"
    "sidebar content adbar"
    "footer footer footer";
`;

const Links = styled.div`
  margin: ${rem(36)} 0;
`;


class Index extends PureComponent {
  render() {
    return (
      <div>
      <GlobalStyles />
        <Wrapper>
            <Nav
              // showSideNav={false}
              // transparent={!isScrolled}
              // isMobileNavFolded={isMobileNavFolded}
              // onMobileNavToggle={this.toggleMobileNav}
              onRouteChange={this.onRouteChange}
            />
        </Wrapper>
      </div>

    );
  }
}

export default Index;
