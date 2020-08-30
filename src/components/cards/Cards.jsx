import React, { Component } from 'react';
import {CardDeck, Card, Button} from 'react-bootstrap';
import './Cards.scss'
import Dance from '../../assets/images/dance.jpg';
import Drawing from '../../assets/images/drawing.jpg'
import Music from '../../assets/images/music.jpg'


const detail = [
    {
        img : Dance,
        title : "Card Title",
        detail : "This is a wider carbit longer." 
    },
    {
        img : Music,
        title : "Card Title",
        detail : "This is a wider carbit longer." 
    },
    {
        img : Drawing,
        title : "Card Title",
        detail : "This is a wider carbit longer." 
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
                    <Button variant="primary">{i.title} </Button>
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
