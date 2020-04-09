import React, { ReactNode, FC } from 'react'
import { Card as StyledCard } from './styled'

interface Props {
  children?: ReactNode,
  style?: Record<string, string>,
}

const Card: FC<Props> = ({ style, children }) => (
  <StyledCard style={style}>{children}</StyledCard>
)

export default Card
