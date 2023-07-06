import { Button, Card } from "react-bootstrap";

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
        <Button variant="primary" href="/login" className="me-2">
          Login
        </Button>
        <Button variant="secondary" href="/register">
          Register
        </Button>
      </div>
    </Card>
  );
}
