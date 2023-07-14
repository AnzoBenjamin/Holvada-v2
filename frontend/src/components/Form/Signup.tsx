import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "./Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classess from "./Signup.module.scss";
import { useAuth } from "../../store/auth-context";

const Signup = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const confirmPasswordRef = useRef<HTMLInputElement>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { signUp, currentUser } = useAuth();

  const signupHandler = async (e: any) => {
    e.preventDefault();
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      if (emailRef.current && passwordRef.current)
        await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/verification");
    } catch (error: any) {
      console.log(`${error.code}`);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <Form>
      <form className={classess["form-signup"]} onSubmit={signupHandler}>
        <h2>Signup</h2>
        {error && <p>{error}</p>}
        <Input type="email" ref={emailRef} placeholder="Email" />
        <Input type="password" ref={passwordRef} placeholder="Password" />
        <Input
          type="password"
          ref={confirmPasswordRef}
          placeholder="Confirm password"
        />
        <Button text="Signup" disabled={loading} type="submit" className="" />
        <Link to={"/login"}>Already have an account? Log in.</Link>
      </form>
    </Form>
  );
};

export default Signup;
