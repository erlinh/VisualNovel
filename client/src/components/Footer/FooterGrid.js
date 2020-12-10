import React from 'react';
import BottomFooter from './Bottom/BottomFooter';
import Connect from './Connect/Connect';
import Learn from './Learn/Learn';
import SocialMedia from './SocialMedia/SocialMedia';
import StoryficsBox from './StoryficsBox/StoryficsBox';
import './Footer.css'

const FooterGrid=()=>{
  return(
    <>
      <div className="col-lg-12 col-sm-12 my-3 py-5 footer__grid footer__mob" style={{color:'white'}}>
        <div className="row col-lg-12 justify-content-around">
          <StoryficsBox/>
          <Learn/>
          <Connect/>
          <SocialMedia/>
        </div>
      </div>
      <div className="bg-light">
        <hr className="footer__mob" />
      </div>
      <BottomFooter/>
    </>
  );
  
};

export default FooterGrid;
