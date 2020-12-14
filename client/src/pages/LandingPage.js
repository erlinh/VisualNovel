import React,{useContext} from 'react';
import BrowsingGrid from '../components/BrowsingGrid/BrowsingGrid';
import './LandingPage.css';
import FooterGrid from '../components/Footer/FooterGrid';
import NavBar from '../components/NavBar/NavBar';
import LoginAlert from '../components/LoginAlert';
import { AuthContext } from '../firebase/authContext';

export default function LandingPage() {
  const {userID} = useContext(AuthContext);
  
  return (
    <>
      <NavBar />
      {userID ?( <div className="mt-5">
        <LoginAlert header="Welcome Story Reader!"/>
      </div>): null}  
      <div style={{minHeight:'100vh'}} className="container col-lg-11">
        <BrowsingGrid />
        <div className="LandingPage__hr">
          <hr />
        </div>
      </div>
      <div className="col-lg-12">
        <FooterGrid/>
      </div>
    </>
  );
}
