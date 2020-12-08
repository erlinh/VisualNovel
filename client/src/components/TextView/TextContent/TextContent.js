import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import instance from '../../../axios'; 
import TextChunk from './TextChunk';
import './TextContent.css';

const TextContent = ({toggleReadingNavOpen, textSizeClass, bgColor, fontClass, marginsClass, spacingClass}) => {
 
  const [contents, setContents] = useState([]);
  const [currentChunkId, setCurrentChunkId] = useState(0);

  const slug = useParams().slug;

  useEffect(()=>{
    async function fetchContent(){
      try {
        const {data} = await instance.get(`/stories/${slug}/content`);
        setContents(data.content);
      } catch (err) {
        console.log('There is an error to get content', err);
      }
    }
    fetchContent();
  },[slug]);

  return (
    <div className="textContentContainer">
      { contents.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <div className="text-view-grid">
          <TextChunk content={contents[currentChunkId].text} toggleReadingNavOpen={toggleReadingNavOpen} textSizeClass={textSizeClass} bgColorClass={bgColor} fontClass={fontClass} marginsClass={marginsClass} spacingClass={spacingClass} />
          <div className="choice-screen">
            <h3>Choice buttons here</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextContent;


/* const TextContent = ({toggleReadingNavOpen, textSizeClass, fontClass, marginsClass, spacingClass}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [contents, setContents]=useState([]);
  const slug= useParams().slug;

  useEffect(()=>{
    async function fetchContent(){
      try {
        const {data} = await instance.get(`/stories/${slug}/content`);
        setContents(data.content);
      } catch (err) {
        console.log('There is an error to get content', err);
      }
    }
    fetchContent();
  },[slug]);

  const pagesFromDatabase = contents.map((page) => (
    <TextCard key={page.id} content={page.text} toggleReadingNavOpen={toggleReadingNavOpen} textSizeClass={textSizeClass} fontClass={fontClass} marginsClass={marginsClass} spacingClass={spacingClass} />
  ));

  return (
    <div className="textContentContainer">
   
      <Carousel responsive={responsive} removeArrowOnDeviceType={['mobile']}>
        {pagesFromDatabase}
      </Carousel>
    </div>
  );
};

export default TextContent;
 */