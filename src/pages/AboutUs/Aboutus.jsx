import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import LinkTitle from '../../components/LinkTitle/LinkTitle'
import Subjects from '../../components/Subjects/Subjects'
import Cards from '../../components/cards/Cards'

export class Aboutus extends Component {
    render() {
        return (
            <div className="container-fluid con1">
                <NavBar />
                
                
                <LinkTitle data="About Us" linkto='aboutus'/>
                <div className="container section2" style={{ padding: '0' }}>
                <h1 className="heading2">
                    Explore Our Top Subjects
                    </h1>
                    <br/>
                    <Subjects />
                    <br />
                    <br />
                    <br />
                <h1 className="heading2">
                    Our Featured Courses
                    </h1>
                    <br />
                    <Cards />
                    <br />

                    
                </div>
                
                
                <Footer />
                
            </div>
        )
    }
}

export default Aboutus
