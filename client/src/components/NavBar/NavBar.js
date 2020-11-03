import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import SearchBox from '../SearchBox/SearchBox';

export default function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand href="/">Storyfics</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <SearchBox searchInputOnChange={props.searchInputOnChange} searchPhrase={props.searchPhrase} triggerSearch={props.triggerSearch}/>
            </NavItem>
            <NavItem>
              <NavLink href="/">Log In</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}