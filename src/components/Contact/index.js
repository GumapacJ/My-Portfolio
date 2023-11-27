
import '../css/Contact.css'
import { FaPhone } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { styled } from 'styled-components';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const handleKeyDown = (e) => {
    // Allow: backspace, delete, tab, escape, enter, and . - ( ) space
    if (
      [46, 8, 9, 27, 13, 32, 107, 109, 189, 190].includes(e.keyCode) ||
      // Allow: Ctrl+A, Command+A
      (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl+C, Command+C
      (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl+V, Command+V
      (e.keyCode === 86 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl+X, Command+X
      (e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // Let it happen, don't do anything
      return;
    }

    // Check if the length is already 13, and prevent further input
    if (e.target.value.length >= 13) {
      e.preventDefault();
    }

    // Ensure that it is a number or a character in the allowed set and stop the keypress
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105) &&
      ![48, 57, 40, 41, 32, 45].includes(e.keyCode)
    ) {
      e.preventDefault();
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_893tntk', 'template_chty50g', form.current, 'bdTR8KebrEf9NhuG3')
      .then((result) => {
          console.log(result.text);
          
          form.current.reset();
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
              <a href="tel:+639396672655">+63 939 667 2655</a>
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
            <a href="https://github.com/GumapacJ">
            <i>
            <FaGithub/>
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
        <form ref={form}  onSubmit={sendEmail} action="" method="POST">
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
                <input type="tel"  required autoComplete="off" name="user_phone" onKeyDown={handleKeyDown}  pattern="\+639[0-9]*"  maxLength={13}  title="Please enter a valid phone number starting with +639"/>
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="form-group">
                <textarea id="myTextarea" name="message"  required className="form-control"></textarea>
                <label htmlFor="myTextarea">Write a message</label>
              </div>
            </div>
            <button type="submit"  className="submit-button" value="Send" ><p className="text">Send message</p></button>
          
        </div>
        </form>
        
      </div>
    </section>
  );
}

export default Contact