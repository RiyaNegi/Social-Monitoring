import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import "./Style.css"

const NavSlide=()=>{
   return <div>
    <Navbar  className="px-4" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Social Sprout</Navbar.Brand>
    <Nav className="ml-auto">
      <span > <Link className="link ml-3" to="/login">Logout</Link>
      </span>  
      <span > <Link className="link ml-3" to="/login">Profile</Link>
      </span>   
    </Nav>
  </Navbar>
    </div>
}

export default NavSlide