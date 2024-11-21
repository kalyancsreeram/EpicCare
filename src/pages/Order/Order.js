import React, { useState } from "react";
import OrderFormEEG from "../../components/forms/orderform/eeg/OrderFormEEG";
import OrderFormOther from "../../components/forms/orderform/other/OrderFormOther";
import "./Order.scss";
import { MenuItem, TextField, Typography } from "@mui/material";
import { orderPageData } from "../../data/data";

function Order() {
  const [typeOfService, setTypeOfService] = useState("EEG");

  const { services } = orderPageData;

  const serviceChangeHandler = (event) => {
    setTypeOfService(event.target.value);
  };

  const displayForm = () => {
    switch (typeOfService) {
      case "EEG":
        return <OrderFormEEG />;
      case "EpilepsyCare":
        return <OrderFormOther typeOfService="EpilepsyCare" />;
      case "EMU":
        return <OrderFormOther typeOfService="EMU" />;
      case "EpilepsySurgicalEvaluation":
        return <OrderFormOther typeOfService="EpilepsySurgicalEvaluation" />;
      default:
        break;
    }
  };

  return (
    <div className="order-page-container">
      <div className="order-page__info">
        <Typography
          className="main-title"
          gutterBottom
          variant="h1"
          component="div"
        >
          Order Online
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          className="order-page__text--default"
          id="orderPageHeadline"
        >
          SeizureCare provides cutting-edge, remote care through a range of
          specialized services, delivering comprehensive support to providers
          dealing with epilepsy patients.
        </Typography>
        <p className="order-page__text--default">
          Thank you for choosing SeizureCare. Complete the form below, and we’ll
          confirm your request promptly.
        </p>
      </div>

      <div className="service-select-container">
        <TextField
          select
          className="service-type-input__select"
          name="services"
          id="servicesSelect"
          value={typeOfService}
          onChange={serviceChangeHandler}
          helperText="Please select a type of service."
        >
          {services.map((service) => (
            <MenuItem key={service.value} value={service.value}>
              {service.title}
            </MenuItem>
          ))}
        </TextField>
      </div>

      {displayForm()}

      <div className="patient-note-container">

        <div className="order-page__note">
          <p>Use this form for general inquiries only.</p>
          <p>
            <b>DO NOT</b> submit any personal health information through this
            form.
          </p>
        </div>

        <p>
          If you have any questions, feel free to contact us at{" "}
          <span className="contactInfo">info@seizurecarenet.com</span>.
        </p>
      </div>
    </div>
  );
}

export default Order;
