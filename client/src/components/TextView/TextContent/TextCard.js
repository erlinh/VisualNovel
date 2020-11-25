import React from 'react';

const TextCard = ({id, content, textSizeClass, bgColorClass}) => {
  return (
    <div className={`storyPage text-size-${textSizeClass} bg-${bgColorClass}`}>
      <p>Page {id}</p>
      <p>{content}</p>
    </div>
  );
};

export default TextCard;
