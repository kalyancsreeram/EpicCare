import React from "react";
import { useState } from "react";
import axios from "axios";
import { CONSTANTS } from "../../../../Constants";
import "./OrderFormOther.scss";
import { Alert, Button, TextField } from "@mui/material";
import FadeLoader from "react-spinners/FadeLoader";

function OrderFormOther(props) {
  const { typeOfService } = props;

  const [formData, setFormData] = useState({
    drName: "",
    hospital: "",
    contactInfo: "",
    message: "",
    typeOfService: typeOfService,
  });
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    type: "success",
    shouldShow: false,
  });

  const spinnerColor = "#9b2c79";
  const overrideStyle = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const spinnerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2",
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    document.getElementById("patientFormOther").disabled = true;
    setLoading(true);
    event.preventDefault();
    axios
      .post(`${CONSTANTS.serverURL}/patientform`, { ...formData })
      .then((response) => {
        console.log(response);
        setFormData({ drName: "", hospital: "", contactInfo: "", message: "" });
        const successAlert = {
          type: "success",
          shouldShow: true,
        };
        setAlert(successAlert);
        // alert("Data has been successfully sent...");
      })
      .catch(() => {
        const errorAlert = {
          type: "error",
          shouldShow: true,
        };
        setAlert(errorAlert);
        // alert("Something went wrong. Try again later");
      })
      .finally(() => {
        document.getElementById("patientFormOther").disabled = false;
        setLoading(false);
      });
  };

  const { drName, hospital, contactInfo, message } = formData;

  return (
    <>
      <div style={spinnerStyle}>
        <FadeLoader
          color={spinnerColor}
          loading={loading}
          cssOverride={overrideStyle}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div className="other-form-alert-container">
        {alert.shouldShow && (
          <Alert
            severity={alert.type}
            onClose={() => {
              setAlert({});
            }}
            className="alert-message-other"
          >
            {alert.type === "success"
              ? `Your form has been submitted successfully! Thank you for your input.`
              : `There was an error submitting your form. Please check your information and try again.`}
          </Alert>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        id="patientFormOther"
        className="order-form-other"
      >
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
    </>
  );
}

export default OrderFormOther;
