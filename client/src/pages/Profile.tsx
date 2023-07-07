import { Button, Form } from "react-bootstrap";
import { useAppSelector } from "../hooks/redux";

export default function Profile() {
  const { userInfo } = useAppSelector((state) => state.auth);

  return (
    <Form className="w-50">
      <h2 className="mb-3">Hi👋, {userInfo?.name}</h2>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          defaultValue={userInfo?.name}
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          defaultValue={userInfo?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Change Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <div className="d-flex">
        <Button variant="primary" type="submit" className="ms-auto">
          Update
        </Button>
      </div>
    </Form>
  );
}
