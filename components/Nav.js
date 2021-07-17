import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../public/images/logo.png";
import Image from "next/image";
import { useState,useEffect } from "react";

const TopBar = (props) => {
  const [colorChange, setColorchange] = useState(false);

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
      className={`position-fixed w-100 ${
        colorChange ? "navbar-bg" : "navbar-bg-trans"
      }`}
    >
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} className="logo"></Image>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
