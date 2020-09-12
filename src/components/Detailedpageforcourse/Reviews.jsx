import React from 'react'
import './Detailedpageforcourse.scss'
import { CardDeck, Card } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import { options } from '../cards/Cards'
import Dance from '../../assets/images/dance.jpg';
import Drawing from '../../assets/images/drawing.jpg'
import Music from '../../assets/images/music.jpg'

const detail = [
    {
        
        title : "Dance",
        detail : "This is a wider carbit longer. dance sdfjdbhd" ,
        teacherimage: Dance,
      	teacher: 'Prashant'
    },
    {
        
        title : "Drawing",
        detail : "This is a wider carbit longer." ,
        teacherimage: Drawing,
     	teacher: 'Prashant'
    },
    {
        
        title : "Music ",
        detail : "dfjwider carbit longer. dance sdfjdbhd bsdhgbh" ,
        teacherimage: Music,
        teacher: 'Prashant'
    },
    {
        
        title : "Drawing",
        detail : "This is a wider carbit longer." ,
        teacherimage: Drawing,
     	teacher: 'Prashant'
    }
]

const cards = detail.map(i => (
    
        <Card className="card2"   style={{ cursor: "pointer" }}>
                <Card.Body>
                    
                    <Card.Text>
                    <span className='quote'>&#8220;</span> 
                        {i.detail}
                    </Card.Text>

                    <div id="nameplate">
                        <div>
                        	<img src={i.teacherimage} className='courseimage' alt='df'/>
                        	<span className='teacher'>{i.teacher}</span>
                        </div>
                        
                    </div>
                    <br /> 
                </Card.Body>     
        </Card>
  
    ));

export default function Reviews() {
	return (
		<div className='testimonials '>
            <h1 className='coursetitle2'> Testimonials</h1>
			<CardDeck>
	            <OwlCarousel 
	            	className="slider-items owl-carousel" {...options}>

	                    { cards }
	            </OwlCarousel>
	        </CardDeck>
       </div>
	)
}