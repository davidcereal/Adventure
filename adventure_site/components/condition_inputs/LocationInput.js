import React, { PureComponent } from 'react'
import styled from 'styled-components'
import {Search as SearchIcon} from 'styled-icons/fa-solid/Search'
import TextInput from '../TextInput'

const StyledSearchIcon = styled(SearchIcon)`
  color: palevioletred;
  height: 55%;
`;

const View = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const IconBox = styled.div`
position: absolute;
height: 100%;
left: 0px;
box-sizing: border-box;
display: flex;
padding-left: 10px;
align-items: center;
`;

class LocationInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View className={this.props.className}>
      <IconBox>
        <StyledSearchIcon />
      </ IconBox>
        <TextInput
          placeholder={this.props.placeholder}
          />
      </View>
    );
  }
}

export default LocationInput;
