import React, { FC, useMemo, useState, useEffect, useContext } from 'react'
import map from 'lodash/map'
import find from 'lodash/find'
import { StyledProperties } from 'core/constants/theme'
import formContext from '../context'
import { Group, Label } from '../styled'
import { StyledSelect } from './styled'

interface Option {
  name: string,
  value: string,
}

interface Props extends StyledProperties {
  label: string,
  name: string,
  options: Option[],
  value?: string,
  style?: Record<string, string>,
}

const Select: FC<Props> = ({ label, name, options, style, value: initialValue }) => {
  const form = useContext(formContext)
  const opts = useMemo(() => map(options, ({ name, value }) => ({ label: name, value })), [options])
  const initialOption = useMemo(() => find(opts, { value: initialValue }), [initialValue, opts])
  const [selected, setSelected] = useState(initialOption)

  useEffect(() => {
    form.setField(name, { value: selected ? selected.value : '', hasError: false })
  }, [])

  useEffect(() => {
    form.setFieldValue(name, selected ? selected.value : '')
  }, [selected])

  return (
    <Group style={style}>
      <Label>{label}:</Label>
      <StyledSelect options={opts} value={selected} onChange={setSelected} />
    </Group>
  )
}

export default Select
