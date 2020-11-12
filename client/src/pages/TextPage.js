import React from 'react';
import TextContent from '../components/TextView/TextContent/TextContent';
import TextSettings from '../components/TextView/TextSettings/TextSettings';

const TextPage = () => {
  return (
    <div>
      <TextSettings/>
      <TextContent/>
    </div>
  );
};

export default TextPage;