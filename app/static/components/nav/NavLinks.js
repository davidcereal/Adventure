import React from 'react';
import styled from 'styled-components';

import rem from '../../utils/rem';
import { navbarHeight } from '../../utils/sizes';
import NavSeparator from './NavSeparator';
import Link from '../Link';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-right: ${rem(30)};
`;

const NavLink = styled(Link).attrs({
  unstyled: true,
  prefetch: true,
})`
  flex: 0 0 auto;
  display: inline-block;
  line-height: ${rem(navbarHeight)};
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: ${rem(0.4)};
  color: currentColor;
  text-decoration: none;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;

const NavLinks = () => (
  <Wrapper>
    <NavLink href="/docs">Reviews</NavLink>
    <NavSeparator />
    <NavLink href="/ecosystem">Planning</NavLink>
    <NavSeparator />
    <NavLink href="/releases">Manage Kit</NavLink>
  </Wrapper>
);

export default NavLinks;
