import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { BeagleProvider } from '@zup-it/beagle-react'
import { ThemeProvider } from 'styled-components'
import Routes from 'routes'
import { theme } from 'core/constants/theme'
import beagleService from 'core/beagle/service'
import GlobalStyle from 'components/commons.styled'

const AppComponent = () => (
  // @ts-ignore
  <BeagleProvider value={beagleService}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </BeagleProvider>
)

render(<AppComponent />, document.getElementById('root'))
