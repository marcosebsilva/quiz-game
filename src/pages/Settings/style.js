import styled from 'styled-components';

export const StyledSettingsWrapper = styled.div`
    width: 350px;
    position: relative;
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > * {
        margin-bottom: 1.2rem;
    }
    @media screen and (min-height: 660px) and (max-width: 500px){
        margin-top: 35vh;
        margin-bottom: 5vh;
        /* thix fix a bug of settings div overlaping the title. */
    }
`;
export const StyledThemesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
`;

export const StyledHintWrapper = styled.div`
    p {
        font-size: 0.9rem;
        font-weight: 250;
    }
`;
