import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import './_datepicker.css';
import React from 'react';
import styled, { css, keyframes, createGlobalStyle} from 'styled-components';
import rem from '../../../utils/rem'



const StyledWrapper = styled.div`
    .DateRangePickerInput_1 {
        display:flex;
        align-items: center;
        /* justify-content: space-around; */
        /* width: 100%;
        font-family: Helvetica, "sans-serif"; */
      };
      .DateInput_input {
        box-sizing: border-box;
      };
      .DateInput_1 {
        width: 130px;
      };
      .DateInput_input_1{
        font-size: ${rem(19)};
      };
    font-family: Helvetica, "sans-serif";
`

class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <StyledWrapper>
      <div className="DateInput">
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          block={false}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        />
      </div>
      </StyledWrapper>
    );
  }
}

export default DateInput;
