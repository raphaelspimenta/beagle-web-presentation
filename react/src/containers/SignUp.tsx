import React from 'react'
import { BeagleRemoteView } from '@zup-it/beagle-react'
import { getUrlParams } from 'core/utils/url'

const SignUp = () => {
  const { step = '' } = getUrlParams(window.location.href)

  return <BeagleRemoteView path={`/${step}`} />
}

export default SignUp
