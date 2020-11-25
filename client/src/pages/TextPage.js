import React, { useState } from 'react';
import TextContent from '../components/TextView/TextContent/TextContent';
import TextSettings from '../components/TextView/TextSettings/TextSettings';
import './TextPage.css';

const TextPage = () => {
  const [textSize, setTextSize] = useState('regular');
  const [bgColor, setBgColor] = useState('offwhite');
  const [font, setFont] = useState('serif');

  const handleTextSize = (newSize) => {
    setTextSize(newSize);
  };

  const handleBgColor = (newColor) => {
    setBgColor(newColor);
  };

  const handleFont = (newFont) => {
    setFont(newFont);
  };

  return (
    <div className={`textPage bg-${bgColor}`}>
      <TextSettings passTextSize={handleTextSize} passBgColor={handleBgColor} passFont={handleFont} />
      <TextContent textSizeClass={textSize} fontClass={font} />
    </div>
  );
};

export default TextPage;