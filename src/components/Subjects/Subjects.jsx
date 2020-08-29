import React from 'react'
import topic1 from '../../assets/images/topic1.png'
import topic2 from '../../assets/images/topic2.png'
import topic3 from '../../assets/images/topic3.png'
import topic4 from '../../assets/images/topic4.png'

export default function Subjects() {
    return (
        <div>
            <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={topic1} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Music</h5>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={topic2} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Dance</h5>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={topic3} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Programing</h5>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <img src={topic4} className="imgtopic" alt=""/>
                            <h5 className="subtopic">Gamming</h5>
                        </div> 
                    </div>
        </div>
    )
}
