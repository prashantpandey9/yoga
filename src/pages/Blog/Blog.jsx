import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import LinkTitle from '../../components/LinkTitle/LinkTitle'
import Footer from '../../components/Footer/Footer'
export class Blog extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LinkTitle data='Blog' linkto='blog'/>
                <Footer />
            </div>
        )
    }
}

export default Blog
