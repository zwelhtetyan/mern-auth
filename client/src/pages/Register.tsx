import { Button, Form } from "react-bootstrap";

export default function Register() {
  return (
    <Form className="w-50">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <div className="d-flex">
        <Button variant="primary" type="submit" className="ms-auto">
          Register
        </Button>
      </div>
    </Form>
  );
}
