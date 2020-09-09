import React from 'react'
import Dance from '../../assets/images/music.jpg';
import './Detailedpageforcourse.scss'
// import OwlCarousel from 'react-owl-carousel';
import {Button} from 'react-bootstrap';
export default function Detailedpageforcourse(props) {
	return (
		<>
			<div className="container-fluid coursepage">
				<div className='row '>
					<div className='col-md-3 col-sm-12 col-lg-3'></div>
					<div className='col-md-6 col-sm-12 col-lg-6'>
						<h1 className='coursetitle'>{props.title}</h1>
						<p className='coursepara'>Western, Indian Classical, Indian Movie Dance etc</p>
						<>
							<Button variant="outline-primary" >
								
									Enroll Now
							</Button>
						</>
					</div>
					<div className='col-md-3 col-sm-12 col-lg-3'></div>
				</div>
			</div>

			<div className="container-fluid youtube	">
			<h1 className='coursetitle2'>Begin Your {props.title} Journey with us</h1>
				<div className='row '>
					<div className='col-md-3  col-lg-3'></div>
					<div className='col-md-6 col-sm-12 col-lg-6 embed-responsive embed-responsive-16by9'>
						<iframe className='embed-responsive-item'
							title='kodaline'
							width="560" 
							height="315" 
							src="https://www.youtube.com/embed/m3b58gkjKJ0" 
							frameborder="0" 
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
							allowfullscreen>
							
						</iframe>
					</div>
				</div>
			</div>

			<div className="container-fluid	instructor">
				<h1 className='coursetitle2'>Your Instructor</h1>
				<div className='row '>
					<div className='col-md-2  col-lg-2'></div>
					<div className='col-md-2 col-sm-12 col-lg-2'>
						<img src={Dance} alt=""  className='courseinstructor img-responsive'/>
						<div id='name'>Prashant</div>
					</div>
					<div className='col-md-5 col-sm-12 col-lg-5'>
						<p>
							Western, Indian Classical, Indian Movie Dance etc Western, Indian Classical, Indian Movie Dance etc 
						</p>
						<p>
							Western, Indian Classical, Indian Movie Dance etc Western, Indian Classical, Indian Movie Dance etc
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
