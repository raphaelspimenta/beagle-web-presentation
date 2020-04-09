import React, { FC } from 'react'
import { StyledProperties } from 'core/constants/theme'
import { Container } from './styled'

interface Props extends StyledProperties {
  value: string,
}

const Text: FC<Props> = ({ value, style }) => (
  <p style={style}>{value}</p>
)

export default Text
