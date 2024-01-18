import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSuccess = Math.random() < 0.5;
    // simule une réussite ou une erreur aléatoire.
    if (isSuccess) {
      setSuccessMessage("Le formulaire a été envoyé avec succès !");
      setErrorMessage("");
    } else {
      setErrorMessage(
        "Ouups!Une erreur est survenue lors de l'envoi du formulaire."
      );
      setSuccessMessage("");
    }
  };

  return (
    <section id="contact" className="block-contact">
      <form onSubmit={handleSubmit}>
        <div className="row-contact">
          <span className="short-label">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>

          <input
            id="firstName"
            type="text"
            className="form-control"
            placeholder="Fist Name"
            aria-label="First name"
            aria-describedby="firstNameError"
          />
          </span>
<span className="short-label">
          <label htmlFor="lastName" className="form-label">
          Last Name
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            aria-label="Last name"
            aria-describedby="LastNameError"
          />
          </span>
        </div>

        <div className="long-label">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="e-mail"
            aria-label="email"
            aria-describedby="emailError"
          />
        </div>
<div className="row-contact">
        <div className="short-label">
          <label htmlFor="inputPhone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputPhone"
            placeholder="Phone"
          />
        </div>
        <div className="short-label">
          <label htmlFor="inputCity" className="form-label">
           Adress
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Adress"
            aria-label="Adress"
            aria-describedby="AdressError"
          />
        </div>
        </div>
        <div className="long-label">
          <label htmlFor="inputSubject" className="form-label">
            message
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSubject"
            placeholder="Message"
            aria-label="inputSubject"
            aria-describedby="inputSubjectError"
          />
        </div>
        <div className="my-message">
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </div>
        {successMessage && <div className="text-success">{successMessage}</div>}

        {errorMessage && <div className="text-danger">{errorMessage}</div>}
      </form>
    </section>
  );
}

export default Contact;
