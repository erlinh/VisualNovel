import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top" style={{backgroundColor:'black'}} light expand="md">
        <Link className="text-light navbar-brand pl-5" to="/">StoryFics</Link>
        <NavbarToggler style={{backgroundColor:'#1e272e'}} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="text-light nav-link" to="/">Titles</Link>
            </NavItem>
            <NavItem>
              <Link className="text-light nav-link" to="/">My Library</Link>
            </NavItem>
            <NavItem>
              <Link className="text-light nav-link" to="/search">Search</Link>
            </NavItem>
          </Nav>
          <NavbarText className="text-light pr-4">Redeem</NavbarText>
           |
          <NavbarText className="text-light pl-4 ">Sign In</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
