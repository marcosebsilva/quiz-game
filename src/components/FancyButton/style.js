import styled from 'styled-components';

export const StyledFancyButton = styled.button`
    max-width: ${ props => props.maxWidth || '400px' };
    width: ${ props => props.width || '80vw' };
    background-color: ${ props => props.backgroundColor || 'black' };
    border-radius: 5px;
    box-shadow: 1px 4px 0px #B5B2B2;
    color: white;
    transition: 100ms;
    font-family: UniSans;
    // https://stackoverflow.com/questions/13426875/text-border-using-css-border-around-text thanks to bookcasey
    /* i probably should change this approach */
    // the very last shadow is the fancy one
    text-shadow: 1px 0 0 black, -1px 0 0 black, 0 1px 0 black, 0 -1px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 2px 2px 0px ${props => props.textShadowColor || "#FD28C1" };
    font-weight: 900;
    font-size: ${ props => props.fontSize || '3rem' };
    height: ${ props => props.height || '78px' };
    &:active {
        transform: translate(1px, 4px);
        box-shadow: none;
    }
`