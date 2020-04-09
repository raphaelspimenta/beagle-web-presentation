import React, { FC } from 'react'
import Logo from 'core/assets/images/logo.png'
import Menu from 'core/assets/images/menu.png'
import { Nav, Wrapper, Header, Right, Separator } from './styled'

const NavBar: FC = () => (
  <>
    <Nav>
      <Wrapper>
        <img src={Logo} />
        <Header>cadastro de conta</Header>
      </Wrapper>
      <Right>
        <img src={Menu} />
      </Right>
    </Nav>
    <Separator />
  </>
 )

export default NavBar
