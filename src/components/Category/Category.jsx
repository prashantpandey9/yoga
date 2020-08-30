import React from 'react'
import './Category.scss'
import {Link} from 'react-router-dom'
const data = [
    {
        icon: 'fa fa-twitter icon   ',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon   ',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon   ',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon   ',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon   ',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon   ',
        title: 'Hle'
    },
    {
        icon: 'fa fa-twitter icon',
        title: 'Hle'
    },

]

const category = data.map(i => (
    <div className="col-md-2 col-sm-4 col-lg-2 icons">
        <Link> <i className={ i.icon }></i> </Link>
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
