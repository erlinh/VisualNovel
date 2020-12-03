import React, { useState, useContext } from 'react';
import firebaseApp from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../firebase/authContext';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const { user } = useContext(AuthContext);
  //console.log(user);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top" style={{backgroundColor:'black'}} light expand="md">
        <Link className="text-light navbar-brand pl-5" to="/">Storyfics</Link>
        <NavbarToggler style={{backgroundColor:'#1e272e'}} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!user ? (
              // not logged-in
              <NavItem>
              <Link className="text-light nav-link" to="/login">Log In</Link>
              </NavItem>
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
                  <Link className="text-light nav-link" onClick={() => firebaseApp.auth().signOut()}>Log Out</Link>
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
