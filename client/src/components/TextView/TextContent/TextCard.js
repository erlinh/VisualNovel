import React from 'react';

const TextCard = ({id, content, textSizeClass, fontClass}) => {
  return (
    <div className={`storyPage text-size-${textSizeClass} font-${fontClass}`}>
      <p>Page {id}</p>
      <p>{content}</p>
    </div>
  );
};

export default TextCard;
