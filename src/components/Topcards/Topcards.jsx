import React from 'react'

import './Topcards.scss';


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
                                            Select your
                                        </button>
                                        <div class="dropdown-menu search" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item searchitem" href="#">Action</a>
                                            <a class="dropdown-item searchitem" href="#">Another action</a>
                                            <a class="dropdown-item searchitem" href="#">Something else here</a>
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
