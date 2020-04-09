import React, { FC, useContext, useEffect, useState } from 'react'
import { StyledProperties } from 'core/constants/theme'
import { Group, Label } from '../styled'
import formContext from '../context'
import { Input as StyledInput } from './styled'

interface Props extends StyledProperties {
  name: string,
  label?: string,
  type?: string,
  value?: string,
  disabled?: boolean,
  autocomplete?: string,
  placeholder?: string,
}

const Input: FC<Props> = ({
  name,
  label,
  type,
  value: initialValue = '',
  disabled,
  autocomplete,
  placeholder,
  style,
}) => {
  const form = useContext(formContext)
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    form.setField(name, { value, hasError: false })
  }, [])

  useEffect(() => {
    form.setFieldValue(name, value)
  }, [value])

  return (
    <Group style={style}>
      <Label>{label}:</Label>
      <StyledInput
        name={name}
        type={type}
        value={value}
        onChange={event => setValue(event.target.value)}
        disabled={disabled}
        // @ts-ignore
        autocomplete={autocomplete}
        placeholder={placeholder}
      />
    </Group>
  )
}

export default Input
