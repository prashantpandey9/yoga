import React from 'react'
import './LinkTitle.scss'
import {Link} from 'react-router-dom'

function LinkTitle(props) {
    return (
        <div>
            <br /> <br />
            <div className="row linktitle">
                <div className="col-md-12 col-sm-12 col-lg-12">
                    <h1 className="linkhead">{ props.data}</h1>
                        <Link to='/'>Home</Link> | <Link to={props.linkto}>{props.link}</Link>
                </div>
            </div>
        </div>
    )
}

export default LinkTitle
