import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useLogoutMutation } from "../store/api/user.api";
import { ToastContainer, toast } from "react-toastify";
import { removeUser } from "../store/slices/auth.slice";

export default function Header() {
  const { userInfo } = useAppSelector((state) => state.auth);

  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await logout({}).unwrap();
      toast.success("Successfully logout");
      dispatch(removeUser());
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
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
                  <Nav.Link onClick={handleLogout}>
                    {isLoading ? "Loading" : "Logout"}
                  </Nav.Link>
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
    </>
  );
}
