import React from 'react';

const TextCard = ({id, content}) => {
  return (
    <div className="storyPage">
      <p>Page {id}</p>
      <p>{content}</p>
    </div>
  );
};

export default TextCard;
