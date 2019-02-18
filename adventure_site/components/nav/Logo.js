import styled, { css } from 'styled-components'
import { navbarHeight } from '../../utils/sizes'

import rem from '../../utils/rem'


const Logo = styled.img.attrs({
  src: "/static/mountain-range.svg"
})`
  // /* width: ${rem(100)}; */
  height: ${rem(navbarHeight)}; 
  width: 80px;
  padding-right: 20px
  // background-repeat: no-repeat;
  // background-size: contain;

`

export default Logo
