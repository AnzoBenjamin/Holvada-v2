import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import Button from "../../UI/Button";
import classes from "./Signup.module.scss";
import { useAuth } from "../../store/auth-context";
import FormHeader from "./FormHeader";
import { MapContainer } from "react-leaflet";
import { TextField } from "@mui/material";
import Map from "../Map/Map";

const Signup = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const streetRef = useRef<HTMLInputElement | null>(null);
  const laneRef = useRef<HTMLInputElement | null>(null);
  const apartmentBlockRef = useRef<HTMLInputElement | null>(null);
  const apartmentNoRef = useRef<HTMLInputElement | null>(null);

  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<[number, number] | null>(null);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const signupHandler = async (e: any) => {
    e.preventDefault();
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      return setError("Passwords do not match");
    }
    if (!emailRef.current?.value) {
      return setError("Email field cannot be empty");
    }
    if (!phoneRef.current?.value) {
      return setError("Phone field cannot be empty");
    }
    if (!location) {
      return setError("Phone field cannot be empty");
    }
    try {
      setError("");
      setLoading(true);
      const info = {
        telephoneNumber: phoneRef.current.value,
        location,
        street: streetRef.current?.value,
        lane: laneRef.current?.value,
        apartmentBlock: apartmentBlockRef.current?.value,
        apartmentNo: apartmentNoRef.current?.value,
      };
      if (
        emailRef.current &&
        passwordRef.current &&
        phoneRef.current &&
        location
      )
        await signUp(
          emailRef.current.value,
          passwordRef.current.value,
          info.telephoneNumber,
          location,
          info.lane,
          info.apartmentBlock,
          info.apartmentNo
        );
      setMessage("Success, you are being redirected");
      navigate("/verification");
    } catch (error: any) {
      setMessage("");
      setError(error.code);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationChange = (lat: number, lng: number) => {
    setLocation([lat, lng]);
  };

  const linkItems = ["Login"];

  return (
    <>
      <FormHeader linkContent={linkItems} />
      <Form>
        <form className={classes["form-signup"]} onSubmit={signupHandler}>
          <h2>Signup</h2>
          {error && <p className={classes.error}>{error}</p>}
          {message && <p className={classes.message}>{message}</p>}
          <div className={classes["contact-info"]}>
            <TextField
              type="email"
              ref={emailRef}
              placeholder="Email"
              label="Required*"
            />
            <TextField
              type="tel"
              ref={phoneRef}
              placeholder="Telephone number"
              label="Required*"
            />
          </div>
          <div className={classes.passwords}>
            <TextField
              type="password"
              ref={passwordRef}
              placeholder="Password"
              label="Required*"
            />
            <TextField
              type="password"
              ref={confirmPasswordRef}
              placeholder="Confirm password"
              label="Required*"
            />
          </div>
          <div className={classes.map}>
            <p>Select your home location</p>
            <MapContainer>
              <Map
                onLocationChange={handleLocationChange}
                globalLocation={location}
              />
            </MapContainer>
          </div>
          <div className={classes["additional-content"]}>
            <TextField ref={streetRef} type="text" placeholder="Street" label="Optional"/>
            <TextField ref={laneRef} type="text" placeholder="Lane" label="Optional"/>
            <TextField
              ref={apartmentBlockRef}
              type="text"
              placeholder="Apartment Block"
              label="Optional"
            />
            <TextField
              ref={apartmentNoRef}
              type="text"
              placeholder="Apartment No"
              label="Optional"
            />
          </div>
          <Button
            text="Signup"
            disabled={loading}
            type="submit"
            className={classes.btn}
          />
        </form>
      </Form>
    </>
  );
};

export default Signup;
