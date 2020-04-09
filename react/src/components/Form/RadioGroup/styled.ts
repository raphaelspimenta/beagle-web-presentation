import styled from 'styled-components'

const directions = {
  left: 'row',
  right: 'row-reverse',
  top: 'column',
  bottom: 'column-reverse',
}

const margins = {
  left: '15px 0',
  right: '15px 0',
  top: '0 15px',
  bottom: '0 15px',
}

const labelMargins = {
  left: '0 0 0 8px',
  right: '0 8px 0 0',
  top: '8px 0 0 0',
  bottom: '0 0 8px 0',
}

export const RadioContainer = styled.div<{ position: keyof typeof directions }>`
  display: flex;
  flex-direction: ${({ position }) => directions[position]};
  justify-content: 'center';
  align-items: 'center';
  margin: ${({ position }) => margins[position]};

  label {
    margin: ${({ position }) => labelMargins[position]};
  }
`
