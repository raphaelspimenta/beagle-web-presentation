import styled from 'styled-components'
import Select from 'react-select'

interface SelectState {
  isDisabled: boolean,
  isFocused: boolean,
  menuIsOpen: boolean,
  hasValue: boolean,
  isMulti: boolean,
  isRtl: boolean,
}

export const StyledSelect = styled(Select).attrs({ classNamePrefix: 'react-select' })`
  .react-select__control {
    border: 2px solid #F2F2F3;
    transition: border 0.3s, box-shadow 0.3s;
    min-height: 0;
    font-size: 11px;

    :hover {
      border: 2px solid #afe4ff;
    }
  }

  .react-select__control--is-focused {
    border: 2px solid #afe4ff;
    box-shadow: 0 0 6px #bae4fb;

    :hover {
      border: 2px solid #afe4ff;
    }
  }

  .react-select__indicator {
    padding: 0 8px !important;
  }

  .react-select__value-container div:last-child {
    margin: 0;
  }
`
