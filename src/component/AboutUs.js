import React from 'react'
import "../style/AboutUs.css"
import {Container, Row, Col} from 'react-bootstrap'
import BgAboutUs from "../assets/about-us.png"

const AboutUs = () => {
  return (
    
    <Row >
      {/* <div className="aboutUs"> */}
      
        <Col sm={6}  className="aboutUs">
          <img src={BgAboutUs} className="aboutUsImg"></img>
        </Col>
        <Col sm={6} className="aboutUs">
          <div >
          <p id='about'>Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.</p>
          </div>
        </Col>
      {/* </div> */}
      </Row>
    
  )
}

export default AboutUs;
