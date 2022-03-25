import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    display: none;
    @media screen and (min-width: 500px){
        transform: rotate(90deg);
        font-size: 1.5rem;
        right: -100px;
        transition: 200ms;
        top: 50%;
        position: absolute;
        display: block;
        &:hover {
            transform: scale(1.1) rotate(90deg);
            color: red;
        }
    }
`

export default function LinkToArticle() {
  return (
    <StyledLink>How this website was made?</StyledLink>
  )
}


// THERE IS A LOT TO FIX ABOUT THIS ONE BUT
// THE SUPPOSED ARTICLE STILL IN PROGRESS TO BE MADE