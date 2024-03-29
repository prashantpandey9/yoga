import React, { Component } from 'react';
import './NavBar.scss'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export class PrivateNav extends Component {
    handleSubmit = event =>{
        localStorage.setItem('isAuth','false');
    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg" fixed="top">
                <Navbar.Brand><Link to='/'>Recreatly</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-auto">

                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>

                    <Nav.Link><Link to='/aboutus'>About Us</Link></Nav.Link>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown" className='dropbg'>
                       
                        
                        <NavDropdown.Item ><Link to='category#Dance'>Dance</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='blog'>Language</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Drawing & Painting</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='mission'>Sports</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='contactus'>Games</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Senior</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Others</Link></NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                    <Nav.Link><Link to='/contactus'>Contact Us</Link></Nav.Link>
                    <Nav.Link><Link to='/mission'>Our Mission</Link></Nav.Link>
                    </Nav>
                    
                    
                    
                </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default PrivateNav;
