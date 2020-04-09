import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    background-color: #EDEDEF;
    font-family: 'Open Sans', sans-serif;
    color: #313131;
    font-size: 12px;
  }

  p {
    margin: 0;
  }
`

export const Body = styled.div`
  height: 100vh;
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
