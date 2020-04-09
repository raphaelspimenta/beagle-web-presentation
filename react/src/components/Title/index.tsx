import React, { FC } from 'react'
import { StyledProperties } from 'core/constants/theme'
import { Title as StyledTitle } from './styled'

interface Props extends StyledProperties {
  value: string,
}

const Title: FC<Props> = ({ value, style }) => (
  <StyledTitle style={style}>{value}</StyledTitle>
)

export default Title
