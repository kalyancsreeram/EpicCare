import React, { useState } from "react";
import "./ContactForm.scss";
import { countriesList } from "../../../data/countries";
import { Alert, Button, MenuItem, TextField, Typography } from "@mui/material";
import FadeLoader from "react-spinners/FadeLoader";

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
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const formElement = document.getElementById("contactForm");
    const formData = new FormData(formElement);
    console.log(process.env.REACT_APP_FORMSUBMIT_URL);

    formData.append("submission_id", Date.now().toString());

    fetch(process.env.REACT_APP_FORM_SUBMIT_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setAlert({ type: "success", shouldShow: true });
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            country: "India",
            message: "",
          });
        } else {
          setAlert({ type: "error", shouldShow: true });
          throw new Error("Failed to submit form");
        }
      })
      .catch(() => {
        setAlert({ type: "error", shouldShow: true });
      })
      .finally(() => {
        setLoading(false);
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

  const uniqueId = Date.now();

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
      <div className="contact-page__info">
        <Typography
          className="main-title"
          gutterBottom
          variant="h1"
          component="div"
        >
          Contact Us
        </Typography>

        <p id="contactPageHeadline"> Thank you for choosing SeizureCare.</p>
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
              : `There was an error submitting your form. Please try again.`}
          </Alert>
        )}
        <form onSubmit={handleSubmit} id="contactForm" className="contact-form">
          <input type="hidden" name="submission_id" value={uniqueId} />
          <input type="hidden" name="_captcha" value="false" />
          <TextField
            type="text"
            id="fName"
            name="firstname"
            className="form__input"
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
            className="form__input"
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
            className="form__input"
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
            className="form__input"
            label="Phone Number"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
            helperText="Please provide your contact number."
            required
          />
          <TextField
            select
            className="form__dropdown"
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
            className="form__input form__text-area"
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
            className="form__submit-button"
            type="submit"
            id="formSubmitBtn"
            size="large"
          >
            Submit
          </Button>
        </form>
      </div>
      <div className="contact-page__note">
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
