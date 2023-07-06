import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="w-75">
        <Navbar.Brand href="/">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            MERN Auth 🔑
          </Link>
        </Navbar.Brand>

        <div>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Login
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/register"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Register
              </Link>
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
