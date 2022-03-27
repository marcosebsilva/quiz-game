import styled from 'styled-components';

export const StyledInput = styled.input`
    background-color: white;
    font-size: 1.2rem;
    border-radius: 10px;
    height: 50px;
    width: ${ ({width}) => width || "100%" };
    border: 0.5px solid black;
    box-shadow: 2px 4px 0px #B5B2B2;
    text-align: center;
`