import React from "react";
import People1 from "./img/people/1.png";
import People2 from "./img/people/2.png";
import People3 from "./img/people/3.png";

function Contact() {
  return (
    <div>
      <section className="page-header about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>
      <section className="contact-details section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <p>56 Glassford Street Glasgow G1 1UL New York</p>
            </li>
            <li>
              <p>odufuwadavid@gmail.com</p>
            </li>
            <li>
              <p>odufuwadavid@gmail.com</p>
            </li>
            <li>
              <p>Moday to Saturday: 9:00am to 16:00pm</p>
            </li>
          </div>
        </div>

        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.465068964002!2d3.3859724736880943!3d6.588969693404677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92f2b00857dd%3A0x12af314f1147775b!2sThe%20Apostolic%20Church%2C%20LAWNA%20Territorial%20Headquarters!5e0!3m2!1sen!2sng!4v1682811225928!5m2!1sen!2sng" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <section className="form-details">
        <form>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          />
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src={People1} />
            <p>
              <span>John Doe</span> Senior Marketing Manager <br /> Phone: 234
              813 1508 654 <br /> E-mail: odufuwadavid@gmail.com
            </p>
          </div>
          <div>
            <img src={People2} />
            <p>
              <span>WIlliam Smith</span> Senior Marketing Manager <br /> Phone: 234
              813 1508 654 <br /> E-mail: odufuwadavid@gmail.com
            </p>
          </div>
          <div>
            <img src={People3} />
            <p>
              <span>Emma stone</span> Senior Marketing Manager <br /> Phone: 234
              813 1508 654 <br /> E-mail: odufuwadavid@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
