import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/cards/Cards'

import Subjects from '../../components/Subjects/Subjects'
import TextImage from '../../components/TextImage/TextImage'
import Category from '../../components/Category/Category'
import './Home.scss'


import Jumbo from '../../components/Jumbo/Jumbo'
export class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid con1">
                    <NavBar />
                    <Jumbo />
                </div>
                
                <Category />
                <div className="container section2" style={{ padding: '0' }}>
                    <h1 className="heading2">
                    Our featured courses
                    </h1>
                    <br />
                    <Cards />
                    <br />
                    <br />

                    <h1 className="heading2">
                    Explore Our Top Subjects
                    </h1>
                    <br />
                    <Subjects />
                </div>
                <br/>
                <br />
                <br/>
                <div class="container">
                    <TextImage />  
                </div>
                
                <br /><br />
                <div className="container-fluid con1">
                    <Footer />
                    
                </div>
                
                
            </div>
        )
    }
}

export default Home
