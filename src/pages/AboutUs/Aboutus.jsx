import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import LinkTitle from '../../components/LinkTitle/LinkTitle'
// import Cards from '../../components/cards/Cards'
export class Aboutus extends Component {
    render() {
        return (
            <div className="container-fluid con1">
                <NavBar />
                
                
                <LinkTitle data="About Us" link='About Us' linkto='aboutus'/>
                <Footer />
                
            </div>
        )
    }
}

export default Aboutus
