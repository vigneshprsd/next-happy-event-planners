import Link from "next/link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../public/images/logo.png";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";

import { useState, useEffect } from "react";

const TopBar = (props) => {
  const [colorChange, setColorchange] = useState(false);
  const [mobile, setMobile] = useState("917506061091");
  const [message, setMessage] = useState("Hello Happy Event Planner");
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 500) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    });
  });
  return (
    <Navbar
      id="topNavBar"
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={`w-100 ${colorChange ? "navbar-bg" : "navbar-bg"}`}
    >
      <Container>
        <Navbar.Brand href="/">
          <Image alt="logo" src={logo} className="logo"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto custom-navbar-fontweight">
            <Nav.Item className="m-3">
              <Link href="/">Home</Link>
            </Nav.Item>
            <Nav.Item className="m-3">
              <Link href="/about">About</Link>
            </Nav.Item>
            <Nav.Item className="m-3">
              <Link href="/portfolio">Portfolio</Link>
            </Nav.Item>
            <Nav.Item className="m-3">
              <Link href="/gallery">Gallery</Link>
            </Nav.Item>
            <Nav.Item className="m-3">
              <Link href="/OurTeam">Our Team</Link>
            </Nav.Item>
            <Nav.Item className="m-3">
              <Link href="/contact">Contact</Link>
            </Nav.Item>
          </Nav>
          <ReactWhatsapp className="rounded btn btn-outline-success btn-sm" number={mobile} message={message}>
            <span>
              {" "}
              <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
              <span className="mr-3">
                &nbsp;&nbsp;&nbsp; Contact / Book Now
              </span>
            </span>
          </ReactWhatsapp>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
