import React, { FC } from 'react'

interface Props {
  style?: Record<string, string>,
}

const Container: FC<Props> = ({ children, style }) => (
  <div style={style}>{children}</div>
)

export default Container
