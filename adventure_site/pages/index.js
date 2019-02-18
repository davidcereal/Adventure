import React, { PureComponent } from 'react';
import styled, { css, keyframes, createGlobalStyle} from 'styled-components';
// import { injectGlobal } from 'styled-components';

import rem from '../utils/rem';
import { monospace } from '../utils/fonts';
import { mobile } from '../utils/media';
import { navbarHeight, contentHeight} from '../utils/sizes';
import { violetRed, gold, grey, paleGrey, red } from '../utils/colors';
import Link from '../components/Link';
import Nav from '../components/nav/Navbar';
import ConditionInputs from '../components/condition_inputs/ConditionInputs';
import ConditionOutputs from '../components/condition_outputs/ConditionOutputs';

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
    grid-template-columns: 800px 500px 1fr;
    grid-template-rows: ${rem(navbarHeight)} ${rem(contentHeight)} 100px;
    grid-template-areas:
    "header header header"
    "conditionInputs conditionOutputs adbar"
    "footer footer footer";
`;

const Links = styled.div`
  margin: ${rem(36)} 0;
`;


class Index extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:5000/name')
      .then(response => response.json())
      .then(data => console.log(data))
      // .then(data => this.setState({ hits: data.hits }));
  }

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
            <ConditionInputs />
            <ConditionOutputs/>
        </Wrapper>
      </div>

    );
  }
}

export default Index;
