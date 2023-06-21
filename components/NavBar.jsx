import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      bsPrefix="navbar"
      sticky="top"
    >
      <Container>
        <Navbar.Brand>
          Port<span className="text-warning">folio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav bsPrefix="nav">
            <Link
              href="/"
              className={`text-decoration-none mx-2 ${
                pathname === "/" ? "text-warning" : "text-light"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-decoration-none mx-2 ${
                pathname === "/about" ? "text-warning" : "text-light"
              }`}
            >
              About
            </Link>
            <Link
              href="/resume"
              className={`text-decoration-none mx-2 ${
                pathname === "/resume" ? "text-warning" : "text-light"
              }`}
            >
              Resume
            </Link>
            <Link
              href="/tools"
              className={`text-decoration-none mx-2 ${
                pathname === "/tools" ? "text-warning" : "text-light"
              }`}
            >
              Tools
            </Link>
            <Link
              href="/projects"
              className={`text-decoration-none mx-2 ${
                pathname === "/projects" ? "text-warning" : "text-light"
              }`}
            >
              Project
            </Link>
            <Link
              href="/contact"
              className={`text-decoration-none mx-2 ${
                pathname === "/contact" ? "text-warning" : "text-light"
              }`}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
