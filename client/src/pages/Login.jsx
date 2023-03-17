import React, { useState, useContext, useEffect } from "react";
import "./Login.css";
import { NavBar } from "../components/NavBar";
import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";

const LoginForm = () => {
  const currentUser = useContext(CurrentUserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // useEffect(()=>{
  //   alert(JSON.stringify(errors));
  // },[errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidated = validate();
    if (isValidated) {
      console.log(formData);
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        alert("Logged in");
        const user = await response.json();
        console.log(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        currentUser.setState(user);
        window.location.href = "/";
      } else {
        const error = await response.json();
        alert(error.error);
      }
    }
  };

  useEffect(()=>{console.warn(currentUser)},[currentUser.state]);

  return (
    <div className="container1">
      <NavBar shadowNavbar={true} />

      <div className="registrationContainer">
        <form className="RegisterForm" onSubmit={handleSubmit}>
          <h1 className="form-heading">Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="inputError">{errors.email}</span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span className="inputError">{errors.password}</span>
          </div>

          <button className="registerButton loginButton" type="submit">
            Login
          </button>

          <small>
            {" "}
            <a className="form-control_anchor" href="/register">Don't have an account? Sign Up</a>
          </small>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
