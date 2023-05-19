import React from "react";
import about from "./img/about/a6.jpg";
import Video from "./img/about/1.mp4";
import f1 from "./images/f1.png";
import f2 from "./images/f2.1.png";
import f3 from "./images/f3.png";
import f4 from "./images/f4.1.png";
import f5 from "./images/f5.png";
import f6 from "./images/f6.png";

function About() {
  return (
    <div>
      <section className="page-header about-header">
        <h2>#KnowUs</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <section className="section-p1 about-head">
        <img src={about} />
        <div>
          <h2>Who We Are</h2>
          <p>
            Kickstarter man braid godard coloring bppk, Raclette waistcoat
            selfies yr wolf chartreuse hexagon irony, goadard Kickstarter man
            braid godard coloring bppk, Raclette waistcoat selfies yr wolf
            chartreuse hexagon irony, goadard Kickstarter man braid godard
            coloring bppk, Raclette waistcoat selfies yr wolf chartreuse hexagon
            irony, goadard Kickstarter man braid
          </p>

          <abbr title="">
            Create stunning images with as such or as little control as you like
            thanks to a choice of Basic and Creative modes.
          </abbr>

          <br />
          <br />

          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Create stunning images with as such or as little control as you like
            thanks to a choice of Basic and Creative modes.
          </marquee>
        </div>
      </section>

      <section className="about-app sectionp1">
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <div className="video">
          <video autoPlay muted loop src={Video}></video>
        </div>
      </section>
      <div className="attr">
        <div className="obj">
          <img src={f1} />
          <h6>Online Order</h6>
        </div>
        <div className="obj">
          <img src={f2} />
          <h6>Free Shipping</h6>
        </div>
        <div className="obj">
          <img src={f3} />
          <h6>Save Money</h6>
        </div>
        <div className="obj">
          <img src={f4} />
          <h6>Promotions</h6>
        </div>
        <div className="obj">
          <img src={f5} />
          <h6>Happy Sell</h6>
        </div>
        <div className="obj">
          <img src={f6} />
          <h6>24/7 Support</h6>
        </div>
      </div>
    </div>
  );
}

export default About;
