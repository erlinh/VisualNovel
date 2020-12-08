import React, { useState } from 'react';
import TextContent from '../components/TextView/TextContent/TextContent';
import TextSettings from '../components/TextView/TextSettings/TextSettings';
import './TextPage.css';

const TextPage = () => {
  const [isReadingNavOpen, setIsReadingNavOpen] = useState(false);
  const [textSize, setTextSize] = useState('regular');
  const [bgColor, setBgColor] = useState('offwhite');
  const [font, setFont] = useState('serif');
  const [margins, setMargins] = useState('2');
  const [spacing, setSpacing] = useState('1');

  const toggleReadingNavOpen = () => setIsReadingNavOpen(!isReadingNavOpen);

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

  const handleSpacing = (newSpacing) => {
    setSpacing(newSpacing);
  };

  return (
    <div className={`reading-view bg-${bgColor}`}>
      <TextSettings isReadingNavOpen={isReadingNavOpen} passTextSize={handleTextSize} passBgColor={handleBgColor} passFont={handleFont} passMargins={handleMargins} passSpacing={handleSpacing} />
      <TextContent toggleReadingNavOpen={toggleReadingNavOpen} textSizeClass={textSize} bgColor={bgColor} fontClass={font} marginsClass={margins} spacingClass={spacing} />
    </div>
  );
};

export default TextPage;