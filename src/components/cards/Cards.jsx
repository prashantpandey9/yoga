import React, { Component } from 'react';
import {CardDeck, Card} from 'react-bootstrap';
import './Cards.scss'
import Dance from '../../assets/images/dance.jpg';
import Drawing from '../../assets/images/drawing.jpg'
import Music from '../../assets/images/music.jpg'


const detail = [
    {
        img : Dance,
        title : "Dance",
        detail : "This is a wider carbit longer. dance sdfjdbhd" ,
        price: 50,
        teacherimage: Dance,
        teacher: "Dev Ed"
    },
    {
        img : Music,
        title : " Music ",
        detail : "dfjwider carbit longer. dance sdfjdbhd bsdhgbh" ,
        price: 50,
        teacherimage: Music,
        teacher: "prashant"
    },
    {
        img : Drawing,
        title : "Drawing",
        detail : "This is a wider carbit longer." ,
        price: 50,
        teacherimage: Drawing,
        teacher: 'Rahul'
    }
]

const cards = detail.map(i => (
    
        <Card className="card2">
            <Card.Img variant="top" src={i.img} />
                <Card.Body>
                    <Card.Title> {i.title}</Card.Title>
                    <Card.Text>
                        {i.detail}
                    </Card.Text>

                    <div id="nameplate">
                        <img src={i.teacherimage} className='courseimage' alt='df'/>
                        <span className='teacher'>{i.teacher}</span>
                        <span className='price'>₹{i.price}</span>
                    </div>
                      {/*<Button variant="outline-primary">Primary</Button>*/}
                   
                </Card.Body>     
        </Card>

    ));
    
export class Cards extends Component {
    
    render() {
        return (
            <div>
                <CardDeck>

                    { cards }

                </CardDeck>
            </div>
        )
    }
}

export default Cards
