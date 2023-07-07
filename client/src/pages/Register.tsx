import { FormEvent, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useRegisterMutation } from "../store/api/user.api";
import { ToastContainer, toast } from "react-toastify";
import { setUser } from "../store/slices/auth.slice";
import { useAppDispatch } from "../hooks/redux";

export default function Register() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useAppDispatch();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmPasswordRef.current?.value || "";

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      return toast.error("Invalid data");
    }

    console.log({ name, email, password, confirmPassword });

    if (password.trim() !== confirmPassword.trim()) {
      return toast.error("No matching password");
    }

    try {
      const newUser = await register({ name, email, password }).unwrap();
      dispatch(setUser(newUser));
      toast.success("Registered successfully!");
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message);
    }

    console.log({ name, email, password, confirmPassword });
  };

  return (
    <>
      <ToastContainer />
      <Form className="w-50" onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>

        <div className="d-flex">
          <Button variant="primary" type="submit" className="ms-auto">
            {isLoading ? "Loading" : "Register"}
          </Button>
        </div>
      </Form>
    </>
  );
}
