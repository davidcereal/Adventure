import React, { PureComponent } from 'react';
import styled, { css, keyframes } from 'styled-components';

import rem from '../utils/rem';
import { monospace } from '../utils/fonts';
import { mobile } from '../utils/media';
import { violetRed, gold, grey, paleGrey, red } from '../utils/colors';
import Link from '../components/Link';
import Nav from '../components/nav/Navbar';

const Wrapper = styled.div.attrs({
  className: 'hero-header', // for integration tests
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: linear-gradient(20deg, ${violetRed}, ${gold});
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.17);
  box-sizing: border-box;
  min-height: 100vh;
`;

const Links = styled.div`
  margin: ${rem(36)} 0;
`;

console.log(gold)


class Index extends PureComponent {
  render() {
    return (
      <div>
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
