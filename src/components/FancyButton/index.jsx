import React from 'react';
import { StyledFancyButton } from './style.js';
import { useNavigate } from 'react-router-dom';

export default function FancyButton(props) {
  const navigate = useNavigate();
  const {
    backgroundColor,
    navigationLink,
    title,
    textShadowColor,
    width,
    maxWidth,
    fontSize,
    height
  } = props;
  return (
    <StyledFancyButton
      backgroundColor={ backgroundColor }
      textShadowColor={ textShadowColor }
      width={ width }
      maxWidth={ maxWidth }
      height={ height }
      fontSize={ fontSize }
      onClick={() => navigate(navigationLink)}
    >
      {title}
    </StyledFancyButton>
  )
}
