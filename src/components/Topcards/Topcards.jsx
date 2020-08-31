import React from 'react'
import './Topcards.scss';
import { Link } from 'react-router-dom'

const city = ['Almora', 'Luckhnow' , 'GandhiNagar']
const links = city.map( i => (
    <Link to ={`/${i}`}  parms={ i } class="dropdown-item searchitem">{i}</Link>
))

function Topcards() {
    return (
        <div className="container" style={{ padding: '0' }}>
            <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="card card1 mx-auto">
                                
                                <div className="card-body">
                                    <h5 className="card-title" for="cars">Select Your service</h5>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Select your City
                                        </button>
                                        <div class="dropdown-menu search" aria-labelledby="dropdownMenuButton">
                                            { links }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Topcards
