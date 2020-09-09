import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import LinkTitle from '../../components/LinkTitle/LinkTitle'
import Footer from '../../components/Footer/Footer'
// import Missioncards from '../../components/Missioncards/Missioncards'
// import {CardDeck} from 'react-bootstrap';
export class Mission extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LinkTitle data='Our Mission' linkto='Mission'/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-lg-6">
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Mission
