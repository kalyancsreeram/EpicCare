import React, { useState } from "react";
import "./ContactForm.scss";
import { countriesList } from "../../data/countries";
import axios from "axios";
import { CONSTANTS } from "../../Constants";

import FadeLoader from "react-spinners/FadeLoader";
import { Alert, Button, MenuItem, TextField, Typography } from "@mui/material";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "India",
    message: "",
  });

  const [alert, setAlert] = useState({
    type: "success",
    shouldShow: false,
  });

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    document.getElementById("contactForm").disabled = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    event.preventDefault();
    axios
      .post(`${CONSTANTS.serverURL}/contactus`, { ...formData })
      .then(() => {
        setFormData({
          firstname: "",
          lastname: "",
          phone: "",
          country: "India",
          email: "",
          message: "",
        });
        document.getElementById("contactForm").disabled = false;
        setLoading(false);

        const successAlert = {
          type: "success",
          shouldShow: true,
        };

        setAlert(successAlert);
      })
      .catch(() => {
        document.getElementById("contactForm").disabled = false;
        setLoading(false);

        const errorAlert = {
          type: "error",
          shouldShow: true,
        };

        setAlert(errorAlert);
      });
  };

  const loaderColor = "#35294d";
  const loaderStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "999",
  };

  return (
    <div className="contact-page-container">
      <div style={loaderStyle}>
        <FadeLoader
          color={loaderColor}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div className="contact-page-info">
        <Typography
          className="main-title"
          gutterBottom
          variant="h1"
          component="div"
        >
          Contact Us
        </Typography>

        <p> Thank you for choosing SeizureCare.</p>
        <p>
          We value your inquiries and are here to assist you. Please complete
          the form below, and we will respond to your message as soon as
          possible.
        </p>
      </div>
      <div className="contact-form-container">
        {alert.shouldShow && (
          <Alert
            severity={alert.type}
            onClose={() => {
              setAlert({});
            }}
            className="alert-message"
          >
            {alert.type === "success"
              ? `Your form has been submitted successfully! Thank you for your input.`
              : `There was an error submitting your form. Please check your information and try again.`}
          </Alert>
        )}
        <form onSubmit={handleSubmit} id="contactForm" className="contact-form">
          <TextField
            type="text"
            id="fName"
            name="firstname"
            className="form-input"
            label="First Name"
            variant="outlined"
            value={formData.firstname}
            onChange={handleChange}
            helperText="Please enter your first name."
            required
          />
          <TextField
            type="text"
            id="lName"
            name="lastname"
            className="form-input"
            label="Last Name"
            variant="outlined"
            value={formData.lastname}
            onChange={handleChange}
            helperText="Please provide your last name."
            required
          />
          <TextField
            type="email"
            id="email"
            name="email"
            className="form-input"
            label="Email Address"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            helperText="Please enter a valid email address."
            required
          />
          <TextField
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            label="Phone Number"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
            helperText="Please provide your contact number."
            required
          />
          <TextField
            select
            className="form-dropdown"
            name="country"
            id="countrySelect"
            value={formData.country}
            onChange={handleChange}
            helperText="Please select your country."
          >
            {countriesList.map((country) => (
              <MenuItem key={country.code} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="message"
            name="message"
            className="form-input form-text-area"
            label="Type your comments here"
            multiline
            rows={4}
            helperText="Please feel free to leave any comments, questions, or inquiries."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            className="form-submit-button"
            type="submit"
            id="formSubmitBtn"
            size="large"
          >
            Submit
          </Button>
        </form>
      </div>
      <div className="contact-page-note">
        <p>Use this form for general inquiries only.</p>
        <p>
          <b>DO NOT</b> submit any personal health information through this
          form.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
