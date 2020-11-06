import React from 'react';

const ButtonInfo =(props)=>{
  return (
    <button type="button" className="btn btn-info mr-2">Info</button>
  );
};

const ButtonReadMore =()=>{
  return (
    <button type="button" className="btn btn-danger mr-2">Read More</button>
  );
};

const ButtonBuy =()=>{
  return (
    <button type="button" className="btn btn-warning">Buy</button>
  );
};

export{
  ButtonInfo,
  ButtonReadMore,
  ButtonBuy
};