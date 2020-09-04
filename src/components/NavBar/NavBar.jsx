import React, { Component, useContext } from 'react';
import './NavBar.scss'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserContext} from '../../UserContext'
var button;


// // console.log(state)
export  function Loggedout() {
    return (
        <Nav>
           
            <Nav.Link><Link to='/register'><Button variant="warning">Register</Button></Link></Nav.Link>
            <Nav.Link><Link to='/login'><Button variant="warning">Login </Button></Link></Nav.Link>
                    
        </Nav>
    )
}

export  function Loggedin() {
    
    return (
        <NavDropdown title={localStorage.getItem('username')} id="collasible-nav-dropdown" className='dropbg'>
            <NavDropdown.Item ><Link to='category#Dance'>Manage Cart</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='aboutus'>Contact</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='' onClick={()=>{
                localStorage.setItem('isAuth', 'false');
            }}>
                Logout 
            </Link></NavDropdown.Item>
        </NavDropdown>
    )
}

if (localStorage.getItem('isAuth')==='true'){
    button= <Loggedin />
    // window.location.reload();
    
}
else{
    button= <Loggedout />
    
}

export  const NavBar = ()=> {
        const msd= useContext(UserContext);

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
                    {button}
                </Navbar.Collapse>
                </Navbar>
            </div>

        )
    
}

export default NavBar
