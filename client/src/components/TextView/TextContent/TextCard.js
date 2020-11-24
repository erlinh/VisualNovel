import React from 'react';

const TextCard = ({id, content, textSizeClass}) => {
  return (
    <div className={`storyPage text-size-${textSizeClass}`}>
      <p>Page {id}</p>
      <p>{content}</p>
    </div>
  );
};

export default TextCard;
