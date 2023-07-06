import { Button, Form } from "react-bootstrap";

export default function Login() {
  return (
    <Form className="w-50">
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <div className="d-flex">
        <Button variant="primary" type="submit" className="ms-auto">
          Login
        </Button>
      </div>
    </Form>
  );
}
