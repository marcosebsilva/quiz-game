import { useNavigate } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import StyledFancyButton from './style';

export default function FancyButton(props) {
  const navigate = useNavigate();
  const {
    extraStyle,
    textShadowColor,
    clickCallback,
    navigationLink,
    title,
  } = props;

  const handleClick = () => {
    clickCallback();
    navigate(navigationLink);
  };

  return (
    <StyledFancyButton
      extraStyle={extraStyle}
      textShadowColor={textShadowColor}
      onClick={handleClick}
    >
      { title }
    </StyledFancyButton>
  );
}

FancyButton.propTypes = {
  extraStyle: PropTypes.objectOf(String),
  textShadowColor: PropTypes.string,
  clickCallback: PropTypes.func,
  navigationLink: PropTypes.string,
  title: PropTypes.string,
}.isRequired;
