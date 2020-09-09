import React, { Component } from 'react';
import {CardDeck, Card, Button} from 'react-bootstrap';
import './Cards.scss'
import { Link } from 'react-router-dom'
import Dance from '../../assets/images/dance.jpg';
import Drawing from '../../assets/images/drawing.jpg'
import Music from '../../assets/images/music.jpg'
import OwlCarousel from 'react-owl-carousel';
const options = {
  responsiveClass: true,
  autoplay: true,
  loop: true,
  
  smartSpeed: 3000,
  autoWidth: true,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },
      700: {
          items: 1,
      },
      1000: {
          items: 1,
      }
  },
};
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
        img : Drawing,
        title : "Drawing",
        detail : "This is a wider carbit longer." ,
        price: 50,
        teacherimage: Drawing,
        teacher: 'Rahul'
    },
    {
        img : Music,
        title : "Music ",
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
    
        <Card className="card2"   style={{ cursor: "pointer" }}>
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
                    <br /> 
                    <Link to={`course/${i.title}`}>
                       <Button variant="outline-primary" > Details</Button>
                    </Link> 
                </Card.Body>     
        </Card>
  
    ));
    
export class Cards extends Component {
    
    render() {
        return (
            <div>
                <CardDeck>
                    <OwlCarousel 
                      className="slider-items owl-carousel" {...options}>
                        { cards }
                    </OwlCarousel>
                </CardDeck>
            </div>
        )
    }
}

export default Cards
