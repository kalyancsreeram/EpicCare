import React, { useState } from "react";
import PatientFormComp from "../../components/patientform/PatientFormComp";
import PatientFormComp2 from "../../components/patientform/PatientFormComp2";
import "./Order.scss";
import { Typography } from "@mui/material";

function Order() {
  const [typeOfService, setTypeOfService] = useState("EEG");

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
          <option value="EEG">EEG Services</option>
          <option value="EpilepsyCare">Epilepsy Care</option>
          <option value="EMU">EMU Services</option>
          <option value="EpilepsySurgicalEvaluation">
            Epilepsy Surgical Evaluation
          </option>
        </select>
      </form>

      {typeOfService === "EEG" && <PatientFormComp />}
      {typeOfService === "EpilepsyCare" && (
        <PatientFormComp2 typeOfService="EpilepsyCare" />
      )}
      {typeOfService === "EMU" && <PatientFormComp2 typeOfService="EMU" />}
      {typeOfService === "EpilepsySurgicalEvaluation" && (
        <PatientFormComp2 typeOfService="EpilepsySurgicalEvaluation" />
      )}
    </div>
  );
}

export default Order;
