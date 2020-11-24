import React, { useState } from 'react';
import TextContent from '../components/TextView/TextContent/TextContent';
import TextSettings from '../components/TextView/TextSettings/TextSettings';
import './TextPage.css';

const TextPage = () => {
  const [textSize, setTextSize] = useState('regular');
  const handleTextSize = (newSize) => {
    setTextSize(newSize);
    console.log('newSize', newSize);
    console.log('textSize', textSize);
  };

  return (
    <div className="textPage">
      <TextSettings passTextSize={handleTextSize}/>
      <TextContent textSizeClass={textSize}/>
    </div>
  );
};

export default TextPage;