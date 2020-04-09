import React, { FC, useContext } from 'react'
import { StyledProperties } from 'core/constants/theme'
import formContext from '../context'
import { FormComponentEvent } from '../types'
import { Button as StyledButton } from './styled'

interface Props extends StyledProperties {
  onClick?: any,
  event?: FormComponentEvent,
  value: string,
  disabled?: boolean,
  type?: 'event' | 'submit' | 'reset' | 'button' | 'link',
  url?: string,
  style?: Record<string, string>,
}

const Button: FC<Props> = ({ type, onClick, event, value, disabled, url, style }) => {
  const form = useContext(formContext)

  const handleClick = () => {
    if (onClick) onClick()
    if (type === 'event' && event) form.handleFormEvent(event)
    if (type === 'link' && url)
      if (url.startsWith('/')) location.href = `${location.origin}${url}`
      else location.href = url
  }

  return (
    <StyledButton
      type={type === 'event' || type === 'link' ? 'button' : type}
      onClick={handleClick}
      style={style}
      disabled={disabled}
    >
      {value}
    </StyledButton>
  )
}

export default Button
