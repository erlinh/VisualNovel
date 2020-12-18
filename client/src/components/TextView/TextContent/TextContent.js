import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../../axios'; 
import TextChunk from './TextChunk';
import './TextContent.css';

const TextContent = ({toggleReadingNavOpen, textSizeClass, bgColor, fontClass, marginsClass, spacingClass}) => {
 
  const [allChunks, setAllChunks]= useState([]);
  const [currentChunkId, setCurrentChunkId] = useState(0);

    useEffect(()=>{
    async function fetchContent(){
      try {
        const {data} = await instance.get('/storyline');
        console.log(typeof(data.pullStorylines));
        console.log(data.pullStorylines[0].content);
        setAllChunks(data.pullStorylines[0].content);
        console.log(allChunks);
        
      } catch (err) {
        console.log('There is an error to get content', err);
      }
    }
    fetchContent();
    // console.log(contents)
  },
   []
  );

  const passChunkId = (nextChunk) =>{
    console.log('Hello');
    setCurrentChunkId(nextChunk);
  };

  return (
    <div className="textContentContainer">
      { allChunks.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <TextChunk content={allChunks[currentChunkId]} toggleReadingNavOpen={toggleReadingNavOpen} textSizeClass={textSizeClass} bgColorClass={bgColor} fontClass={fontClass} marginsClass={marginsClass} spacingClass={spacingClass} passChunkId={passChunkId}/>
      
      )}
    </div>
  );
};

export default TextContent;
