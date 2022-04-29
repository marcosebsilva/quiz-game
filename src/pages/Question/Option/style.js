import styled from 'styled-components';
import device from '../../../utils/dict/screenSize.json';

export const StyledButton = styled.button`
    color: white;
    // not sure if this is the best way to do it
    background-color: ${(props) => {
    if (props.isLocked) {
      return props.isRight ? 'green' : 'red';
    }
    return 'blue';
  }};
    width: 200px;
    border-radius: 2px;
    padding: 10px;
    pointer-events: ${(props) => (props.isLocked ? 'none' : 'auto')};
    transition: 200ms ease-in-out;
    @media screen and (min-width: ${device.desktop}){
      width: 100%;
    }
`;

export default StyledButton;
