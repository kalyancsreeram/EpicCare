import React, { useState } from "react";
import OrderFormEEG from "../../components/forms/orderform/eeg/OrderFormEEG";
import OrderFormOther from "../../components/forms/orderform/other/OrderFormOther";
import "./Order.scss";
import { Typography } from "@mui/material";
import { orderPageData } from "../../data/data";

function Order() {
  const [typeOfService, setTypeOfService] = useState("EEG");

  const { serviceSelectOptions } = orderPageData;

  const serviceChangeHandler = (event) => {
    setTypeOfService(event.target.value);
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
      </div>
      <div className="order-form-container">
        <form className="service-type-form">
          <label htmlFor="serviceType" className="service-type-form__label">
            Type of service
          </label>
          <select
            className="service-type-form__select"
            name="services"
            id="services"
            value={typeOfService}
            onChange={serviceChangeHandler}
          >
            {serviceSelectOptions.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        </form>

        {typeOfService === "EEG" && <OrderFormEEG />}
        {typeOfService === "EpilepsyCare" && (
          <OrderFormOther typeOfService="EpilepsyCare" />
        )}
        {typeOfService === "EMU" && <OrderFormOther typeOfService="EMU" />}
        {typeOfService === "EpilepsySurgicalEvaluation" && (
          <OrderFormOther typeOfService="EpilepsySurgicalEvaluation" />
        )}
      </div>
    </div>
  );
}

export default Order;
