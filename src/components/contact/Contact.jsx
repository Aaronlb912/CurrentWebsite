import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ic4y0wk",
        "template_wr4k6xi",
        form.current,
        "MAfef3bwHC1p41m83"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>abryantdev@gmail.com</h5>
            <a href="mailto:abryantdev@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>LinkedIn/aaron-bryant-dev/</h5>
            <a
              href="https://www.linkedin.com/in/aaron-bryant-dev/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+14439381746</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+14439381746"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
