import React, { Component } from 'react';
import {CardDeck, Card} from 'react-bootstrap';
import './Cards.scss'
import Dance from './dance.jpg';
import Drawing from './drawing.jpg'
import Music from './music.jpg'
export class Cards extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <Card className="card2">
                        <Card.Img variant="top" src={Dance} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card className="card2">
                        <Card.Img variant="top" src={Music} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card className="card2" >
                        <Card.Img variant="top" src={Drawing} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default Cards
