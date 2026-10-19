
import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import useAuth from "./useAuth";

function AppNavbar({ darkMode, toggleTheme }) {
  const { user, login, logout } = useAuth();

  return (
    <Navbar
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      className="px-3 py-3"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          🌸 Orchid Collection
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/naturals">
              Naturals
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

          </Nav>

          <div className="d-flex align-items-center gap-2 flex-wrap mt-3 mt-lg-0">
            {user ? (
              <>
                <span className="me-2">
                  Welcome, {user.username}
                </span>

                <Button variant="danger" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <span>Log in as Huy</span>

                <Button variant="primary" onClick={login}>
                  Login
                </Button>
              </>
            )}

            <Button
              variant={darkMode ? "light" : "dark"}
              onClick={toggleTheme}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
