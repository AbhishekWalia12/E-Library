import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Picture3 from "../images/Picture3.png";
import logo from "../images/logo.png";
import Picture2 from "../images/Picture2.png";
import Picture1 from "../images/Picture1.png";
import Dropdown from './Dropdown';

const Header = () => {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const [activeImage, setActiveImage] = useState(null);

  // const toggleDropdown = (image) => {
  //   if (activeImage === image) {
  //     setDropdownOpen(false);
  //     setActiveImage(null);
  //   } else {
  //     setDropdownOpen(true);
  //     setActiveImage(image);
  //   }
  // };

  // const closeDropdown = () => {
  //   setDropdownOpen(false);
  //   setActiveImage(null);
  // };
  // const [openProfile, setOpenProfiles]= useState(false)

  const navbarStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: 1,
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={navbarStyle}>
        <Container>
          <NavLink to="/" className="navlink">
            <img src={logo} alt="Logo" />
            E-LIBRARY
          </NavLink>
          <Nav className="mr-auto">
            <Nav.Link>
              <img
                src={Picture2}
               
              />
            </Nav.Link>
            <Nav.Link>
              <img
                src={Picture1}
                
              />
            </Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
