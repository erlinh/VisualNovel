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
import './Navbar.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top" style={{backgroundColor:'black'}} light expand="md">
        <Link className="text-light navbar-brand pl-5 navlogo__mob " to="/">Storyfics</Link>
        <NavbarToggler style={{backgroundColor:'#1e272e'}} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="text-light nav-link" to="/"><i className="fas fa-home"></i></Link>
            </NavItem>
            <NavItem>
              <Link className="text-light nav-link" to="/">My Library</Link>
            </NavItem>
            <NavItem>
              <Link className="text-light nav-link" to="/search">Search</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
