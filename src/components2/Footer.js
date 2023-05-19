import React from "react";
import app from "./images/app.jpg"
import play from "./images/play.jpg"
import pay from "./images/pay.png"

function Footer() {
  return (
    <div>
      <div className="newsletter">
        <div className="news">
          <h4>Sign Up For Newsletter</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers</span>
          </p>
        </div>
        <div className="sign">
          <input type="text" placeholder="your e-mail address" />
          <button className="normal">Sign Up</button>
        </div>
        <div className="footer section-p1"></div>
      </div>
      <div className="col">
        <div className="col-sounds">
          <h1>Sounds</h1>
          <h4>Contact</h4>
          <p><strong>Address:</strong> 34 odogbolu street ketu lagos</p>
          <p><strong>Phone:</strong> +(234)8131508654, +(234)8056303543</p>
          <p><strong>Hours:</strong> 10:00 - 18:00 Mon - Sat</p>
          <div className="follow">
            <p><strong>Follow us</strong></p>
            <div className="icon">

            </div>

          </div>
        </div>
        <div className="col-about">
          <h4>About</h4>
          <p>About Us</p>
          <p>Delivery Innformation</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>Contact Us</p>
        </div>
        <div className="col-myAcc">
          <h4>My Account</h4>
          <p>View Cart</p>
          <p>My Wishlist</p>
          <p>Track My Order</p>
          <p>Help</p>
        </div>
        <div className="col-install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src={app}/>
            <img src={play}/>
          </div>
          <p>Secured Payment Gateways</p>
          <img src={pay}/>
        </div>
      </div>
        <div className="copy">
          <p>copyright 2023, Sounds-Code React eCommerce template</p>
        </div>
    </div>
  );
}

export default Footer;
