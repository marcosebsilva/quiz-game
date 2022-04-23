import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './style';

export default function PageTitle({ normalText, highlightedText }) {
  return (
    <StyledTitle>
      {normalText}
      <i>{highlightedText}</i>
    </StyledTitle>
  );
}

PageTitle.propTypes = {
  normalText: PropTypes.string,
  highlightedText: PropTypes.string,
}.isRequired;
