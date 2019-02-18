import React, { PureComponent, createRef } from 'react'
import styled, { css } from 'styled-components'
import { Close } from 'styled-icons/material'
import rem from '../../utils/rem'
import { violetRed, paleGrey} from '../../utils/colors'
import { contentHeight } from '../../utils/sizes'
import { headerFont } from '../../utils/fonts'
import { mobile } from '../../utils/media'
import Link from '../Link'

const Wrapper = styled.div`
  color: white;
  z-index: 3;
  height: ${rem(contentHeight)};
  background: turquoise;
  grid-area: conditionOutputs;
  justify-self: stretch;
  align-self: center;
`

class ConditionsOutput extends PureComponent {
  render() {
      return (
        <Wrapper>
        </ Wrapper>
      )
  }
}

export default ConditionsOutput
