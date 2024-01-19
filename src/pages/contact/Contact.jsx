import React from "react";
import "./Contact.css";
import GitHubIcon from '../../assets/githubIcon.png';
import MailIcon from '../../assets/emailIcon.png';
import PhoneIcon from '../../assets/phone.png';
import LinkedinIcon from '../../assets/Linkedin.png';


function Contact() {
 

  return (
    <section id="contact" className="block-contact">
     
    <div className="container mt-5">
      <h2 className="mb-4">Coordonnées</h2>

      <div className="contact-items">
        <div className="col-md-6">
          <section className="row contact-item">
          <p>
            <img src={MailIcon} alt="icon of mailing" className="icon" />
            <strong>Email:</strong> houda.bouslama81@hotmail.com
          </p>
          </section>
          <section className="row contact-item">
          <p>
          <img src={PhoneIcon} alt="icon of phone" className="icon"/>
            <strong>Téléphone:</strong> +33 6 67 60 36 11
          </p>
          </section>
          <section className="row contact-item link">
          <p>
          <img src={LinkedinIcon} alt="icon of linkedin link"  className="icon" />
            <strong>LinkedIn :</strong>{' '}
            <a href="https://www.linkedin.com/in/houda-bouslama-9b64373b/" target="_blank" rel="noopener noreferrer">
            Mon Profil LinkedIn
            </a>
          </p>
          </section>
          <section className="row contact-item link">
          <p>
          <img src={GitHubIcon} alt="icon of gitHub link"  className="icon"/>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/HOUBOUS" target="_blank" rel="noopener noreferrer">
              Mon Profil GitHub
            </a>
          </p>
          </section>
        </div>
      </div>
    </div>



   
   
  
    </section>
  );
}

export default Contact;
