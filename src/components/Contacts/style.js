import styled from 'styled-components';
import device from '../../utils/dict/screenSize.json';

export const StyledButton = styled.button`
    width: 50px;
    height: 10px;
    position: absolute;
    z-index: 1000;
    right: 1rem;
    top: 2rem;
    background-color: black;
    
    &::before, &::after {
        background-color: black;
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

    @media screen and (min-width: ${device.desktop}){
        display: none;
    }
`;
export const StyledWrapper = styled.div`
    align-items: center;
    display: flex;
    transition: 500ms;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.show ? '1' : '0')};
    z-index: 100;

    @media screen and (min-width: ${device.desktop}){
        visibility: visible;
        opacity: 1;
        left: 200px;
        bottom: 0;
        align-items: flex-start;
        width: auto;
        height: auto;
        &::after {
            content: '';
            width: 3px;
            height: 50px;
            background-color: black;
            margin: 0 auto;
            display: block;
        }
    }
`;
export const StyledIconWrapper = styled.img`
    width: 60px;
    display: block;
    margin-bottom: 20px;
    transition: 100ms;
    &:hover {
        transform: scale(1.1);
    }
    
    @media screen and (min-width: ${device.desktop}){
        width: 40px;
        margin-bottom: 1.5rem;
    }
`;
export const StyledOpacityController = styled.div`
    & ~ main {
        transition: 200ms;
        filter: ${props => props.showContacts ? "blur(2px)" : ""};
    }
`;
