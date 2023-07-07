import { FormEvent, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useLoginMutation } from "../store/api/user.api";
import { setUser } from "../store/slices/auth.slice";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (!password.trim() || !email.trim()) {
      return toast.error("Invalid email or password");
    }

    try {
      const user = await login({ email, password }).unwrap();
      setUser(user);
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <Form className="w-50" onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <div className="d-flex">
          <Button variant="primary" type="submit" className="ms-auto">
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </div>
      </Form>
    </>
  );
}
