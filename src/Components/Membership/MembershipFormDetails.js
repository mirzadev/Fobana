// install-- npm install @emailjs/browser
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./MembershipFormDetailsStyles.css";
import MembershipFee_Logo from "../../Assets/Cover/MembershipFee_Logo.png";

const MembershipFormDetails = () => {
  const [formData, setFormData] = useState({
    membershipType: "",
    feeOption: "",
    membershipYear: "",
    organizationName: "",
    mailingAddress: "",
    contactName: "",
    contactPhone: "",
    email: "",
    website: "",
    facebookId: "",
    presidentName: "",
    presidentAddress: "",
    presidentPhone: "",
    presidentEmail: "",
    secretaryName: "",
    secretaryAddress: "",
    secretaryPhone: "",
    secretaryEmail: "",
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

    // Map form data to EmailJS template variables
    const templateParams = {
      to_name: "FOBANA",
      user_name: formData.contactName || "Not Provided",
      user_email: formData.email || "Not Provided",
      membershipType: formData.membershipType || "Not Provided",
      feeOption: formData.feeOption || "Not Provided",
      membershipYear: formData.membershipYear || "Not Provided",
      organizationName: formData.organizationName || "Not Provided",
      mailingAddress: formData.mailingAddress || "Not Provided",
      contactName: formData.contactName || "Not Provided",
      contactPhone: formData.contactPhone || "Not Provided",
      website: formData.website || "N/A",
      facebookId: formData.facebookId || "N/A",
      presidentName: formData.presidentName || "Not Provided",
      presidentAddress: formData.presidentAddress || "Not Provided",
      presidentPhone: formData.presidentPhone || "Not Provided",
      presidentEmail: formData.presidentEmail || "Not Provided",
      secretaryName: formData.secretaryName || "Not Provided",
      secretaryAddress: formData.secretaryAddress || "Not Provided",
      secretaryPhone: formData.secretaryPhone || "Not Provided",
      secretaryEmail: formData.secretaryEmail || "Not Provided",
    };

    emailjs
      .send(
        "service_075tl9a", // Your EmailJS Service ID
        "template_3p6fiaq", // Your EmailJS Template ID
        templateParams,
        "rm9SHCl7xqTnbAUpw" // Your EmailJS Public Key
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
            membershipType: "",
            feeOption: "",
            membershipYear: "",
            organizationName: "",
            mailingAddress: "",
            contactName: "",
            contactPhone: "",
            email: "",
            website: "",
            facebookId: "",
            presidentName: "",
            presidentAddress: "",
            presidentPhone: "",
            presidentEmail: "",
            secretaryName: "",
            secretaryAddress: "",
            secretaryPhone: "",
            secretaryEmail: "",
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
    <div className="membership-container">
      <div className="MembershipFee_logo">
        <img id="Fobana-logo" src={MembershipFee_Logo} alt="FOBANA Logo" />
      </div>
      <h1>FOBANA General Membership Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-box">
          <label>
            Please Select Membership Type: <span className="required">*</span>
          </label>
          <select
            name="membershipType"
            onChange={handleChange}
            value={formData.membershipType}
            required
          >
            <option value="">Select Type</option>
            <option value="new">New Membership</option>
            <option value="renew">Renew Membership</option>
          </select>
        </div>

        <div className="form-box">
          <label>
            Please Select Fee Options: <span className="required">*</span>
          </label>
          <select
            name="feeOption"
            onChange={handleChange}
            value={formData.feeOption}
            required
          >
            <option value="">Select Fee</option>
            <option value="100">Membership Fee - $100.00</option>
          </select>
        </div>

        <div className="form-box">
          <label>
            Membership Year: <span className="required">*</span>
          </label>
          <select
            name="membershipYear"
            onChange={handleChange}
            value={formData.membershipYear}
            required
          >
            <option value="">Select Year</option>
            <option value="2024-2025">2024-2025</option>
            <option value="2025-2026">2025-2026</option>
          </select>
        </div>

        <div className="form-box">
          <label>
            Organization Name: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="organizationName"
            onChange={handleChange}
            value={formData.organizationName}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Mailing Address: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="mailingAddress"
            onChange={handleChange}
            value={formData.mailingAddress}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Contact Name: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="contactName"
            onChange={handleChange}
            value={formData.contactName}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Contact Phone Number: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="contactPhone"
            onChange={handleChange}
            value={formData.contactPhone}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Email Address: <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        {/* Optional Fields */}
        <div className="form-box">
          <label>Website (Optional):</label>
          <input
            type="text"
            name="website"
            onChange={handleChange}
            value={formData.website}
          />
        </div>

        <div className="form-box">
          <label>Facebook ID:</label>
          <input
            type="text"
            name="facebookId"
            onChange={handleChange}
            value={formData.facebookId}
          />
        </div>

        <h2>Executives</h2>

        <div className="form-box">
          <label>
            President/ Chairperson Name: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="presidentName"
            onChange={handleChange}
            value={formData.presidentName}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Address: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="presidentAddress"
            onChange={handleChange}
            value={formData.presidentAddress}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Phone Number: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="presidentPhone"
            onChange={handleChange}
            value={formData.presidentPhone}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Email Address: <span className="required">*</span>
          </label>
          <input
            type="email"
            name="presidentEmail"
            onChange={handleChange}
            value={formData.presidentEmail}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Executive / General Secretary Name:{" "}
            <span className="required">*</span>
          </label>
          <input
            type="text"
            name="secretaryName"
            onChange={handleChange}
            value={formData.secretaryName}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Address: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="secretaryAddress"
            onChange={handleChange}
            value={formData.secretaryAddress}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Phone Number: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="secretaryPhone"
            onChange={handleChange}
            value={formData.secretaryPhone}
            required
          />
        </div>

        <div className="form-box">
          <label>
            Email Address: <span className="required">*</span>
          </label>
          <input
            type="email"
            name="secretaryEmail"
            onChange={handleChange}
            value={formData.secretaryEmail}
            required
          />
        </div>

        <div>
          <button type="submit">Send</button>
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

      <div className="payment-options">
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
      <div className="pdf-download">
        <a
          href="/FOBANA_Membership_Form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-button"
          download
        >
          Download FOBANA Membership Form (PDF)
        </a>
      </div>
    </div>
  );
};

export default MembershipFormDetails;
