import React, { FC, useMemo, useContext, useState } from 'react'
import { StyledProperties } from 'core/constants/theme'
import uniqueId from 'lodash/uniqueId'
import formContext from '../context'
import radioGroupContext from './context'
import { RadioContainer } from './styled'

interface Props extends StyledProperties {
  value: string,
  position?: 'left' | 'right' | 'top' | 'bottom',
}

const Radio: FC<Props> = ({ position = 'left', value, children, style }) => {
  const id = useMemo(uniqueId, [])
  const form = useContext(formContext)
  const radioGroup = useContext(radioGroupContext)

  return (
    <RadioContainer style={style} position={position}>
      <input
        type="radio"
        id={id}
        name={radioGroup.name}
        value={value}
        onChange={() => form.setFieldValue(radioGroup.name, value)} />
      <label htmlFor={id}>{children}</label>
    </RadioContainer>
  )
}

export default Radio
