import React from "react";
import ContactForm from "../components/forms/contactform/ContactForm";
import useScrollToTop from "../hooks/useScrollToTop";

function Contact() {
  useScrollToTop();

  return (
    <div style={{ minHeight: "100vh" }}>
      <ContactForm />
    </div>
  );
}

export default Contact;
