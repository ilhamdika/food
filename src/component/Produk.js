import React from 'react'
import "../style/Produk.css"
import {Container, Row, Col, Card, Button } from 'react-bootstrap'
import FastFood from "../assets/fastfood.png"
import Pasta from "../assets/pasta.jpg"
import Burger from "../assets/burgerproduk.jpg"
import Pizza from "../assets/pizza.jpg"
import Noodle from "../assets/noodle.jpg"
import NavProduk from './NavProduk'
import allProduct from './allProduct'



const Produk = () => {
  return (
    <Container className='produk'>
        <h1 id='titleproduk'>Product</h1>
        <NavProduk />
      <Row >
                <Col sm={3} xs={6}>
                    
                <Card style={{ width: '13rem' }} id='cardtry'>
            <Card.Img variant="top" src={Burger} id='cardsize' />
            <Card.Body>
                <Card.Title>Burger</Card.Title>
                <Card.Text>
                Some quick example text to build on the card t.
                </Card.Text>
                <h4  className="harga">$3</h4>
               <button id='buyeat'>Eat</button>
            </Card.Body>
            </Card>
        </Col>
        <Col sm={3} xs={6}>
                   
                <Card style={{ width: '13rem' }} id='cardtry'>
            <Card.Img variant="top" src={Pasta} id='cardsize' />
            <Card.Body>
                <Card.Title>Pasta</Card.Title>
                <Card.Text>
                Some quick example text to build on the card t.
                </Card.Text>
                <h4 className="harga">$3</h4>
               <button id='buyeat'>Eat</button>
            </Card.Body>
            </Card>
            

        </Col>
        <Col sm={3} xs={6}>

        <Card style={{ width: '13rem' }} id='cardtry'>
            <Card.Img variant="top" src={Noodle} id='cardsize'/>
            <Card.Body>
                <Card.Title>Noodle</Card.Title>
                <Card.Text>
                Some quick example text to build on the card t.
                </Card.Text>
                <h4 className="harga">$3</h4>
               <button id='buyeat'>Eat</button>
            </Card.Body>
            </Card>

        </Col>
        <Col sm={3} xs={6}>

        <Card style={{ width: '13rem' }} id='cardtry'>
            <Card.Img variant="top" src={Pizza} id='cardsize' />
            <Card.Body>
                <Card.Title>Pizza</Card.Title>
                <Card.Text>
                Some quick example text to build on the card t.
                </Card.Text>
                <h4 className="harga">$3</h4>
               <button id='buyeat'>Eat</button>
            </Card.Body>
            </Card>

        </Col>
        
        <Col sm={3} xs={6}>
                    
                <Card style={{ width: '13rem' }} id='cardtry'>
            <Card.Img variant="top" src={Burger} id='cardsize' />
            <Card.Body>
                <Card.Title>Burger</Card.Title>
                <Card.Text>
                Some quick example text to build on the card t.
                </Card.Text>
                <h4  className="harga">$3</h4>
               <button id='buyeat'>Eat</button>
            </Card.Body>
            </Card>
        </Col>
        <Col sm={3} xs={6}>
                   
                <Card style={{ width: '13rem' }} id='cardtry'>
            <Card.Img variant="top" src={Pasta} id='cardsize' />
            <Card.Body>
                <Card.Title>Pasta</Card.Title>
                <Card.Text>
                Some quick example text to build on the card t.
                </Card.Text>
                <h4 className="harga">$3</h4>
               <button id='buyeat'>Eat</button>
            </Card.Body>
            </Card>
            

        </Col>
        <Col sm={3} xs={6}>

        <Card style={{ width: '13rem' }} id='cardtry'>
            <Card.Img variant="top" src={Noodle} id='cardsize'/>
            <Card.Body>
                <Card.Title>Noodle</Card.Title>
                <Card.Text>
                Some quick example text to build on the card t.
                </Card.Text>
                <h4 className="harga">$3</h4>
               <button id='buyeat'>Eat</button>
            </Card.Body>
            </Card>

        </Col>
        <Col sm={3} xs={6}>

        <Card style={{ width: '13rem' }} id='cardtry'>
            <Card.Img variant="top" src={Pizza} id='cardsize' />
            <Card.Body>
                <Card.Title>Pizza</Card.Title>
                <Card.Text>
                Some quick example text to build on the card t.
                </Card.Text>
                <h4 className="harga">$3</h4>
               <button id='buyeat'>Eat</button>
            </Card.Body>
            </Card>

        </Col>


     </Row>
            <div className="right">
            <Button href={allProduct}>Show More</Button>
            </div>
    </Container>
  )
}


export default Produk