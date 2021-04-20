import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./Style.css"

const NavSlide = () => {
  return <div>
    <Navbar className="px-4 py-1" bg="dark" variant="dark">
      <Navbar.Brand className="web-name" href="/dashboard"><div className="mt-1">Social Sprout</div></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/login">Logout</Nav.Link>
        <Nav.Link href="/login">Profile</Nav.Link>
      </Nav>
    </Navbar>
    <div style={{ background: "linear-gradient(90deg, rgba(141,208,244,1) 37%, rgba(255,126,159,1) 94%)", height: 5 }}></div>
  </div>
}

export default NavSlide