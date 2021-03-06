import React, { useState, useContext, useEffect} from 'react';
import firebaseApp from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../firebase/authContext';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import './Navbar.css';
 

const NavBar = (props) => {
  const { userID, updateUserID } = useContext(AuthContext);
  //console.log(userID);
 
  const logOut = () => {
    firebaseApp.auth().signOut()
      .then(() => {
        console.log('signed out!');
        window.localStorage.removeItem('userinfo');
        updateUserID(null);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
      
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top navbar__top" light expand="md">
        <Link className="navbar-brand navbar__logo" to="/">🆂🆃🅾🆁🆈🅵🅸🅲🆂</Link>
        <NavbarToggler style={{backgroundColor:'#094b79'}} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!userID ? (
              // not logged-in
              <>
                <NavItem>
                  <Link className="text-light nav-link" to="/search">Search</Link>
                </NavItem>
                <NavItem>
                  <Link className="text-light nav-link" to="/register">Register</Link>
                </NavItem>
                <NavItem>
                  <Link className="text-light nav-link" to="/login">Log In</Link>
                </NavItem>
              </>
            ) : (
              // logged-in
              <>
                <NavItem>
                  <Link className="text-light nav-link" to="/"><i className="fas fa-home"></i></Link>
                </NavItem>
                <NavItem>
                  <Link className="text-light nav-link" to="/">My Library</Link>
                </NavItem>
                <NavItem>
                  <Link className="text-light nav-link" to="/search">Search</Link>
                </NavItem>
                <NavItem>
                  <Link className="text-light nav-link" to="/login" onClick={logOut}>Log Out</Link>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
