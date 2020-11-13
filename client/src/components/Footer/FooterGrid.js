import React from 'react';
import ButtomFooter from './Buttom/ButtomFooter';
import Connect from './Connect/Connect';
import Learn from './Learn/Learn';
import StoryficsBox from './StoryficsBox/StoryficsBox';

const FooterGrid=()=>{
  return(
    <>
      <div className="col-lg-12 col-sm-12 my-5 py-5" style={{backgroundColor:'#2d3436', color:'white'}}>
        <div className="col-lg-10 d-flex justify-content-around">
          <StoryficsBox/>
          <Learn/>
          <Connect/>
        </div>
      </div>
      <ButtomFooter/>
    </>
  );
  
};

export default FooterGrid;
