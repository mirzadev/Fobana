import "./ScholarshipApplicationStyles.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import scholarshipBanner from "../../Assets/Cover/scholarship_docu.jpg";

const ScholarshipApplication = () => {
  const [formData, setFormData] = useState({
    applicantFrom: "",
    name: "",
    phoneNumber: "",
    email: "",
    academicLevel: "",
    academicDetails: "",
    cumulativeGPA: "",
    gpa: "",
    classRank: "",
    references: "",
    income: "",
    communityInvolvement: "",
  });

  const [submissionMessage, setSubmissionMessage] = useState({
    text: "",
    type: "",
  });

  const fileInputRefs = {
    essay: useRef(null),
    transcript: useRef(null),
    acceptanceLetter: useRef(null),
    resume: useRef(null),
    photo: useRef(null),
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "FOBANA",
      user_email: formData.email || "Not Provided",
      applicantFrom: formData.applicantFrom || "Not Provided",
      name: formData.name || "Not Provided",
      phoneNumber: formData.phoneNumber || "Not Provided",
      email: formData.email || "Not Provided",
      academicLevel: formData.academicLevel || "Not Provided",
      academicDetails: formData.academicDetails || "Not Provided",
      cumulativeGPA: formData.cumulativeGPA || "Not Provided",
      gpa: formData.gpa || "Not Provided",
      classRank: formData.classRank || "N/A",
      references: formData.references || "Not Provided",
      income: formData.income || "Not Provided",
      communityInvolvement: formData.communityInvolvement || "Not Provided",
    };

    emailjs
      .send(
        "service_pa61tej",
        "template_sj7prck",
        templateParams,
        "-mxbnisNLlP9FQvVi"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          setSubmissionMessage({
            text: "Form submitted successfully!",
            type: "success",
          });

          // Reset all form fields
          setFormData({
            applicantFrom: "",
            name: "",
            phoneNumber: "",
            email: "",
            academicLevel: "",
            academicDetails: "",
            cumulativeGPA: "",
            gpa: "",
            classRank: "",
            references: "",
            income: "",
            communityInvolvement: "",
          });

          // Reset all file inputs
          Object.keys(fileInputRefs).forEach((key) => {
            if (fileInputRefs[key].current) {
              fileInputRefs[key].current.value = "";
            }
          });

          console.log("Form data after reset:", formData);

          setTimeout(() => {
            setSubmissionMessage({ text: "", type: "" });
          }, 10000);
        },
        (error) => {
          console.log("FAILED...", error);

          setSubmissionMessage({
            text: "Failed to submit form. Please try again.",
            type: "error",
          });

          setTimeout(() => {
            setSubmissionMessage({ text: "", type: "" });
          }, 10000);
        }
      );
  };

  return (
    <div className="scholarship-container">
      <h1>FOBANA SCHOLARSHIP APPLICATION</h1>
      <img
        src={scholarshipBanner}
        alt="Scholarship Banner"
        className="Scholarship-Banner"
      />
      <p>
        For FOBANA Scholarship Application guidelines, please visit:{" "}
        <a
          href="https://fobana.info/scholarship"
          target="_blank"
          rel="noopener noreferrer"
        >
          fobana.info/scholarship
        </a>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="radio-group">
          <h3>
            Scholarship Applicant from:<span className="required">*</span>
          </h3>
          <div className="applicant_From">
            <label>
              <input
                type="radio"
                name="applicantFrom"
                value="USA"
                required
                onChange={handleInputChange}
                checked={formData.applicantFrom === "USA"}
              />
              USA
            </label>
            <label>
              <input
                type="radio"
                name="applicantFrom"
                value="Canada"
                required
                onChange={handleInputChange}
                checked={formData.applicantFrom === "Canada"}
              />
              Canada
            </label>
            <label>
              <input
                type="radio"
                name="applicantFrom"
                value="Bangladesh"
                required
                onChange={handleInputChange}
                checked={formData.applicantFrom === "Bangladesh"}
              />
              Bangladesh
            </label>
          </div>
        </div>
        <label>
          Name of the Applicant <span className="required">*</span>
        </label>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          value={formData.name}
          required
        />

        <label>
          Phone Number <span className="required">*</span>
        </label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone number and also WhatsApp number if possible"
          onChange={handleInputChange}
          value={formData.phoneNumber}
          required
        />

        <label>
          Email Address <span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleInputChange}
          value={formData.email}
          required
        />

        <label>
          Academic Level <span className="required">*</span>
        </label>
        <select
          name="academicLevel"
          onChange={handleInputChange}
          value={formData.academicLevel}
          required
        >
          <option value="">Select</option>
          <option value="High School Graduate">High School Graduate</option>
          <option value="Other">Other</option>
        </select>

        <label>
          Academic Details <span className="required">*</span>
        </label>
        <textarea
          name="academicDetails"
          placeholder="Please include your academic details including the names of the high-school, school address/phone number, name of the post-graduate school (that you are planning to attend), address, and phone number"
          onChange={handleInputChange}
          value={formData.academicDetails}
          required
        ></textarea>
        <label>
          Cumulative GPA: 3.5 or Above <span className="required">*</span>
        </label>
        <select
          name="cumulativeGPA"
          onChange={handleInputChange}
          value={formData.cumulativeGPA}
          required
        >
          <option value="">Select</option>
          <option value="3.5">3.5</option>
          <option value="above">Above</option>
          <option value="below">Below</option>
        </select>
        <label>
          What is Your Cumulative GPA <span className="required">*</span>
        </label>
        <input
          type="text"
          name="gpa"
          placeholder="Enter your cumulative GPA"
          onChange={handleInputChange}
          value={formData.gpa}
          required
        />

        <label>
          Class Rank <span className="required">*</span> (__ /__)
        </label>
        <input
          type="text"
          name="classRank"
          placeholder="Class Rank ________ of _______"
          onChange={handleInputChange}
          value={formData.classRank}
          required
        />

        <label>
          References (Minimum two) <span className="required">*</span>
        </label>
        <textarea
          name="references"
          placeholder="List the names and contact information of your parents and academic references"
          onChange={handleInputChange}
          value={formData.references}
          required
        ></textarea>

        <label>
          Parent's Joint Annual Gross Income <span className="required">*</span>
        </label>
        <input
          type="text"
          name="income"
          placeholder="Enter the joint annual income of your parents into nearest dollar amount"
          onChange={handleInputChange}
          value={formData.income}
          required
        />

        <label>
          Community Involvement (List activities and years involved)
        </label>
        <textarea
          name="communityInvolvement"
          placeholder="Please write details related to any community involvement, especially with Bangladeshi associations, Bangla School/cultural activities, social services etc."
          onChange={handleInputChange}
          value={formData.communityInvolvement}
          required
        ></textarea>
        <div className="qualification-criteria">
          <h3>QUALIFICATION CRITERIA:</h3>
          <ul>
            <li>
              High school seniors from Greater Detroit area (for North America
              Applicants) or high school graduates from Bangladesh (for
              applicants from Bangladesh).
            </li>
            <li>
              Enrolling (first year) in an accredited post-secondary
              university-level educational institution.
            </li>
            <li>GPA: Cumulative GPA 3.5-4.0 (USA).</li>
            <li>
              Submit an essay (min 500 words) on the topic: <br />
              <em>
                “Importance of being identified as Bangladeshi-American/Canadian
                (for applicants living in North America) or Citizen of
                Bangladesh (for applicants from Bangladesh), and explain what
                you would like to do for the community around you.”
              </em>
            </li>
            <li>
              Students with financial needs and academic excellence may receive
              priority.
            </li>
            <li>
              Applicants must qualify for the residency and Citizenship status
              as outlined in the application guidelines.
            </li>
          </ul>
        </div>

        <h3 className="upload-required-documents">UPLOAD REQUIRED DOCUMENTS</h3>
        <label>Upload Essay (PDF)</label>
        <input
          type="file"
          name="essay"
          accept=".pdf"
          required
          ref={fileInputRefs.essay}
        />

        <label>Upload Transcript (PDF)</label>
        <input
          type="file"
          name="transcript"
          accept=".pdf"
          required
          ref={fileInputRefs.transcript}
        />

        <label>Upload College Acceptance Letter (PDF)</label>
        <input
          type="file"
          name="acceptanceLetter"
          accept=".pdf"
          required
          ref={fileInputRefs.acceptanceLetter}
        />

        <label>Upload Resume (PDF)</label>
        <input
          type="file"
          name="resume"
          accept=".pdf"
          required
          ref={fileInputRefs.resume}
        />

        <label>Upload Passport-Size Photo (JPG)</label>
        <input
          type="file"
          name="photo"
          accept=".jpg,.jpeg"
          required
          ref={fileInputRefs.photo}
        />

        <p className="splInstr">
          Please also upload and send all the above files and Photos' separately
          by email at fobanac@gmail.com
        </p>

        <button type="submit">Submit Application</button>
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
      </form>
    </div>
  );
};

export default ScholarshipApplication;
