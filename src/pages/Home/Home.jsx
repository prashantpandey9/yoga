import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import {Image, Row, Col }from 'react-bootstrap'
import Cards from '../../components/cards/Cards'
import './Home.scss'
import car from './faceshield.png'
import topic1 from './topic1.png'
import topic2 from './topic2.png'
import topic3 from './topic3.png'
import topic4 from './topic4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export class Home extends Component {
    render() {
        return (

            <div>
                <div className="container-fluid con1">
                    <NavBar />
                    
                    <Row className="section1">
                        <Col xs={12} md={6}>
                        <h1 className="heading">OnLine Learning Platform</h1>
                        <p className="para1">Build Skills with courses we provide here.</p>
                        
                        </Col>
                        <Col xs={12} md={6}>
                        <Image src={car} className="imageside"/>
                        </Col>
                    </Row>
                </div>
                <div className="container" style={{ padding: '0' }}>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col">
                            <div className="card card1 mx-auto">
                                
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col">
                        <div className="card card1 mx-auto"> 
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col">
                        <div className="card card1 mx-auto">
                                
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container section2" style={{ padding: '0' }}>
                    <h1 className="heading2">
                    Our featured courses
                    </h1><br />
                    <Cards />
                    <br /><br />
                    <h1 className="heading2">
                    Explore top subjects
                    </h1>
                    <br />
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={topic1} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Music</h5>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={topic2} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Dance</h5>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={topic3} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Programing</h5>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={topic4} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Gamming</h5>
                        </div> 
                    </div>
                </div>
                <br/>
                <br />
                <br/>
                <div class="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h1 className="left-heading">Our Mission</h1>
                            <p classname="para-left">-To keep the child inside everyone alive</p>
                            <p classname="para-left">-To build a community of potential gamers, singers, dancers, sports persons</p>
                            
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={topic1} className="imgtopic" alt=""/>
                        </div>
                    </div>    
                </div>
                
                <br /><br />
                <div className="container-fluid con1">
                    <Footer />
                    <FontAwesomeIcon icon={['fab', 'apple']} />
                </div>
                
                
            </div>
        )
    }
}

export default Home
