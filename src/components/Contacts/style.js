import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 50px;
    height: 10px;
    position: absolute;
    right: 1rem;
    top: 2rem;

    &, &::before, &::after {
        background-color: black;
    }

    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 10px;
    }

    &::before{
        top: -15px;
    }

    &::after{
        bottom: -15px;
    }

    @media screen and (min-width: 500px){
        display: none;
    }
`;

export const StyledWrapper = styled.div`
    display: flex;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')} ;
    opacity: ${(props) => (props.show ? '1' : '0')};
    transition: 500ms;
    flex-direction: column;
    z-index: 1000;
    bottom: 0;
    left: 1rem;
    position: absolute;
    &::after {
        content: '';
        width: 3px;
        height: 50px;
        background-color: black;
        margin: auto;
        display: block;
    }

    @media screen and (min-width: 500px){
        visibility: visible;
        opacity: 1;
        left: 10%;
        &::after {
            height: 100px;
        }
    }
`;

export const StyledIconWrapper = styled.img`
    width: 30px;
    display: block;
    margin-bottom: 1rem;
    transition: 100ms;
    &:hover {
        transform: scale(1.1);
    }
    
    @media screen and (min-width: 500px){
        width: 40px;
        margin-bottom: 1.5rem;
    }
`;
