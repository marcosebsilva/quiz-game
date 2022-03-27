import styled from 'styled-components';

const getBorderProperty = ({ borderChecked, expertise }) => {
    // this probably should not be hardcoded
    const borderProperties = {
        checked: { color: "#FD28C1", width: "3px" },
        expertise: { color: "#D7DA40", width: "3px" },
        default: { color: "black", width: "1px" }
    }
    if (expertise) return borderProperties.expertise;
    return borderChecked ? borderProperties.checked : borderProperties.default;
}

export const StyledTheme = styled.button`
    height: 30px;
    width: 30%;
    font-size: 0.8rem;
    text-align: center;
    background-color: white;
    display: grid;
    transition: 100ms;
    place-items: center;
    border-width: ${(props) => getBorderProperty(props).width};
    border-style: solid;
    border-color: ${(props) => getBorderProperty(props).color};

    border-radius: 5px;
    :hover {
        border: 3px solid #FD28C1;
    }
`