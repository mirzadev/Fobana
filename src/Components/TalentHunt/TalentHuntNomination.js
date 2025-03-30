// install-- npm install @emailjs/browser
// email used: adilebit928@gmail.com   used pspmusic2019 for the service connection

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./TalentHuntNominationStyles.css";
import Fobana_Logo from "../../Assets/Cover/Fobana_Logo.png";
import talent_hunt_logo from "../../Assets/Cover/talent_hunt_fobana.jpg";

const TalentHuntFormDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    mailingAddress: "",
    contactNumber: "",
    email: "",
    talentType: "",
    sectionSelection: "",
    parentName: "",
    parentNumber: "",
    registrationFee: "",
  });

  const [submissionMessage, setSubmissionMessage] = useState({
    text: "",
    type: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "FOBANA",
      user_email: formData.email || "Not Provided",
      name: formData.name || "Not Provided",
      mailingAddress: formData.mailingAddress || "Not Provided",
      contactNumber: formData.contactNumber || "Not Provided",
      email: formData.email || "Not Provided",
      talentType: formData.talentType || "Not Provided",
      sectionSelection: formData.sectionSelection || "Not Provided",
      parentName: formData.parentName || "Not Provided",
      parentNumber: formData.parentNumber || "N/A",
      registrationFee: formData.registrationFee || "Not Provided",
    };

    emailjs
      .send(
        "service_fzyi8pk",
        "template_jbji33j",
        templateParams,
        "5F2s0W__YbrK5jH5U"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          // Show success message
          setSubmissionMessage({
            text: "Form submitted successfully!",
            type: "success",
          });

          // Clear the form immediately after submission
          setFormData({
            name: "",
            mailingAddress: "",
            contactNumber: "",
            email: "",
            talentType: "",
            sectionSelection: "",
            parentName: "",
            parentNumber: "",
            registrationFee: "",
          });

          // Optionally remove the success message after 10 seconds
          setTimeout(() => {
            setSubmissionMessage({ text: "", type: "" });
          }, 10000);
        },
        (error) => {
          console.log("FAILED...", error);

          // Show error message
          setSubmissionMessage({
            text: "Failed to submit form. Please try again.",
            type: "error",
          });

          // Optionally remove the error message after 10 seconds
          setTimeout(() => {
            setSubmissionMessage({ text: "", type: "" });
          }, 10000);
        }
      );
  };

  return (
    <div
      className="talent-container"
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <div className="talent_fobana_logo">
        <img id="talent-Fobana-logo" src={Fobana_Logo} alt="FOBANA Logo" />
      </div>
      ;
      <div className="talent-header-section">
        <img
          id="talent-hunt-logo"
          src={talent_hunt_logo}
          alt="Talent Hunt Logo"
        />
        <h2 style={{ textAlign: "center" }}>
          FOBANA TALENT HUNT REGISTRATION FORM
        </h2>
        <img
          id="talent-hunt-logo"
          src={talent_hunt_logo}
          alt="Talent Hunt Logo"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name of the Applicant: <span className="required">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>
          Mailing Address: <span className="required">*</span>
        </label>
        <textarea
          name="mailingAddress"
          placeholder="Mailing Address"
          value={formData.mailingAddress}
          onChange={handleChange}
          required
          style={{
            width: "98%",
            height: "50px",
            maxHeight: "300px",
            overflowY: "auto",
            resize: "vertical",
          }}
          maxLength={1000} // Assuming an average of 5 characters per word
        ></textarea>

        <label>
          Contact Phone Number: <span className="required">*</span>
        </label>
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Phone Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <label>
          Email Address: <span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>
          Talent Type-Select One: <span className="required">*</span>
        </label>
        <select
          name="talentType"
          style={{ width: "100%" }}
          value={formData.talentType}
          onChange={handleChange}
          required
        >
          <option value="">Select Talent Type</option>
          <option value="Bengali Vocal Music">Bengali Vocal Music</option>
          <option value="Bengali Poetry Recitation">
            Bengali Poetry Recitation
          </option>
          <option value="Dance (Bengali/Indian Classical)">
            Dance (Bengali/Indian Classical)
          </option>
          <option value="Musical Instrument">Musical Instrument</option>
          <option value="Other">Other</option>
        </select>

        <label>
          Select the Section Based on Your Grade :{" "}
          <span className="required">*</span>
        </label>
        <select
          name="sectionSelection"
          style={{ width: "100%" }}
          value={formData.sectionSelection}
          onChange={handleChange}
          required
        >
          <option value="">Select the Section</option>
          <option value="Section A">Section A: Grade 1-6</option>
          <option value="Section B">Section B: Grade 7-12</option>
        </select>

        <label>
          Name of your Parents or Legal Guardians: :
          <span className="required">*</span>
        </label>
        <input
          type="name"
          name="parentName"
          placeholder="Type the name of your father, mother, or guardian:"
          value={formData.parentName}
          onChange={handleChange}
          required
        />

        <label>
          Type the Phone Numbers of Your Parents or Guardians:{" "}
          <span className="required">*</span>
        </label>
        <input
          type="tel"
          name="parentNumber"
          placeholder="Phone number of your parents or guardians"
          value={formData.parentNumber}
          onChange={handleChange}
          required
        />
        <label>
          Registration Fee: <span className="required">*</span>
        </label>
        <select
          name="registrationFee"
          style={{ width: "100%" }}
          value={formData.registrationFee}
          onChange={handleChange}
          required
        >
          <option value="">Select One</option>
          <option value="Bengali Vocal Music">Bengali Vocal Music-$20</option>
          <option value="Bengali Poetry Recitation">
            Bengali Poetry Recitation-$20
          </option>
          <option value="Dance (Bengali/Indian Classical)">
            Dance (Bengali/Indian Classical)-$20
          </option>
          <option value="Musical Instrument">Musical Instrument-$20</option>
          <option value="Other">Other-$20</option>
        </select>

        <div>
          <button
            type="submit"
            id="submit-button"
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit Application
          </button>
          {submissionMessage.text && (
            <p
              className={
                submissionMessage.type === "success"
                  ? "success-message"
                  : "error-message"
              }
            >
              {submissionMessage.text}
            </p>
          )}
        </div>
      </form>
      <h2>PAY YOUR FEE</h2>
      <p>You can pay your fee using PayPal, Credit/Debit Card, or Zelle.</p>
      <div className="talent-payment-options">
        {/* PayPal Payment */}
        <a
          href="https://www.paypal.com/donate/?business=fobanac@gmail.com&currency_code=USD"
          target="_blank"
          rel="noopener noreferrer"
          className="paypal-button"
        >
          Pay with PayPal
        </a>

        {/* Debit/Credit Card Payment */}
        <a
          href="https://www.paypal.com/donate/?business=fobanac@gmail.com&no_recurring=0&currency_code=USD"
          target="_blank"
          rel="noopener noreferrer"
          className="card-button"
        >
          Pay with Debit / Credit Card
        </a>

        {/* Zelle Payment (Instructions Only, No Direct Link) */}
        <p>
          To pay via <strong>Zelle</strong>, send payment to:
          <br />
          <strong>fobanac@gmail.com</strong>
        </p>
      </div>
      <div className="talent-pdf-download">
        <a
          href="/FOBANA_Exec_Committee_Nomination_Application_Form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="talent-pdf-button"
          download
        >
          Download FOBANA talent Form (PDF)
        </a>
      </div>
    </div>
  );
};

export default TalentHuntFormDetails;
