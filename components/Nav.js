import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar-bg position-md-fixed w-100"
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="logo">Happy Events</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto custom-navbar-fontweight">
              <Nav.Item className="m-3" ><Link href="/">Home</Link></Nav.Item>
              <Nav.Item className="m-3"><Link href="about">About</Link></Nav.Item>
              <Nav.Item className="m-3"><Link href="portfolio">Portfolio</Link></Nav.Item>
              <Nav.Item className="m-3"><Link href="gallery">Gallery</Link></Nav.Item>
              <Nav.Item className="m-3"><Link href="OurTeam">Our Team</Link></Nav.Item>
              <Nav.Item className="m-3"><Link href="contact">Contact</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
