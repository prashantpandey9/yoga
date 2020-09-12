import React from 'react'
import Dance from '../../assets/images/music.jpg';

export default function Instructor() {
	return (
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
	)
}