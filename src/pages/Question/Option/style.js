import styled from 'styled-components';

export const Text = styled.button`
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
`;

export default Text;
