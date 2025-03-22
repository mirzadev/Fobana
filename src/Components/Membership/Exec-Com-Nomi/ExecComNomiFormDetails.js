// install-- npm install @emailjs/browser
// email used: fashioncorporation062@gmail.com

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ExecComNomiFormDetailsStyles.css";
import MembershipFee_Logo from "../../../Assets/Cover/Fobana_Logo.png";

const ExecMembershipFormDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    mailingAddress: "",
    contactNumber: "",
    email: "",
    membershipPosition: "",
    membershipFee: "",
    organizationName: "",
    website: "",
    facebookId: "",
    nominatorInfo: "",
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
      organizationName: formData.organizationName || "Not Provided",
      mailingAddress: formData.mailingAddress || "Not Provided",
      email: formData.email || "Not Provided",
      membershipPosition: formData.membershipPosition || "Not Provided",
      membershipFee: formData.membershipFee || "Not Provided",
      organizationName: formData.organizationName || "Not Provided",
      website: formData.website || "N/A",
      facebookId: formData.facebookId || "N/A",
      nominatorInfo: formData.nominatorInfo || "Not Provided",
    };

    emailjs
      .send(
        "service_z8nccqj",
        "template_0ebn9ki",
        templateParams,
        "SwHg93qG0zsPDuvPt"
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
            membershipPosition: "",
            membershipFee: "",
            organizationName: "",
            website: "",
            facebookId: "",
            nominatorInfo: "",
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
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <div className="FOBANA_logo">
        <img id="Fobana-logo" src={MembershipFee_Logo} alt="FOBANA Logo" />
      </div>
      ;
      <h2 style={{ textAlign: "center" }}>
        FOBANA Executive Membership Nomination Form: 2024-25
      </h2>
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
          Please Select Membership Position: <span className="required">*</span>
        </label>
        <select
          name="membershipPosition"
          style={{ width: "101%" }}
          value={formData.membershipPosition}
          onChange={handleChange}
          required
        >
          <option value="">Please Select Membership Position</option>
          <option value="Chairperson">Chairperson</option>
          <option value="Vice Chairperson">Vice Chairperson</option>
          <option value="Executive Secretary">Executive Secretary</option>
          <option value="Joint Executive Secretary">
            Joint Executive Secretary
          </option>
          <option value="Treasurer">Treasurer</option>
          <option value="Outstanding Members">Outstanding Members</option>
          <option value="Executive Members">Executive Members</option>
        </select>

        <label>Please Select Membership Fee:</label>
        <select
          name="membershipPosition"
          style={{ width: "101%" }}
          value={formData.membershipPosition}
          onChange={handleChange}
          required
        >
          <option value="">Please Select the Nomination Fee</option>
          <option value="Chairperson">Chairperson: $500.00</option>
          <option value="Vice Chairperson">Vice Chairperson: $500.00</option>
          <option value="Executive Secretary">
            Executive Secretary: $500.00
          </option>
          <option value="Joint Executive Secretary">
            Joint Executive Secretary: $300.00
          </option>
          <option value="Treasurer">Treasurer: $300.00</option>
          <option value="Outstanding Members">
            Outstanding Members: $100.00
          </option>
          <option value="Executive Members">Executive Members: $100.00</option>
        </select>

        <label>Name of your Organization:</label>
        <input
          type="text"
          name="organizationName"
          placeholder="Name of your Organization"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />

        <label>Website (Optional):</label>
        <input
          type="text"
          name="website"
          placeholder="Website (Optional)"
          value={formData.website}
          onChange={handleChange}
        />

        <label>Facebook ID:</label>
        <input
          type="text"
          name="facebookId"
          placeholder="Facebook ID"
          value={formData.facebookId}
          onChange={handleChange}
          required
        />

        <label>Names of the Nominator:</label>
        <input
          type="text"
          name="nominatorInfo"
          placeholder="Name & Contact Info of at least one(1) Nominator"
          value={formData.nominatorInfo}
          onChange={handleChange}
          required
        />
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
            Submit Nomination
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
      <h2>PAY MEMBERSHIP FEE</h2>
      <p>
        You can pay your membership fee using PayPal, Credit/Debit Card, or
        Zelle.
      </p>
      <div className="membership-payment-options">
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
      <div className="membership-pdf-download">
        <a
          href="/FOBANA_Exec_Committee_Nomination_Application_Form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="membership-pdf-button"
          download
        >
          Download FOBANA Membership Form (PDF)
        </a>
      </div>
    </div>
  );
};

export default ExecMembershipFormDetails;
