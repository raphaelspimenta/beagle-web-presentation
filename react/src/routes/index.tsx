import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DynamicRoute from 'components/DynamicRoute'
import Base from 'containers/Base'

const SignUp = DynamicRoute(() => import('containers/SignUp'/* webpackChunkName: 'sign-up' */))

const Routes = () => (
  <Base>
    <Switch>
      <Route exact path="/" component={SignUp} />
    </Switch>
  </Base>
)

export default Routes
