import styled from 'styled-components';
import React from 'react'

export const StyledTitle = styled.h1`
    font-size: 4rem;
    font-weight: 250;
    position: absolute;
    top: 15vh;
    i {
      color: #FD28C1;
      font-style: normal;
      font-weight: 900;
    }
`

export default function PageTitle({normalText, highlightedText}) {
  return (
    <StyledTitle>{normalText}<i>{highlightedText}</i></StyledTitle>
  )
}
