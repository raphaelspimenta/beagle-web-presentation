import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #001B26;
  color: #ECECEE;
  height: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
`

export const Separator = styled.div`
  height: 2px;
  background: rgb(201,113,5);
  background: linear-gradient(90deg, rgba(201,113,5,1) 0%, rgba(206,144,16,1) 100%);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Right = styled.div`
`

export const Header = styled.h1`
  margin-left: 14px;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
`
