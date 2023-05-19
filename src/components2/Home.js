import React from "react";
import f1 from "./images/f1.png";
import f2 from "./images/f2.1.png";
import f3 from "./images/f3.png";
import f4 from "./images/f4.1.png";
import f5 from "./images/f5.png";
import f6 from "./images/f6.png";
import shirt1 from "./images/f4.jpg";
import shirt2 from "./images/f2.jpg";
import shirt3 from "./images/f3.1.jpg";
import shirt4 from "./images/f1.jpg";

function Home() {
  return (
    <div >
      <section data-aos='zoom-in' className="hero">
          <h5>Trade-in-offer</h5>
          <h1>
            Super value deals <br /> <span> On all our products </span>
          </h1>
          <p>Save more with coupons & 70% off</p>
          <button>Shop Now</button>
      </section>
      <div data-aos='zoom-in' className="attr">
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

      <div data-aos='zoom-in'  >
        <div className="product">
          <h1>Featured Products</h1>
          <p>Summer Collection New Mordern Design</p>
        </div>
        <div className="gallery">
          <div className="content">
            <img src={shirt1} />
            <p>addidas </p>
            <h3>Cartoon T-Shirts</h3>
            <h6>$40.00</h6>
            <button>Buy Now</button>
          </div>
          <div className="content">
            <img src={shirt2} />
            <p>addidas </p>
            <h3>earphone</h3>
            <h6>$40.00</h6>
            <button>Buy Now</button>
          </div>
          <div className="content">
            <img src={shirt3} />
            <p>addidas </p>
            <h3>earphone</h3>
            <h6>$40.00</h6>
            <button>Buy Now</button>
          </div>
          <div className="content">
            <img src={shirt4} />
            <p>addidas </p>
            <h3>earphone</h3>
            <h6>$40.00</h6>
            <button>Buy Now</button>
          </div>
          <div className="content">
            <img src={shirt1} />
            <p>addidas </p>
            <h3>Cartoon T-Shirts</h3>
            <h6>$40.00</h6>
            <button>Buy Now</button>
          </div>
          <div className="content">
            <img src={shirt2} />
            <p>addidas </p>
            <h3>earphone</h3>
            <h6>$40.00</h6>
            <button>Buy Now</button>
          </div>
          <div className="content">
            <img src={shirt3} />
            <p>addidas </p>
            <h3>earphone</h3>
            <h6>$40.00</h6>
            <button>Buy Now</button>
          </div>
          <div className="content">
            <img src={shirt4} />
            <p>addidas </p>
            <h3>earphone</h3>
            <h6>$40.00</h6>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <div data-aos='zoom-in'  className="repair">
        <div className="service">
          <small>Repair Services</small>
          <h1>
            Up to <span>70% Off </span>- All t-Shirts & Accessories
          </h1>
          <button className="normal">Explore More</button>
        </div>
      </div>
      <div>
        <div data-aos='zoom-in'  className="api">
          <h2>New Arrivals</h2>
          <p>Summer Collection New Modern Design</p>
        </div>
        <div data-aos='zoom-in' >
          <div className="gallery">
            <div className="content">
              <img src={shirt1} />
              <p>addidas </p>
              <h3>Cartoon T-Shirts</h3>
              <h6>$40.00</h6>
              <button>Buy Now</button>
            </div>
            <div className="content">
              <img src={shirt2} />
              <p>addidas </p>
              <h3>earphone</h3>
              <h6>$40.00</h6>
              <button>Buy Now</button>
            </div>
            <div className="content">
              <img src={shirt3} />
              <p>addidas </p>
              <h3>earphone</h3>
              <h6>$40.00</h6>
              <button>Buy Now</button>
            </div>
            <div className="content">
              <img src={shirt4} />
              <p>addidas </p>
              <h3>earphone</h3>
              <h6>$40.00</h6>
              <button>Buy Now</button>
            </div>
            <div className="content">
              <img src={shirt1} />
              <p>addidas </p>
              <h3>Cartoon T-Shirts</h3>
              <h6>$40.00</h6>
              <button>Buy Now</button>
            </div>
            <div className="content">
              <img src={shirt2} />
              <p>addidas </p>
              <h3>earphone</h3>
              <h6>$40.00</h6>
              <button>Buy Now</button>
            </div>
            <div className="content">
              <img src={shirt3} />
              <p>addidas </p>
              <h3>earphone</h3>
              <h6>$40.00</h6>
              <button>Buy Now</button>
            </div>
            <div className="content">
              <img src={shirt4} />
              <p>addidas </p>
              <h3>earphone</h3>
              <h6>$40.00</h6>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos='zoom-in'  className="section section-p1">
        <div className="deals">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at care</span>
          <button className="more"> Learn More</button>
        </div>
        <div className="deals deals2">
          <h4>spring/summer</h4>
          <h2>upcoming season</h2> 
          <span>The best classic dress is on sale at care</span>
          <button className="more"> Learn More</button>
        </div>
      </div> 
      <div data-aos='zoom-in'  className="banner">
        <div className="dea">
          <h2>SEASONAL SALE</h2>
          <h3>Winter collection -50% off</h3>
        </div>
        <div className="dea dea2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring/Summer 2023</h3>
        </div>
        <div className="dea dea3">
          <h2>T-SHIRTS</h2>
          <h3>New trendy prints</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
