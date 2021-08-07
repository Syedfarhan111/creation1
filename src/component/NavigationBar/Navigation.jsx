import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="nav">
        <Container>
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Navbar.Brand>PickUpBiz</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>&nbps;
            <NavLink to="/Courses">Courses</NavLink>&nbps;
            <NavLink to="/AboutUs">AboutUs</NavLink>&nbps;
            <NavLink to="/ContactUs">ContactUs</NavLink>&nbps;
            <NavLink to="/Service">Service</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
