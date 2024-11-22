import React from "react";
import { useState } from "react";
import axios from "axios";
import { CONSTANTS } from "../../../../Constants";
import "./OrderFormOther.scss";
import { Button, TextField } from "@mui/material";

function OrderFormOther(props) {
  const { typeOfService } = props;

  const [formData, setFormData] = useState({
    drName: "",
    hospital: "",
    contactInfo: "",
    message: "",
    typeOfService: typeOfService,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post(`${CONSTANTS.serverURL}/patientform`, { ...formData })
      .then((response) => {
        console.log(response);
        setFormData({ drName: "", hospital: "", contactInfo: "", message: "" });
        alert("Data has been successfully sent...");
      })
      .catch(() => {
        alert("Something went wrong. Try again later");
      });
  };

  const { drName, hospital, contactInfo, message } = formData;

  return (
    <form onSubmit={handleSubmit} className="order-form-other">
      <TextField
        className="order-form-other__input"
        type="text"
        id="drName"
        name="drName"
        value={drName}
        onChange={handleChange}
        label="Doctor's Name"
        helperText="Please enter your doctor's name."
        required
      />
      <TextField
        className="order-form-other__input"
        type="text"
        id="hospital"
        name="hospital"
        label="Hospital"
        value={hospital}
        helperText="Please enter your hospital's name."
        onChange={handleChange}
        required
      />
      <TextField
        className="order-form-other__input"
        type="text"
        id="contactInfo"
        name="contactInfo"
        label="Contact Information"
        value={contactInfo}
        helperText="Please enter your contact number."
        onChange={handleChange}
        required
      />
      <TextField
        className="order-form-other__input order-form-other__text-area"
        id="message"
        name="message"
        label="Please type your message here..."
        helperText="Please enter your message here."
        value={message}
        onChange={handleChange}
        rows={4}
        multiline
        required
      />
      <Button
        variant="contained"
        id="orderformOtherSubmitBtn"
        size="large"
        value="Submit"
        className="order-form-other__submit-button"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default OrderFormOther;
