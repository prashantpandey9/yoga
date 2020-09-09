import React from 'react'
import './Loader.scss'
import Loadergif from './37.gif'
export class Loader extends React.Component {
	// state{

	// }
	render() {
		return (
			<div className='loader-container'>
				<div className='loader'>
					<img src={Loadergif} />
				</div>
			</div>
		)
	}
}

export default Loader