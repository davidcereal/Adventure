import styled, { css } from 'styled-components'

import rem from '../../utils/rem'

const Logo = styled.div`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  background-position: center;
  background-size: contain;
  ${p =>
    p.compact
      ? css`
          background-image: url(/static/icon.png);
          width: ${rem(100)};
          height: ${rem(30)};
        `
      : css`
          background-image: url(/static/mountain-range.svg);
          width: ${rem(50)};
          height: ${rem(40)};
        `};
`

export default Logo
