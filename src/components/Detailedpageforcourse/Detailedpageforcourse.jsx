import React from 'react'
import './Detailedpageforcourse.scss'
import Instructor from './Instructor'
import Video from './Video'
import Reviews from './Reviews'
// import OwlCarousel from 'react-owl-carousel';
import { Button } from 'react-bootstrap';
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

			<Video title={props.title} />
			<Reviews />
			<Instructor />
			
		</>
	)
}
