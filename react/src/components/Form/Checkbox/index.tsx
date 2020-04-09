import React, { FC, useState } from 'react'
import { StyledProperties } from 'core/constants/theme'
import { Wrapper, InputWrapper, CheckboxInput, CheckboxLabel } from './styled'

interface Props extends StyledProperties {
  id: string,
  name: string,
  value: string,
  position?: 'left' | 'right',
}

const Checkbox: FC<Props> = ({ id, name, position = 'left', value, style, children }) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    setChecked(!checked)
  }
  
  return (
    <Wrapper position={position} style={style}>
      {children}
      <InputWrapper onClick={onChange}>
        <CheckboxInput type="checkbox" id={id} name={name} value={value} checked={checked} onChange={onChange} />
        <CheckboxLabel className="check" htmlFor={id} />
      </InputWrapper>
    </Wrapper>
  )
}

export default Checkbox
