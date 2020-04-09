import React, { FC } from 'react'
import { StyledProperties } from 'core/constants/theme'
import { Container } from './styled'

interface Props extends StyledProperties {
  src: string,
}

const Image: FC<Props> = ({ src, style }) => (
  <img src={src} style={style} />
)

export default Image
