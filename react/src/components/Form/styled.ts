import styled from 'styled-components'
import { StyledProperties } from 'core/constants/theme'

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label<StyledProperties>`
  display: block;
  color: #4A4A4A;
  margin-bottom: 10px;
`

export const StyledForm = styled.form`
  position: relative;
`

export const LoadingPanel = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(237, 237, 239, 0.55);
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  pointer-events: ${({ isVisible }) => isVisible ? 'auto' : 'none'};
  transition: opacity 0.5s;
`
