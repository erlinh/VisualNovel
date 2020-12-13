import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../../axios'; 
import TextChunk from './TextChunk';
import './TextContent.css';

const TextContent = ({toggleReadingNavOpen, textSizeClass, bgColor, fontClass, marginsClass, spacingClass}) => {
 
  // const [allChunks, setAllChunks]= useState({
  //   pullStoryLines: []
  // });
  const [contents, setContents] = useState([]);
  const [currentChunkId, setCurrentChunkId] = useState(0);

  const slug = useParams().slug;

  useEffect(()=>{
    async function fetchContent(){
      try {
        // const {data} = await instance.get('/storyline');
        // console.log(data);
        // setAllChunks(data);
        // console.log(contents);
        
        const {data} = await instance.get(`/stories/${slug}/content`);
        setContents(data.content);

      } catch (err) {
        console.log('There is an error to get content', err);
      }
    }
    fetchContent();
  },
  [slug]
  // []
  );

  return (
    <div className="textContentContainer">
      { contents.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
          <TextChunk content={contents[currentChunkId].text} toggleReadingNavOpen={toggleReadingNavOpen} textSizeClass={textSizeClass} bgColorClass={bgColor} fontClass={fontClass} marginsClass={marginsClass} spacingClass={spacingClass} />
      )}
    </div>
  );
};

export default TextContent;
