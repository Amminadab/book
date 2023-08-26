import TextField from "@mui/material/TextField";

import axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  //   const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //   console.log(values);
  const [response, setResponse] = useState({ type: "", message: "" });

  //   const storedData = JSON.parse(localStorage.getItem("userData"));
  //   const token = Cookies.get("token");

  const signUpUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/user", values, {
        headers: { "Content-Type": "application/json" },
      });
      setResponse({ message: response?.data?.message, type: "success" });
      setIsLoading(false);
    } catch (error) {
      setResponse({ message: error?.response?.data?.message, type: "error" });
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-form2">
      <div className="admin-login-float-project">
        <h2>
          <br></br> <span> Reviewer SignUp Form </span>
        </h2>
        <div className="add-admin-input">
          {!isLoading && response.message && (
            <p className={response.type}>{response.message}</p>
          )}
          {isLoading && <p className="message">...loading</p>}

          <TextField
            required
            label="First Name"
            onChange={(e) =>
              setValues({ ...values, firstName: e.target.value })
            }
          />
          <TextField
            name="email_or_phone"
            required
            label="Last Name"
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          />
          <TextField
            name="email_or_phone"
            required
            label="Bio"
            onChange={(e) => setValues({ ...values, bio: e.target.value })}
          />
          <TextField
            name="email_or_phone"
            required
            label="Email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <TextField
            name="password"
            type="password"
            required
            id="outlined-required"
            label="Password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <TextField
            name="password"
            type="password"
            required
            id="outlined-required"
            label="Confirm Password"
            onChange={(e) =>
              setValues({ ...values, confirmPassword: e.target.value })
            }
          />
          <button
            disabled={isLoading}
            className="admin-project-submit"
            value={!isLoading ? "Login" : "Verifying..."}
            onClick={signUpUser}
          >
            Sign Up
          </button>
          <Link className="center" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
