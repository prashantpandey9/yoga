import React from 'react';
import {Image, Row, Col }from 'react-bootstrap'
import car from '../../assets/faceshield.png'

const Jumbo = () => {
   return (
    <Row className="section1">
      <Col xs={12} md={6}>
         <h1 className="heading">OnLine Learning Platform</h1>
         <p className="para1">Build Skills with courses we provide here.</p>
      
      </Col>
      <Col xs={12} md={6}>
         <Image src={car} className="imageside"/>
      </Col>
    </Row>
   );
}
export default Jumbo;