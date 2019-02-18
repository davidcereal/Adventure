import React, { PureComponent, createRef } from 'react'
import styled, { css } from 'styled-components'
import { Close } from 'styled-icons/material'
import rem from '../../utils/rem'
import { violetRed, paleGrey} from '../../utils/colors'
import { navbarHeight } from '../../utils/sizes'
import { headerFont } from '../../utils/fonts'
import { mobile } from '../../utils/media'
import Link from '../Link'
import NavLinks from './NavLinks'
import Social from './Social'
import Logo from './Logo'
// import MobileNavbar from './MobileNavbar'
// import SearchWithAlgolia from './SearchWithAlgolia'

// const Grid = styled.div`
// display: grid;
// grid-gap: 10px;
// grid-template-columns: 100px 500px 100px;
// grid-template-rows: 50px;
// grid-template-areas:
//   "nav1 nav2 nav3";
// `

// const LogoGridItem = styled.div`
//
// grid-area: nav1;
// justify-self: center;
// `



const Wrapper = styled.nav`
  grid-area: header;
  justify-self: stretch;
  align-self: center;
  z-index: 3;
  height: ${rem(navbarHeight)};
  font-family: ${headerFont};
  font-size: ${rem(15)};
  font-weight: 500;
  background: ${props => (props.transparent ? 'transparent' : violetRed)};
  transition: background 300ms ease-out;
  color: white;
`

const StartWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
/* stylelint-disable */
const StyledSocial = styled(Social)`
  color: white;
`
/* stylelint-enable */

const NormalNavbar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${rem(20)};
  justify-content: space-between;
  ${StartWrapper}, ${EndWrapper} ${StyledSocial} {
    ${mobile(css`
      display: none;
    `)};
  }
`

const StyledModalCloseIcon = styled(Close)`
  width: ${rem(26)};
  height: ${rem(26)};
  color: white;
`

const baseZ = 1


const LogoLink = styled(Link).attrs({
  unstyled: true,
  href: '/',
})`
`

class Navbar extends PureComponent {
  state = {
    isOpen: false,
  }
  openModal = () => this.setState(() => ({ isOpen: true }))
  closeModal = () =>
    this.setState(({ isOpen }) => (isOpen ? { isOpen: false } : null))
  render() {
    const {
      // onSideToggle,
      // onMobileNavToggle,
      // isSideFolded,
      // isMobileNavFolded,
      // showSideNav,
      // transparent,
    } = this.props

    return (
      // <Wrapper transparent={transparent}>
      <Wrapper>
        <NormalNavbar>
          <StartWrapper>
              <LogoLink>
                <Logo />
              </LogoLink>
            <NavLinks />
          </StartWrapper>
          <EndWrapper>
            <StyledSocial />
          </EndWrapper>
        </NormalNavbar>
        {/* <MobileNavbar
          isSideFolded={isSideFolded}
          onSearchButtonClick={this.openModal}
          isMobileNavFolded={isMobileNavFolded}
          onSideToggle={onSideToggle}
          onMobileNavToggle={onMobileNavToggle}
          showSideNav={showSideNav}
        /> */}
      </Wrapper>
    )
  }
}

export default Navbar
