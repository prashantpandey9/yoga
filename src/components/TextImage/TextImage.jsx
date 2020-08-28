import React from 'react'
import topic1 from '../../assets/topic1.png'
export default function TextImage() {
    return (
        <div>
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
    )
}
