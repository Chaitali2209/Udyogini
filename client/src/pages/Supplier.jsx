import React, { useState } from "react";
import { useEffect } from "react";
import "./Supplier.css";
import FormImg from "./FormImg.png";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
function Supplier(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    orgName: "",
    orgLoc: "",
    productName: "",
    aboutOrg: "",
    productRate: "",
    minOrder: "",
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
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.orgName) {
      newErrors.orgName = "Organization Name  is required";
    }
    if (!formData.orgLoc) {
      newErrors.orgLoc = " organization Location is required";
    }

    if (!formData.productName) {
      newErrors.productName = "Product Name is required";
    }

    if (!formData.aboutOrg) {
      newErrors.aboutOrg = "Enter Description about your organization";
    }

    if (!formData.productRate) {
      newErrors.productRate = "Product Rate is required";
    }

    if (!formData.minOrder) {
      newErrors.minOrder = "minimum order accepted is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.productImage1.files[0]);
    const data = new FormData();
    data.append("productImage1", e.target.productImage1.files[0]);
    data.append("productImage2", e.target.productImage2.files[0]);
    data.append("productImage3", e.target.productImage3.files[0]);
    const business = {
      organizationName: formData.orgName,
      location: formData.orgLoc,
      productName: formData.productName,
      minOrderValue: formData.minOrder,
      productRate: formData.productRate,
      aboutUs: formData.aboutOrg,
    }
    data.append("business",JSON.stringify(business) );
    console.warn(data.get("business"))
    const response = await fetch("http://localhost:8000/updateProfile",{
      method: "POST",
      credentials: 'include',
      body: data
    });

    if(response.status === 200){
      alert("Registered");
    }


    // const isValidated = validate();
    // if (isValidated) {
    //   console.log(formData);

    //   //sending formdata as a request to backend server
    //   //   const response = await fetch("http://localhost:8000/register",{
    //   //     method: "POST",
    //   //     headers: {"Content-Type": "application/json"},
    //   //     credentials: 'include',
    //   //     body: JSON.stringify(formData)
    //   //   });

    //   //   if(response.status === 200){
    //   //     alert("Registered");
    //   //     const user = await response.json();
    //   //     sessionStorage.setItem("user",JSON.stringify(user));
    //   //     window.location.href = "/";
    //   //   }else{
    //   //     const error = await response.json();
    //   //     alert(error.error);
    //   //   }
    // } else {
    //   console.log("error");
    // }
  };

  return (
    <form onSubmit={handleSubmit} class="supplierContainer">
      <NavBar />
      {/* <div className="supplierBannerImg">

                <img src="https://ffpct.com/wp-content/uploads/2018/09/image8.jpg" alt="" />
            </div> */}

      <div className="supplierCardContainer">
        <div className="supplierCard">
          <h1>Become a Supplier</h1>
        </div>
      </div>

      <div className="formContainer">
        <div className="formImg">
          <img src={FormImg} alt="" />
        </div>

        <div className="formDetails">
          <div className="detailsContainer">
            <div className="firstName">
              <label htmlFor=""> FIRST NAME</label>
              <div className="formInput">
                <input
                  name="firstName"
                  onChange={handleInputChange}
                  type="text"
                  value={formData.firstName}
                />
              </div>
            </div>
            <div className="lastName">
              <label htmlFor=""> LAST NAME</label>
              <div className="formInput">
                <input
                  name="lastName"
                  onChange={handleInputChange}
                  type="text"
                  value={formData.lastName}
                />
              </div>
            </div>
          </div>

          <div className="detailsContainer">
            <div className="email">
              <label htmlFor=""> EMAIL</label>
              <div className="formInput">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>
            <div className="organizationName">
              <label htmlFor=""> ORGANIZATION NAME</label>
              <div className="formInput">
                <input
                  name="orgName"
                  type="text"
                  onChange={handleInputChange}
                  value={formData.orgName}
                />
              </div>
            </div>
          </div>

          <div className="detailsContainer">
            <div className="location">
              <label htmlFor=""> ORGANIZATION'S LOCATION</label>
              <div className="formInput">
                <input
                  value={formData.orgLoc}
                  onChange={handleInputChange}
                  name="orgLoc"
                  type="text"
                />
              </div>
            </div>
            <div className="ProductName">
              <label htmlFor=""> PRODUCT NAME</label>
              <div className="formInput">
                <input
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="orgDescription">
            <label htmlFor=""> ABOUT ORGANIZATION</label>
            <div className="AboutInput">
              <input
                name="aboutOrg"
                type="text"
                value={formData.aboutOrg}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="detailsContainer">
            <div className="productPrice">
              <label htmlFor=""> PRODUCT RATE</label>
              <div className="formInput">
                <input
                  name="productRate"
                  value={formData.productRate}
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>
            <div className="minimumOrderQuantity">
              <label htmlFor=""> MINIMUM ORDER QUANTITY</label>
              <div className="formInput">
                <input
                  value={formData.minOrder}
                  name="minOrder"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="productSampleImg">
            <label htmlFor=""> UPLOAD PRODUCT IMAGES</label>

            <div className="imgInput">
              <input type="file" name="productImage1" alt="" />

              <input type="file" name="productImage2" alt="" />

              <input type="file" name="productImage3" alt="" />
            </div>

            <div className="ButtonContainer">
              <button type="submit" className="formSubmitButton">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </form>
  );
}

export default Supplier;
