import React from 'react';
import { Button } from './style.js';

export default function FancyButton({ backgroundColor, title, textShadowColor, width, maxWidth, fontSize, height }) {
  return (
    <Button
      backgroundColor={ backgroundColor }
      textShadowColor={ textShadowColor }
      width={ width }
      maxWidth={ maxWidth }
      height={ height }
      fontSize={ fontSize }
    >
      {title}
    </Button>
  )
}
