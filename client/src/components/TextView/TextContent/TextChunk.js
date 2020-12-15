import React from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import './TextContent.css';

const TextChunk = ({content, toggleReadingNavOpen, textSizeClass, bgColorClass, fontClass, marginsClass, spacingClass, passChunkId}) => {
  const choiceFunction = (nextId) => {
    passChunkId(nextId);
    // window.scrollTo({left: 100})
    document.getElementById('text-start').scrollIntoView();
    document.getElementById('page-start').scrollIntoView();
  };

  return (
    <div className={`text-view-grid text-size-${textSizeClass} font-${fontClass} bg-${bgColorClass} spacing-${spacingClass}`} id="page-start" >

      <div className="text-grid" onClick={toggleReadingNavOpen}>
        <p className={`mb-0 text-columns margins-${marginsClass}`}>{content.text}</p>
        <div id="text-start"></div>
      </div>

      <div className="choice-screen">
        { content.choice.length === 1 ? (
          <>
            <h3>The End!</h3>
            <Link to="/"><Button className="choice-btn">Find more stories <i className="fas fa-home"></i></Button> </Link>
            {/* <Button className="choice-btn" onClick={() => choiceFunction(content.choice[0].chunkId)}>{content.choice[0].btnText}</Button> */}
          </>
        ) : (
          <>
            <h3>What would you like to do?</h3>
        
            <Button className="choice-btn" onClick={() => choiceFunction(content.choice[0].chunkId)}>{content.choice[0].btnText}</Button>
            <Button className="choice-btn" onClick={() => choiceFunction(content.choice[1].chunkId)}>{content.choice[1].btnText}</Button>
          </>
        )}
      </div>

    </div>
  );
};

export default TextChunk;
