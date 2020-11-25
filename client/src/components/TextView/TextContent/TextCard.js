import React from 'react';

const TextCard = ({id, content, textSizeClass, fontClass, marginsClass}) => {
  return (
    <div className={`storyPage text-size-${textSizeClass} font-${fontClass} margins-${marginsClass}`}>
      <p>Page {id}</p>
      <p>{content}</p>
    </div>
  );
};

export default TextCard;
