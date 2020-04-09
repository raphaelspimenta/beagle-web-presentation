import styled from 'styled-components'

interface IdentifierProps {
  isActive: boolean,
}

export const Wrapper = styled.div`
  display: flex;
  padding: 60px;
  width: 300px;
  justify-content: space-between;
  align-self: center;
`

export const Identifier = styled.span<IdentifierProps>`
  color: ${({ isActive }) => isActive ? '#FFF' : '#9D9D9D' };
  font-size: 18px;
`

export const PageIdentifier = styled.div<IdentifierProps>`
  background-color: ${({ isActive }) => isActive ? '#011A26' : '#DBDBDF'};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
