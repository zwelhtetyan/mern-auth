import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center mt-5 pt-5">
        <Outlet />
      </Container>
    </>
  );
}
