import React, { Component } from 'react';
import './NavBar.scss'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg" fixed="top">
                <Navbar.Brand href="#home">Recreatly</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Music</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Dance</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Language</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Drawing & Painting</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Games</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Senior</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/aboutus">Blog</Nav.Link>
                    <Nav.Link href="/aboutus">Contact Us</Nav.Link>
                    <Nav.Link href="/aboutus">Our Mission</Nav.Link>
                    </Nav>
                    <Nav.Link href="#deets"><Button variant="warning">Register</Button></Nav.Link>
                    
                </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default NavBar
