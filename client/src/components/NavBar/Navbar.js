import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top" style={{backgroundColor:"black"}} light expand="md">
        <NavbarBrand className="text-light pl-5" href="/">StoryFics</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="text-light" href="#">Titles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="#">My Library</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="text-light pr-4">Redeem</NavbarText>
           |
          <NavbarText className="text-light pl-4 ">Sign In</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;