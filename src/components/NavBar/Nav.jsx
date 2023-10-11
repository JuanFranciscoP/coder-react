import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div>
      <Navbar  expand="sm" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">Tienda Online</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
              <Nav.Link as={Link} to="/About" >Nosotros</Nav.Link>
              <NavDropdown title="Categorias" className="dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/product/category/electronics">Electronica</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product/category/jewelery">Joyas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product/category/men's clothing">Ropa Masculina</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product/category/women's clothing">Ropa Femenina</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
