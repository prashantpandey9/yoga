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
                    </NavDropdown>
                    <Nav.Link><Link to='aboutus'>Blog</Link></Nav.Link>
                    <Nav.Link><Link to='aboutus'>Contact Us</Link></Nav.Link>
                    <Nav.Link><Link to='aboutus'>Our Mission</Link></Nav.Link>
                    </Nav>
                    <Nav.Link><Link to='aboutus'><Button variant="warning">Register</Button></Link></Nav.Link>
                    
                </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default NavBar
