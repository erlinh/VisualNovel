import React from 'react';
import TextContent from '../components/TextView/TextContent/TextContent';
import TextSettings from '../components/TextView/TextSettings/TextSettings';
import './TextPage.css';

const TextPage = () => {
  return (
    <div className="textPage">
      <TextSettings/>
      <TextContent />
    </div>
  );
};

export default TextPage;