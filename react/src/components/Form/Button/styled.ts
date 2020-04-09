import styled from 'styled-components'
import { StyledProperties } from 'core/constants/theme'

export const Button = styled.button`
  background-color: ${({ disabled }) => disabled ? '#DBDBDF' : '#011A26'};
  color: ${({ disabled }) => disabled ? '#9D9D9D' : '#FFF'};
  border-radius: 7px;
  border: none;
  outline: none;
  padding: 6px 30px;
  font-size: 14px;
  cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
`
