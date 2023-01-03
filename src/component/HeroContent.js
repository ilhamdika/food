import React from 'react'
import "../style/HeroContent.css"
import {Container, Row, Col} from 'react-bootstrap'
import HeroGambar from "../assets/img1.png"

const HeroContent = () => {
  return (
    <Container>
      <Row>
        <Col sm={7}>
            <div className='heroKiri'>
                <h1><span>Will</span> Give You</h1>
                <h1><span>Satisfaction </span>In Food</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>Shop now</button>
            </div>
            
        </Col>
        <Col sm={5}>
            <div className='heroKanan'>
                <img src={HeroGambar}></img>
            </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroContent;
