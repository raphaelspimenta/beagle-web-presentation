import React, { FC } from 'react'
import times from 'lodash/times'
import { StyledProperties } from 'core/constants/theme'
import { Wrapper, PageIdentifier, Identifier } from './styled'

interface Props extends StyledProperties {
  totalPages: number,
  activePage: number,
}

const PageCounter: FC<Props> = ({ totalPages, activePage, style }) => {
  const renderPageIdentifier = (i: number) => {
    const isActive = activePage === i
    return (
      <PageIdentifier key={`page-counter-${i}`} isActive={isActive}>
        <Identifier isActive={isActive}>{i}</Identifier>
      </PageIdentifier>
    )
  }

  return (
    <Wrapper>
      {times(totalPages, (i) => renderPageIdentifier(++i))}
    </Wrapper>
  )
}
export default PageCounter
