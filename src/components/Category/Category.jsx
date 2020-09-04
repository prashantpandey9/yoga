import React from 'react'
import './Category.scss'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrum, faGuitar, faMicrophone, faPencilAlt, faGamepad, faBiking } from '@fortawesome/free-solid-svg-icons'
const data = [
    {
        icon: faGuitar,
        title: 'Guitar'
    },
    {
        icon: faDrum,
        title: 'Drums'
    },
    {
        icon:  faMicrophone,
        title: 'Vocal'
    },
    {
        icon: faPencilAlt,
        title: 'Sketching'
    },
    {
        icon: faGamepad,
        title: 'Gaming'
    },
    {
        icon:  faBiking,
        title: 'Cycling'
    },
    

]

const category = data.map(i => (
    <div className="col-md-2 col-sm-4 col-lg-2 icons">
        <Link to={`/${i.title}/detail`}> <FontAwesomeIcon icon={i.icon} className="icon"/> </Link>
        <h6> {i.title}</h6>
    </div>
))

export default function Category() {
    return (
        <div className='container category'>
            <div className="row catinner">
                { category }
            </div>
        </div>
    )
}
