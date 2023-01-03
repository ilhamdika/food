import React from 'react'
import {Nav, Form, Button} from 'react-bootstrap'
import "../style/NavProduk.css"

const NavProduk = () => {
  return (
    <Nav className="justify-content-center NavProduk" activeKey="/home">
        <Nav.Item >
          <Nav.Link href="/home" id='textNav'>All Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" id='textNav'>FastFood</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" id='textNav'>Natural Food</Nav.Link>
        </Nav.Item>
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
  )
}

export default NavProduk
