import React from 'react';
import {Link} from 'react-router-dom';

const ButtomFooter =()=>{
  return(
    <div className="row justify-content-between font-size-2">
      <div className="col-12 col-md-6">
        <p className="text-muted footer__p">Copyright © 2020 Storyfics Publishing. All rights reserved.</p>
      </div>
      <div className="col-12 col-md-auto mt-8 mt-md-0 footer__mob">
        <p className="text-muted"><span><Link to="#">Privacy Policy</Link></span>
          <span className="mx-2">|</span>
          <span><Link to="#">Terms</Link></span>
          <span className="mx-2">|</span>
          <span><Link to="#">Cookie Notice</Link></span>
          <span className="mx-2">|</span>
          <span><Link class="analytics-track-link" data-analytics-destination="status" to="#">Status</Link></span>
        </p>
      </div>
    </div>
  );
};
export default ButtomFooter;