import React from "react";
import "./Contact.css";
import GitHubIcon from '../../assets/githubIcon.png';


function Contact() {
 

  return (
    <section id="contact" className="block-contact">
     
    <div className="container mt-5">
      <h2 className="mb-4">Coordonnées</h2>

      <div className="row">
        <div className="col-md-6">
          <p>
            <img src="MailIcon" alt="" className="icon" />
            <strong>Email:</strong> houda.bouslama81@hotmail.com
          </p>
          <p>
          <img src="PhoneIcon" alt="icon of phone" />
            <strong>Téléphone:</strong> +33 6 67 60 36 11
          </p>
          <p>
          <img src="LinkedinIcon" alt="icon of linkedin link" />
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/houda-bouslama-9b64373b/" target="_blank" rel="noopener noreferrer">
              Votre Profil LinkedIn
            </a>
          </p>
          <p>
          <img src={GitHubIcon} alt="icon of gitHub link"  className="icon"/>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/HOUBOUS" target="_blank" rel="noopener noreferrer">
              Votre Profil GitHub
            </a>
          </p>
        </div>
      </div>
    </div>



   
   
  
    </section>
  );
}

export default Contact;
