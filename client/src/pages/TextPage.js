import React, { useState } from 'react';
import TextContent from '../components/TextView/TextContent/TextContent';
import TextSettings from '../components/TextView/TextSettings/TextSettings';
import './TextPage.css';

const TextPage = () => {
  const [textSize, setTextSize] = useState('regular');
  const [bgColor, setBgColor] = useState('offwhite');

  const handleTextSize = (newSize) => {
    setTextSize(newSize);
  };

  const handleBgColor = (newColor) => {
    setBgColor(newColor);
  };

  return (
    <div className="textPage">
      <TextSettings passTextSize={handleTextSize} passBgColor={handleBgColor}/>
      <TextContent textSizeClass={textSize} bgColorClass={bgColor}/>
    </div>
  );
};

export default TextPage;