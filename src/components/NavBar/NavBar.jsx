import React, { Component } from 'react';
import './NavBar.scss'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg" fixed="top">
                <Navbar.Brand>Recreatly</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-auto">

                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>

                    <Nav.Link><Link to='aboutus'>About Us</Link></Nav.Link>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item>Music</NavDropdown.Item>
                        <NavDropdown.Item >Dance</NavDropdown.Item>
                        <NavDropdown.Item >Something</NavDropdown.Item>
                        <NavDropdown.Item >Language</NavDropdown.Item>
                        <NavDropdown.Item >Drawing & Painting</NavDropdown.Item>
                        <NavDropdown.Item >Sports</NavDropdown.Item>
                        <NavDropdown.Item >Games</NavDropdown.Item>
                        <NavDropdown.Item >Senior</NavDropdown.Item>
                        <NavDropdown.Item >Others</NavDropdown.Item>
                        <NavDropdown.Item><Link to='aboutus'>Music</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Dance</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Blog</Link>Something</NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Language</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Drawing & Painting</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Sports</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Games</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Senior</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to='aboutus'>Others</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to='aboutus'>Blog</Link></Nav.Link>
                    <Nav.Link><Link to='contactus'>Contact Us</Link></Nav.Link>
                    <Nav.Link><Link to='mission'>Our Mission</Link></Nav.Link>
                    </Nav>
                    <Nav.Link><Link to='register'><Button variant="warning">Register</Button></Link></Nav.Link>
                    
                </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default NavBar
