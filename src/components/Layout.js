import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/gravity_logo_solid.svg"
              alt="Logo"
              width="100"
              height="30"
              className="d-inline-block align-top me-2"
            />
            {/* <span className="fw-bold">React Assessment</span> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/dsa"
                active={location.pathname === '/dsa'}
              >
                🧩 DSA Problems
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/mongodb"
                active={location.pathname === '/mongodb'}
              >
                📊 MongoDB
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/todo"
                active={location.pathname === '/todo'}
              >
                ✅ Todo App
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="my-4 flex-grow-1">{children}</Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <Container>
          <small>
            © {new Date().getFullYear()} <strong>Gravity Assessment Solutions</strong>. All rights reserved.
          </small>
        </Container>
      </footer>
    </div>
  );
}

export default Layout;
