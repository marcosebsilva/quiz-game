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
    children,
    disabled,
  } = props;
  const handleClick = () => {
    if (clickCallback) {
      clickCallback();
    }
    navigate(navigationLink);
  };

  return (
    <StyledFancyButton
    // not sure if this extraStyle is the best approach
      extraStyle={extraStyle}
      textShadowColor={textShadowColor}
      onClick={handleClick}
      disabled={disabled}
    >
      { children }
    </StyledFancyButton>
  );
}

FancyButton.propTypes = {
  extraStyle: PropTypes.objectOf(String),
  textShadowColor: PropTypes.string,
  clickCallback: PropTypes.func,
  navigationLink: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
}.isRequired;
