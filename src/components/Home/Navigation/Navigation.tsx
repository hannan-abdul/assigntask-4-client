import "./Navigation.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Heavy Excercise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li className="nav-item nav-fix">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <Link className="nav-link" to="/product">
                Product
              </Link>
              <li className="nav-item nav-fix">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item nav-fix">
                <Link className="nav-link me-2" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
