import { Button, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { FormEvent, useRef } from "react";
import { useUpdateProfileMutation } from "../store/api/user.api";
import { ToastContainer, toast } from "react-toastify";
import { setUser } from "../store/slices/auth.slice";

export default function Profile() {
  const { userInfo } = useAppSelector((state) => state.auth);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const dispatch = useAppDispatch();

  const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const oldPassword = oldPasswordRef.current?.value || "";
    const newPassword = newPasswordRef.current?.value || "";

    try {
      const updatedUser = await updateProfile({
        name,
        email,
        oldPassword,
        newPassword,
      }).unwrap();

      dispatch(setUser(updatedUser));
      toast.success("Updated user successfully");
    } catch (err: any) {
      console.log(err);
      toast.error(err.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <Form className="w-50" onSubmit={handleUpdateProfile}>
        <h2 className="mb-3">Hi👋, {userInfo?.name}</h2>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={nameRef}
            defaultValue={userInfo?.name}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            ref={emailRef}
            defaultValue={userInfo?.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Old Password</Form.Label>
          <Form.Control
            ref={oldPasswordRef}
            type="password"
            placeholder="Old Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New password</Form.Label>
          <Form.Control
            ref={newPasswordRef}
            type="password"
            placeholder="New Password"
          />
        </Form.Group>

        <div className="d-flex">
          <Button variant="primary" type="submit" className="ms-auto">
            {isLoading ? "Loading" : "Update"}
          </Button>
        </div>
      </Form>
    </>
  );
}
