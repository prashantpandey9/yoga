import React from 'react'
import './State.scss'
// import { Link } from 'react-router-dom'
// import Cards from '../../components/cards/Cards'

import Subjects from '../../components/Subjects/Subjects'
import NavBar from '../../components/NavBar/NavBar'
// import {Image, Row, Col }from 'react-bootstrap'
// import LinkTitle from '../../components/LinkTitle/LinkTitle'
import Category from '../../components/Category/Category'
// import Topcards from '../../components/Topcards/Topcards'
export default function State(props) {
    return (
        <div classname='container-fluid con1'>
            <NavBar />
            <div className="container-fluid" style= {{background : 'black'}}>
                    <h1 className='heading1'> On Demand Services</h1>
                    <div className="row detailpage">
                       
                        <div className="col-md-3 col-sm-3 col-lg-3"></div>
                        <div className="col-md-6 col-sm-12 col-lg-6">

                            <i className='fa fa-search serachicon'></i><input type="text" className='searchbar' placeholder='Search for city'/>
                        
                        </div>
                    </div>
            </div>
            <Category />
            <div className="container section2" style={{ padding: '0' }}>
                    <br />
                    <br/>
                    <h1 className="heading2">
                    Explore Our Top Subjects
                    </h1>
                    <br />
                    <Subjects />
                </div>
        </div>
    )
}
