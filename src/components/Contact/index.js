
import '../css/Contact.css'
import { FaPhone } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { styled } from 'styled-components';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_893tntk', 'template_chty50g', form.current, 'bdTR8KebrEf9NhuG3')
      .then((result) => {
          console.log(result.text);
          console.log("message send");
      }, (error) => {
          console.log(error.text);
          
      });
  };

  return (
    <section className="contact-me" id="contact">
      <h1 className="heading"> <span className="span">Contact</span> Me </h1>
      <div className="contact-content">
        <div className="info-wrapper">
          <h2 className="info-title">Contact Information</h2>
          <h3 className="info-sub-title"> Fill up the form</h3>
          <ul className="info-details">
            <li>
              <i className='FaPhone'>
              <FaPhone/></i>
              <a href="tel:+639396672655">+639 39 6672 655</a>
            </li>
            <li>
            <i className='FaPhone'>
             <FaLocationPin/></i>
              <a href="">Cabacungan Nabunturan, Davao De Oro</a>
            </li>
            <li>
            <i className='FaPhone'>
              <FaEnvelope/></i>
              <a href="mailto:jonathangumapac0@gmail.com">jonathangumapc0@gmail.com</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
            <a href="https://www.facebook.com/jonathan.gumapac.549">
            <i>
            <FaFacebookSquare/>
            </i>
            </a>
            </li>
            <li>
            <a href="https://www.facebook.com/jonathan.gumapac.549">
            <i>
            <FaDiscord/>
            </i>
            </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/jonathan-gumapac-4ba954281/">
            <i>
            <FaLinkedin/>
            </i>
            </a>
            </li>
          </ul>
        </div>
        <form ref={form} onSubmit={sendEmail} action="" method="POST">
        <div className="form-wrap">
       
            <h2 className="form-title">Send a message</h2>
            <div className="form-fields">
              <div className="form-group">
                <input type="text" required autoComplete="off" name="first_name"/>
                <label htmlFor="first-name">First Name</label>
              </div>
              <div className="form-group">
                <input type="text" required autoComplete="off" name="last_name"/>
                <label htmlFor="last-name">Last Name</label>
              </div>
              <div className="form-group">
                <input type="email" required autoComplete="off" name="user_email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-group">
                <input type="tel"  required autoComplete="off" name="user_phone"/>
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="form-group">
                <textarea id="myTextarea" name="message"  required className="form-control"></textarea>
                <label htmlFor="myTextarea">Write a message</label>
              </div>
            </div>
            <button type="submit"  className="submit-button" value="Send"><p className="text">Send message</p></button>
          
        </div>
        </form>
      </div>
      
    </section>
  );
}

export default Contact