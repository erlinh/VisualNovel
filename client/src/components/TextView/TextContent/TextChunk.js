import React from 'react';
import './TextContent.css';

const TextChunk = ({content, toggleReadingNavOpen, textSizeClass, bgColorClass, fontClass, marginsClass, spacingClass}) => {
  return (
    <div onClick={toggleReadingNavOpen} className={`text-view-grid text-size-${textSizeClass} font-${fontClass} bg-${bgColorClass} margins-${marginsClass} spacing-${spacingClass}`}>

      <div className="text-grid">
        <p className="mb-0 text-columns">{content}</p>
      </div>

      <div className="choice-screen">
        <h3>Choice buttons here</h3>
      </div>

    </div>
  );
};

export default TextChunk;
