import React from 'react';
import { Button } from 'reactstrap';
import './TextContent.css';

const TextChunk = ({content, toggleReadingNavOpen, textSizeClass, bgColorClass, fontClass, marginsClass, spacingClass}) => {
  return (
    <div onClick={toggleReadingNavOpen} className={`text-view-grid text-size-${textSizeClass} font-${fontClass} bg-${bgColorClass} spacing-${spacingClass}`}>

      <div className="text-grid">
        <p className={`mb-0 text-columns margins-${marginsClass}`}>{content}</p>
      </div>

      <div className="choice-screen">
        <h3>Choice buttons here</h3>
  <Button className="choice-btn">Choice button 1</Button>
  <Button className="choice-btn">Choice button 2</Button>
  
      </div>

    </div>
  );
};

export default TextChunk;
