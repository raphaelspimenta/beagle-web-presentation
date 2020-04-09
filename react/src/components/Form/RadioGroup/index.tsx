import React, { FC, useContext, useMemo, useEffect, useRef } from 'react'
import { StyledProperties } from 'core/constants/theme'
import formContext from '../context'
import { RadioGroupProvider } from './context'

interface Props extends StyledProperties {
  name: string,
  value?: string,
}

const RadioGroup: FC<Props> = ({ name, value: initialValue = '', style, children }) => {
  const form = useContext(formContext)
  const htmlElement = useRef<HTMLDivElement>()

  const checkRadioWithInitialValue = () => {
    if (!htmlElement.current) return
    htmlElement.current.querySelectorAll('[type=radio]').forEach((radio) => {
      if (radio.getAttribute('value') === initialValue) radio.setAttribute('checked', 'checked')
    })
  }

  useEffect(() => {
    form.setField(name, { value: initialValue, hasError: false })
    checkRadioWithInitialValue()
  }, [])

  const radioGroupContext = useMemo(() => ({ name, initialValue }), [name, initialValue])

  return (
    // @ts-ignore
    <div ref={htmlElement} style={style}>
      <RadioGroupProvider value={radioGroupContext}>
        {children}
      </RadioGroupProvider>
    </div>
  )
}

export default RadioGroup
