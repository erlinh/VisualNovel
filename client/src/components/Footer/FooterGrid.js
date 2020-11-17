import React from 'react';
import ButtomFooter from './Buttom/ButtomFooter';
import Connect from './Connect/Connect';
import Learn from './Learn/Learn';
import SocialMedia from './SocialMedia/SocialMedia';
import StoryficsBox from './StoryficsBox/StoryficsBox';

const FooterGrid=()=>{
  return(
    <>
      <div className="col-lg-12 col-sm-12 my-3 py-5" style={{backgroundColor:'#bdc3c7', color:'black'}}>
        <div className="row col-lg-12 justify-content-around">
          <StoryficsBox/>
          <Learn/>
          <Connect/>
          <SocialMedia/>
        </div>
      </div>
      <div className="bg-light">
        <hr />
      </div>
      <ButtomFooter/>
    </>
  );
  
};

export default FooterGrid;
