import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import "../style/Content.css"
import FastFood from "../assets/fastfood.png"
import OrganicFood from "../assets/organicfood.png"

export const Content = () => {
  return (
    <Container>
        <h1 className='title'>The most picked</h1>
      <Row>
        
        <Col sm={6}>
            
            <div className='contenKiri'>
            <Row>
            <Col sm={6}>
                <img src={FastFood}></img>
            </Col>
            <Col sm={6}>
                <div className='textflowleft'>
                <h3>FastFood</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                <button className="shopNow">Shop Now</button>
                </div>
            </Col>
            </Row>
            </div>
        </Col>
        <Col sm={6}>
            <div className='contenKanan'>
            <Row>
            <Col sm={6}>
                <img src={OrganicFood}></img>
            </Col>
            <Col sm={6}>
                <div className='textflowright'>
                <h3>FastFood</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                <button  className="shopNow">Shop Now</button>
                </div>
            </Col>
            </Row>
            </div>
        
        </Col>
        
    </Row>
    </Container>
  )
}

export default Content;