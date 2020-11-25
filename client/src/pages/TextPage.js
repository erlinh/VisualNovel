import React, { useState } from 'react';
import TextContent from '../components/TextView/TextContent/TextContent';
import TextSettings from '../components/TextView/TextSettings/TextSettings';
import './TextPage.css';

const TextPage = () => {
  const [textSize, setTextSize] = useState('regular');
  const [bgColor, setBgColor] = useState('offwhite');
  const [font, setFont] = useState('serif');
  const [margins, setMargins] = useState('2');

  const handleTextSize = (newSize) => {
    setTextSize(newSize);
  };

  const handleBgColor = (newColor) => {
    setBgColor(newColor);
  };

  const handleFont = (newFont) => {
    setFont(newFont);
  };

  const handleMargins = (newMargins) => {
    setMargins(newMargins);
  };

  return (
    <div className={`textPage bg-${bgColor}`}>
      <TextSettings passTextSize={handleTextSize} passBgColor={handleBgColor} passFont={handleFont} passMargins={handleMargins}/>
      <TextContent textSizeClass={textSize} fontClass={font} marginsClass={margins} />
    </div>
  );
};

export default TextPage;