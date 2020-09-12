import React from 'react'

export default function Video(props) {
	return (
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
	)
}