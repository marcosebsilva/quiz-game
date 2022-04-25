import styled from 'styled-components';
import colors from '../../utils/dict/colors.json';

export const StyledScore = styled.h1`
    color: ${colors['default-pink']};
    font-size: 4.5rem;
`;

export const StyledTitle = styled.h2`
    font-style: italic;
    color: black;
`;

export const StyledDescription = styled.p`
    color: green;
    text-align: center;
    i {
        color: blue;
        font-style: normal;
    }
`;
