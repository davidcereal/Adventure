import React, { PureComponent, createRef } from 'react'
import styled, { css } from 'styled-components'
import { Close } from 'styled-icons/material'
import rem from '../../utils/rem'
import { violetRed, paleGrey} from '../../utils/colors'
import { contentHeight } from '../../utils/sizes'
import { headerFont } from '../../utils/fonts'
import { mobile } from '../../utils/media'
import Link from '../Link'
import { SubHeader } from '../Layout'
import DateInput from './date_input/DateInput'
import LocationInput from './LocationInput'

const Wrapper = styled.div`
  color: white;
  z-index: 3;
  height: ${rem(contentHeight)};
  background: #fff9ee;
  grid-area: conditionInputs;
  justify-self: stretch;
  align-self: center;
`;

const Cta = styled(SubHeader)`
  color: ${violetRed};
`;

const LocationInputWrapper = styled(LocationInput)`
  margin-top: 20px;
  margin-left: 20px;
  width: 250px;
  height: 25px;
`;


class ConditionsInput extends PureComponent {
  render() {
      return (
        <Wrapper>
        <Cta>Where are you going?</ Cta>
        <DateInput />
        <LocationInputWrapper
          placeholder="Yosemite National Park"
        />
        </ Wrapper>

      )
  }
}

export default ConditionsInput
