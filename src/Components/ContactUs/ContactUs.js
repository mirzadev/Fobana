import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import "./ContactUsStyles.css";
import MapComponent from "./MapLocation";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "All fields are required!" });
      return;
    }

    // Send email using EmailJS service
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          setStatus({
            type: "success",
            message: "Your message has been sent successfully!",
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <div>
      <div className="contact-us-container">
        <div className="contactUs_header">
          <h1>CONTACT US</h1>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
              maxLength="1000"
              rows="6"
            />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>

        {status && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}
        <div className="ContactInfo">
          <div className="office-loc">
            <div
              className="fa-solid fa-thumbtack"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Our Office</h2>
            <Link
              to="https://maps.app.goo.gl/xKoCDN1h8z3VPUi1A"
              target="_blank"
              rel="noreferrer"
            >
              <div>4299 West Hillsboro Blvd,</div>
              <div>Coconut Creek, FL-33073</div>
            </Link>
          </div>
          <div className="tel-contact">
            <div
              className="fa-solid fa-phone"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Phone</h2>
            <div className="phoneNumber">1(954) 818-2970 (Cell)</div>
            <div className="phoneNumber">1(954) 818-2970 (Office)</div>
          </div>
          <div className="email-contact">
            <div
              className="fa-solid fa-envelope"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Email</h2>
            <Link
              to="mailto:fobanac@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p className="email-address">fobanac@gmail.com</p>
            </Link>
          </div>
        </div>
        <div>
          <p>
            <strong>FOBANA General Email:</strong>{" "}
            <a
              href="mailto:fobanac@gmail.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              fobanac@gmail.com
            </a>
          </p>
          <p>
            <strong>Chairperson:</strong>{" "}
            <a
              href="mailto:rahman355@yahoo.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Atiquer Rahman
            </a>{" "}
            -{" "}
            <a
              href="mailto:rahman355@yahoo.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              rahman355@yahoo.com
            </a>
          </p>
          <p>
            <strong>Vice Chairperson:</strong>{" "}
            <a
              href="mailto:poetryisdivine@gmail.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zahid Hossain
            </a>{" "}
            -{" "}
            <a
              href="mailto:poetryisdivine@gmail.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              poetryisdivine@gmail.com
            </a>
          </p>
          <p>
            <strong>Exec. Secretary:</strong>{" "}
            <a
              href="mailto:rafiq.i.khan@gmail.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Rafiq Khan
            </a>{" "}
            -{" "}
            <a
              href="mailto:rafiq.i.khan@gmail.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              rafiq.i.khan@gmail.com
            </a>
          </p>
          <p>
            <strong>Joint Exec. Secretary:</strong>{" "}
            <a
              href="mailto:mdhaka137@yahoo.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mohamed Kabir Kiron
            </a>{" "}
            -{" "}
            <a
              href="mailto:mdhaka137@yahoo.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              mdhaka137@yahoo.com
            </a>
          </p>
          <p>
            <strong>Treasurer:</strong>{" "}
            <a
              href="mailto:nill.pahar@gmail.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              SM Lotiful Reza Tushar
            </a>{" "}
            -{" "}
            <a
              href="mailto:nill.pahar@gmail.com"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              nill.pahar@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="Official_Contact">
        <div className="map_header">
          <h1>ON YOUR MAP</h1>
        </div>
        <div className="map-location">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
