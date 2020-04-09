import React, { ReactNode } from 'react'
import NavBar from 'components/NavBar'
import { Page, Body } from 'components/commons.styled'

interface Props {
  children: ReactNode,
}

const Base = ({ children }: Props) => (
  <Body>
    <NavBar />
    <Page>
      {children}
    </Page>
  </Body>
)

export default Base
