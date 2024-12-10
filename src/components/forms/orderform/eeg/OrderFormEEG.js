import React, { useState } from "react";
import "./OrderFormEEG.scss";

import axios from "axios";
import UploadComp from "../UploadComp";
import FadeLoader from "react-spinners/FadeLoader";
import { Alert, Button, MenuItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function OrderFormEEG() {
  const [formData, setFormData] = useState({
    typeOfService: "EEG Services",
    firstname: "",
    lastname: "",
    dob: "",
    gender: "male",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    uid: "",
    eegType: "",
    advisingDoctor: "",
    timeslot: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [additionalFields, setAdditionalFields] = useState([]);
  const [count, setCount] = useState(0);

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
    top: "50%",
    position: "fixed",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2",
  };

  const genders = [
    { value: "male", title: "Male" },
    { value: "female", title: "Female" },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      files: [...formData.files, event.target.files[0]],
    }));
  };

  const addField = () => {
    setCount(count + 1);
    setAdditionalFields([...additionalFields, { name: `file${count + 1}` }]);
  };
  const deleteFile = (fieldName, uploadedFileName) => {
    setAdditionalFields([
      ...additionalFields.filter((field) => field.name !== fieldName),
    ]);
    setFormData((prevState) => ({
      ...prevState,
      files: [
        ...formData.files.filter((file) => file.name !== uploadedFileName),
      ],
    }));
  };

  // const calculate_age = ({ $D, $M, $y, $d }) => {
  //   const birthDate = new Date($y, $M, $D);
  //   // console.log($y, $M, $D);
  //   // let age_now = today.getFullYear() - birthDate.getFullYear();
  //   // const m = today.getMonth() - birthDate.getMonth();
  //   // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //   //   age_now--;
  //   // }

  //   const options = { day: "2-digit", month: "short", year: "numeric" };
  //   birthDate.toLocaleDateString("en-GB", options).replace(",", "");

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     dob: `${$d} - [Age: ${age_now}]`,
  //   }));
  // };

  const setDate = ({ $D, $M, $y }) => {
    const birthDate = new Date($y, $M, $D);
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const formattedDate = birthDate
      .toLocaleDateString("en-GB", options)
      .replace(",", "");

    setFormData((prevState) => ({
      ...prevState,
      dob: formattedDate,
    }));
  };

  const submitHandler = (event) => {
    // document.getElementById("patientFormEEG").disabled = true;
    setLoading(true);
    event.preventDefault();
    patientFormSubmit();
  };

  const patientFormSubmit = () => {
    const formElement = document.getElementById("patientFormEEG");
    const formData = new FormData(formElement);
    console.log(process.env.REACT_APP_FORMSUBMIT_URL);

    formData.append("submission_id", Date.now().toString());

    fetch(process.env.REACT_APP_FORM_SUBMIT_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setFormData({
            firstname: "",
            lastname: "",
            dob: "",
            gender: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
            uid: "",
            eegType: "",
            advisingDoctor: "",
            timeslot: "",
            message: "",
          });
          const successAlert = {
            type: "success",
            shouldShow: true,
          };
          setAlert(successAlert);
        } else {
          setAlert({ type: "error", shouldShow: true });
          throw new Error("Failed to submit form");
        }
      })
      .catch(() => {
        setAlert({
          type: "error",
          shouldShow: true,
        });
      })
      .finally(() => {
        document.getElementById("patientFormEEG").disabled = false;
        setLoading(false);
      });
  };

  const uniqueId = Date.now();

  return (
    <div className="eeg-form-container">
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
      <div className="eeg-alert-container">
        {alert.shouldShow && (
          <Alert
            severity={alert.type}
            onClose={() => {
              setAlert({});
            }}
            className="alert-message-eeg"
          >
            {alert.type === "success"
              ? `Your form has been submitted successfully! Thank you for your input.`
              : `There was an error submitting your form. Please check your information and try again.`}
          </Alert>
        )}
      </div>
      {/* <div className="eeg-form-container"> */}
      <form
        className="order-form-eeg"
        id="patientFormEEG"
        onSubmit={submitHandler}
      >
        <input type="hidden" name="submission_id" value={uniqueId} />
        <input type="hidden" name="_captcha" value="false" />
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="fname"
          name="firstname"
          label="First name"
          value={formData.firstname}
          onChange={handleChange}
          helperText="Please enter your first name."
          required
        />
        {/* <label className="boldText" htmlFor="fname">
            Patient First Name
          </label>
          <input
            className="order-form-eeg__input"
            type="text"
            id="fname"
            name="firstname"
            placeholder="First name"
            value={formData.firstname}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="lname"
          name="lastname"
          label="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          helperText="Please enter your last name."
          required
        />
        {/* <label className="boldText" htmlFor="lname">
            Patient Last Name
          </label>
          <input
            className="order-form-eeg__input"
            type="text"
            id="lname"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          /> */}
        {/* //TODO: Fix the calendar */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DemoItem label="Date of Birth*">
              <DatePicker
                className="order-form-eeg__input"
                name="serviceend"
                onChange={({ $D, $M, $y }) => {
                  setDate({ $D, $M, $y });
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
        {/* <label className="boldText" htmlFor="dob">
            Date Of Birth
          </label>{" "}
          {age > 0 && <label> [Age: {age}]</label>}
          <input
            className="order-form-eeg__input"
            type="date"
            id="dob"
            name="serviceend"
            placeholder="dd-mm-yyyy"
            onChange={(event) => setAge(calculate_age(event.target.value))}
          /> */}
        <TextField
          select
          className="order-form-eeg__input order-form-eeg__dropdown"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          helperText="Please select your gender."
        >
          {genders.map((gender) => (
            <MenuItem key={gender.value} value={gender.value}>
              {gender.title}
            </MenuItem>
          ))}
        </TextField>
        {/* <label className="boldText">Gender</label> */}
        {/* <select
            className="multiSet"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select> */}
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="address"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          helperText="Please enter your address line 1."
          label="Address Line 1"
          required
        />
        {/* <label className="boldText" htmlFor="address">
            Address
          </label>
          <input
            className="order-form-eeg__input"
            type="text"
            id="address"
            name="addressLine1"
            placeholder="Street Address"
            value={formData.addressLine1}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="address2"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          label="Address Line 2"
          helperText="Please enter your address line 2."
        />
        {/* <input
            className="order-form-eeg__input"
            type="text"
            id="address2"
            name="addressLine2"
            placeholder="Address Line #2"
            value={formData.addressLine2}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="city"
          name="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
          helperText="Please enter your City."
        />
        {/* <label className="boldText" htmlFor="city">
            City
          </label>
          <input
            className="order-form-eeg__input"
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="state"
          name="state"
          label="State"
          value={formData.state}
          onChange={handleChange}
          helperText="Please enter your State."
        />
        {/* <label className="boldText" htmlFor="state">
            State
          </label>
          <input
            className="order-form-eeg__input"
            type="text"
            id="state"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="number"
          id="zip"
          name="zip"
          label="Zip Code"
          value={formData.zip}
          onChange={handleChange}
          helperText="Please enter your Zip Code."
        />
        {/* <label className="boldText" htmlFor="zip">
            ZIP Code
          </label>
          <input
            className="order-form-eeg__input"
            type="number"
            id="zip"
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="number"
          id="phone"
          name="phone"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          helperText="Please enter your Contact Number."
        />
        {/* <label className="boldText" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="order-form-eeg__input"
            type="number"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          helperText="Please enter your Email address."
        />
        {/* <label className="boldText" htmlFor="email">
            Email
          </label>
          <input
            className="order-form-eeg__input"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="uid"
          name="uid"
          label="UID"
          value={formData.uid}
          onChange={handleChange}
          helperText="Please enter your UID."
        />
        {/* <label className="boldText" htmlFor="uid">
            UID
          </label>
          <input
            className="order-form-eeg__input"
            type="text"
            id="uid"
            name="uid"
            placeholder="Uid"
            value={formData.uid}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="eegType"
          name="eegType"
          label="EEG Type"
          value={formData.eegType}
          onChange={handleChange}
          helperText="Please enter your EEG Type."
        />
        {/* <label className="boldText" htmlFor="eegType">
            Type of EEG
          </label>
          <input
            className="order-form-eeg__input"
            type="text"
            id="eegType"
            name="eegType"
            placeholder="EEG Type"
            value={formData.eegType}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="advisingDr"
          name="advisingDoctor"
          label="Advising Doctor"
          value={formData.advisingDoctor}
          onChange={handleChange}
          helperText="Please enter your Advising Doctor."
        />
        {/* <label className="boldText" htmlFor="advisingDr">
            Advising Doctor
          </label>
          <input
            className="order-form-eeg__input"
            type="text"
            id="advisingDr"
            name="advisingDoctor"
            placeholder="Advising Doctor"
            value={formData.advisingDoctor}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input"
          type="text"
          id="timeSlot"
          name="timeslot"
          label="Time Slot"
          value={formData.timeslot}
          onChange={handleChange}
          helperText="Please enter a Time Slot."
        />
        {/* <label className="boldText" htmlFor="timeSlot">
            Time Slot
          </label>
          <input
            className="order-form-eeg__input"
            type="text"
            id="timeSlot"
            name="timeslot"
            placeholder="Time Slot"
            value={formData.timeslot}
            onChange={handleChange}
          /> */}
        <TextField
          className="order-form-eeg__input order-form-eeg__text-area"
          id="message"
          name="message"
          label="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          helperText="Please enter your message here."
          multiline
          required
        />
        {/* <label className="boldText" htmlFor="message">
            Message
          </label>
          <textarea
            className="orderTextArea orderFormInputElement"
            id="message"
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
          /> */}
        {additionalFields.map((field, index) => {
          return (
            <UploadComp
              key={field.name}
              fieldName={field.name}
              handleFileChange={handleFileChange}
              addField={addField}
              deleteFile={deleteFile}
              elementIndex={index}
            ></UploadComp>
          );
        })}
        <Button
          variant="contained"
          id="orderformEEGSubmitBtn"
          size="large"
          value="Submit"
          type="submit"
          className="order-form-eeg__submit-button"
        >
          Submit
        </Button>
        {/* <button
            type="submit"
            className="order-form-eeg__input inputSubmit"
            onClick={submitHandler}
          >
            Submit
          </button> */}
      </form>
      {/* </div> */}
    </div>
  );
}

export default OrderFormEEG;
