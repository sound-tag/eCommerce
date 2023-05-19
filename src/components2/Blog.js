import React from "react";
import blog1 from './img/blog/b1.jpg'
import blog2 from './img/blog/b2.jpg'
import blog3 from './img/blog/b3.jpg'
import blog4 from './img/blog/b4.jpg'
import blog5 from './img/blog/b5.jpg'

function Blog() {
  return (
    <div>
      <section className="page-header blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>
      <section className="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog1} />
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-Up Hoodies</h4>
            <p>
              Kickstarter man braid godard coloring bppk, Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, goadard...
            </p>
            <button>CONTINUE READING</button>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog2} />
          </div>
          <div className="blog-details">
            <h4>How to style a Quiff</h4>
            <p>
              Kickstarter man braid godard coloring bppk, Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, goadard...
            </p>
            <button>CONTINUE READING</button>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog3} />
          </div>
          <div className="blog-details">
            <h4>Must-Have Skater Girl Items</h4>
            <p>
              Kickstarter man braid godard coloring bppk, Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, goadard...
            </p>
            <button>CONTINUE READING</button>
          </div>
          <h1>12/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog4} />
          </div>
          <div className="blog-details">
            <h4>Runway-Inspired Trends</h4>
            <p>
              Kickstarter man braid godard coloring bppk, Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, goadard...
            </p>
            <button>CONTINUE READING</button>
          </div>
          <h1>16/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={blog5} />
          </div>
          <div className="blog-details">
            <h4>AW20 Menswear Trends</h4>
            <p>
              Kickstarter man braid godard coloring bppk, Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, goadard...
            </p>
            <button>CONTINUE READING</button>
          </div>
          <h1>10/03</h1>
        </div>
      </section>
    </div>
  );
}

export default Blog;
