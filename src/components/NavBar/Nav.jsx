import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Tienda Online</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
              <Nav.Link as={Link} to="/About" >Nosotros</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">Camperas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">Remeras</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">Calzado</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">Accesorios</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
