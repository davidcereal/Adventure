import React, { PureComponent } from 'react'
import styled from 'styled-components'
import rem from '../utils/rem'


const TextInput = styled.input`
  padding: 0.5em;
  padding-left: 35px;
  color: palevioletred;
  border: none;
  font-size: ${rem(17)};
  ::-webkit-input-placeholder {
    opacity: .6
  };
  font-weight: 200;
  height: 100%;
  width: 100%;
`;

export default TextInput;
