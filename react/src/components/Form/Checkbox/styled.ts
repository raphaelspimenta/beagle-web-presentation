import styled from 'styled-components'

interface Props {
  position: string,
}

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${({ position }) => position === 'left' ? 'row-reverse' : 'row'};
  justify-content: ${({ position }) => position === 'left' ? 'flex-end' : 'flex-start'};
  align-items: baseline;
`

export const InputWrapper = styled.div`
  display: block;
  width: 15px;
  height: 15px;
`

export const CheckboxInput = styled.input`
  position: absolute;
  visibility: hidden;
  &:checked ~ .check::before {
    background: #ededef00;
    content: '\u2713';
    color: #05944c;
  }
`

export const CheckboxLabel = styled.label`
  display: block;
  position: absolute;
  border: 1px solid #444343;
  border-radius: 2px;
  height: 15px;
  width: 15px;
  transition: border .25s linear;
  -webkit-transition: border .25s linear;
  text-align: center;
  &:before {
    display: block;
    height: 100%;
    width: 100%;
    margin: auto;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }
`

