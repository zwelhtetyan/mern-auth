import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export default function Header() {
  const { userInfo } = useAppSelector((state) => state.auth);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="w-75">
        <Navbar.Brand as="p" className="mb-0">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            MERN Auth 🔑
          </Link>
        </Navbar.Brand>

        {
          <div>
            <Nav className="me-auto">
              {userInfo ? (
                <Nav.Link className="">Logout</Nav.Link>
              ) : (
                <>
                  <Nav.Link as="p" className="mb-0">
                    <Link
                      to="/login"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Login
                    </Link>
                  </Nav.Link>

                  <Nav.Link as="p" className="mb-0">
                    <Link
                      to="/register"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Register
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </div>
        }
      </Container>
    </Navbar>
  );
}
