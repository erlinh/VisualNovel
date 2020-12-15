import React from 'react';
import { Button } from 'reactstrap';
import './TextContent.css';

const TextChunk = ({content, toggleReadingNavOpen, textSizeClass, bgColorClass, fontClass, marginsClass, spacingClass, passChunkId}) => {
  const choiceFunction = (nextId) => {
    passChunkId(nextId);
    window.scrollTo({left: 100})
  };

  return (
    <div className={`text-view-grid text-size-${textSizeClass} font-${fontClass} bg-${bgColorClass} spacing-${spacingClass}`}>

      <div onClick={toggleReadingNavOpen} className="text-grid">
        <p className={`mb-0 text-columns margins-${marginsClass}`}>{content.text}</p>
      </div>

      <div className="choice-screen">
        { content.choice.length === 1 ? (
          <>
          <h3>The End!</h3>
        
          <Button className="choice-btn" onClick={() => choiceFunction(content.choice[0].chunkId)}>{content.choice[0].btnText}</Button>
          </>
        ) : (
          <>
        <h3>Choice buttons here</h3>
        
  <Button className="choice-btn" onClick={() => choiceFunction(content.choice[0].chunkId)}>{content.choice[0].btnText}</Button>
  <Button className="choice-btn" onClick={() => choiceFunction(content.choice[1].chunkId)}>{content.choice[1].btnText}</Button>
        </>
        )}
      </div>

    </div>
  );
};

export default TextChunk;
