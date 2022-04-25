import styled from 'styled-components';

export const StyledLink = styled.a`
  display: none;
  @media screen and (min-width: 500px){
    transform: rotate(90deg);
    font-size: 25px;
    /* needs to be negative thanks to the rotation */
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
`;

export default StyledLink;
