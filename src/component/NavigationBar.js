import React from 'react'
import "../style/NavigationBar.css"
import {Navbar, Nav, Container, NavDropdown, Form, Button} from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" >
    <Container className='nav'>
      <Navbar.Brand href="#home" >LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="">
          <Nav.Link href="#titleproduk">Product</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Food</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Drink
            </NavDropdown.Item>
          </NavDropdown>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 cari"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar;
