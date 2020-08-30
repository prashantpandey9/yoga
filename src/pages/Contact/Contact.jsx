import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import LinkTitle from '../../components/LinkTitle/LinkTitle'
import Footer from '../../components/Footer/Footer'
import Contactform from '../../components/Contactform/Contactform'
export class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LinkTitle data='Contact Us' linkto='contactus'/>
                <Contactform />
                <Footer />
            </div>
        )
    }
}

export default Contact
