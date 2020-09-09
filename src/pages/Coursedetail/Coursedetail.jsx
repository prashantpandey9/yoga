import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Detailedpageforcourse from '../../components/Detailedpageforcourse/Detailedpageforcourse'
export default function Coursedetail(props) {
	return (
		<>
			<NavBar/>	
			<Detailedpageforcourse title={props.match.params.title}/>
			<Footer />
		</>
	)
}