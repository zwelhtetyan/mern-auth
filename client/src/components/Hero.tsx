import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Card className="w-75 p-5 bg-light">
      <h1 className="text-center mb-4">MERN Authentication</h1>

      <p className="text-center mb-4">
        This is a boilerplate for MERN authentication that stores a JWT in an
        HTTP-Only cookie. It also uses Redux Toolkit and the React Bootstrap
        library
      </p>

      <div className="d-flex justify-content-center">
        <Link to="/login">
          <Button variant="primary" className="me-2" as="button">
            Login
          </Button>
        </Link>

        <Link to="/register">
          <Button variant="secondary" as="button">
            Register
          </Button>
        </Link>
      </div>
    </Card>
  );
}
