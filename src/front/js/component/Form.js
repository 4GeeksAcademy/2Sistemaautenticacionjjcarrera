import React, { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import background from "../../img/fondo3.jpg";

export const Form = () => {
  const { actions } = useContext(Context);

  let token = sessionStorage.getItem("token");
  let flag = false;

  const [registerForm, setRegisterForm] = useState({
    id: 1,
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const [registerErrors, setRegisterErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...registerForm };
    newState[name] = value;
    setRegisterForm(newState);
  };

  const handleValidate = (registerForm) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!registerForm.email) {
      errors.email = "Email is required!";
      flag = true;
    } else if (!regex.test(registerForm.email)) {
      errors.email = "Email not valid!";
    }
    if (!registerForm.password) {
      errors.password = "Password is required!";
      flag = true;
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisterErrors(handleValidate(registerForm));
    if (flag === false) {
      actions.signup(registerForm, navigate);
      flag = true;
    } else return false;
  };

  return (
    <>
      {token && <Navigate to="/" />}
      <div className="m-0 vh-100 row justify-content-center align-items-center">
        <form
          className="w-25 p-2 text-center rounded-3"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
          }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <p className="errors-signup">{registerErrors.email}</p>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <p className="errors-signup">{registerErrors.password}</p>
          <button type="submit" className="btn btn-lg">
            Sign up
          </button>
          <a href="/" className="btn btn-lg">
            Back to Home
          </a>
        </form>
      </div>
    </>
  );
};
