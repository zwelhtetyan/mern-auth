import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="w-75">
        <Navbar.Brand href="#home">MERN Auth 🔑</Navbar.Brand>

        <div>
          <Nav className="me-auto">
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
