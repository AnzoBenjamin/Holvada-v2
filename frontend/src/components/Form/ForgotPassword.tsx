import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth-context";
import { Form } from "./Form";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from './ForgotPassword.module.scss'

export const ForgotPassword: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const {forgotPassword} = useAuth();

  const resetHandler = async (e: any)=>{
    e.preventDefault()
    try{
      setError("")
      setLoading(true)
      console.log("first")
      if(emailRef.current) await forgotPassword(emailRef.current?.value)
      setMessage("Check your email for further instructions")
    }
    catch(error: any){
      console.log(error)
      setError(error.code)
      setMessage("")
    }
  }
  return (
    <Form>
      <form action="" onSubmit={resetHandler} className={classes.forgot}>
      <h2>Forgot Password</h2>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <Input type="email" placeholder="Email" ref={emailRef} />
      <Button text="Reset" disabled={loading} type="submit" className="" />
      <Link to={"/signup"}>Don't have an account? Signup</Link>
      <Link to={"/login"}>Already have an account? Login</Link>
      </form>
    </Form>
  );
};
