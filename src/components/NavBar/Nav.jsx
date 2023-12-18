import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";



const NavBar = () => {
  const {cartItems} = useContext(CartContext);

  return (
    <div>
      <Navbar className="navbar"  expand="sm" >
        <Container>
          <Navbar.Brand as={Link} to="/">Tienda Online</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav navbar-shop">
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
            />
            <button className="search-button">Buscar</button>
          </Form>
          <Nav.Link as={Link} className="cart-icon" to="/cart"><BsCart3/><span>{cartItems()}</span></Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
