import React from 'react';
import './TextContent.css';

const TextChunk = ({id, content, toggleReadingNavOpen, textSizeClass, bgColorClass, fontClass, marginsClass, spacingClass}) => {
  return (
    <div onClick={toggleReadingNavOpen} className={`text-columns text-size-${textSizeClass} font-${fontClass} bg-${bgColorClass} margins-${marginsClass} spacing-${spacingClass}`}>
      {/* <p>Page {id}</p> */}
      <p className="mb-0">{content}</p>
    </div>
  );
};

export default TextChunk;
