import React, { useState } from "react";
import { useEffect } from "react";
import { NavBar } from "../components/NavBar";
import "./register.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [profilePicture, setProfilePicture] = useState();

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
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
      // console.log(formData);

      //sending formdata as a request to backend server
      const data = new FormData();
      data.append("profilePicture", e.target.ProfilePicture.files[0]);
      data.append("name", formData["name"]);
      data.append("email", formData["email"]);
      data.append("password", formData["password"]);

      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        credentials: "include",
        body: data,
      });

      if (response.status === 200) {
        alert("Registered");
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/";
      } else {
        const error = await response.json();
        alert(error.error);
      }
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        console.log({
          data: e.target.result,
          name: event.target.files[0].name,
        });
        setProfilePicture({
          data: e.target.result,
          name: event.target.files[0].name,
        });
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  useEffect(() => {
    console.log(profilePicture);
  }, [profilePicture]);

  return (
    <div className="container1">
<NavBar />      <div className="registrationContainer">
        <form className="RegisterForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <h1 className="form-heading">Register</h1>
            {/* <div className="logo">
              <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=" alt="" />

            </div>
              <div class="selectLogo"><span class="">Select profile picture</span></div> */}

            <div className="profileImg">
              <label className="lblUpload" for="inputImg">
                <img
                  src={profilePicture ? profilePicture.data : "https://th.bing.com/th/id/OIP.SqTcfufj92gVRBT45d045wAAAA?pid=ImgDet&w=400&h=400&rs=1"}
                  className="imgProfile"
                ></img>
                <span id="selectedImage">
                  {profilePicture
                    ? profilePicture.name
                    : "Select a profile picture"}
                </span>
              </label>
              <input
                onChange={handleImageChange}
                name="ProfilePicture"
                id="inputImg"
                className="inputImg"
                type={"file"}
              ></input>
            </div>

            <label className="inputLabel" htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <span className="inputError">{errors.name}</span>
          </div>
          <div className="form-group">
            <label className="inputLabel" htmlFor="email">Email</label>
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
            <label className="inputLabel" htmlFor="password">Password</label>
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

          <div className="form-group">
            <label className="inputLabel" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <span className="inputError">{errors.confirmPassword}</span>
          </div>

          <button className="registerButton" type="submit">
            Register
          </button>

          <small>
            {" "}
            <a className="form-control_anchor" href="/login">
              Already have an account? Login
            </a>
          </small>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
