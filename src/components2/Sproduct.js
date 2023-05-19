import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Api from './Api'
// import shirt1 from "./img/products/f1.jpg";
// import shirt2 from "./img/products/f2.jpg";
// import shirt3 from "./img/products/f3.jpg";
// import shirt4 from "./img/products/f4.jpg";

function Sproduct() {

 
  const{id} = useParams()
  // console.log(id)

  // Find single product
  const myApi = Api.find((oneProduct)=> oneProduct.id === Number(id))
  // console.log(myApi)


  // const [slider, setSlider] = useState(shirt1);

  // const slidejs1 =()=>{
  //   setSlider(shirt1)
  // }
  // const slidejs2 =()=>{
  //   setSlider(shirt2)
  // }
  // const slidejs3 =()=>{
  //   setSlider(shirt3)
  // }
  // const slidejs4 =()=>{
  //   setSlider(shirt4)
  // }

  return (
    <div>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={myApi.image} width="100%" id="mainimg" />
        </div>
        <div className="single-pro-details">
          <h6>Home/T-Shirt</h6>
          <h4>{myApi.title}</h4>
          <h2>${myApi.price}</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button className="normal">Add To Cart</button>
          <h4>Product Details</h4>
          <span>
            {myApi.description}
          </span>
        </div>
      </section>
      {/* <div>
        <div className="api">
          <h2>New Arrivals</h2>
          <p>Summer Collection New Modern Design</p>
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
        </div>
      </div> */}
    </div>
  );
}

export default Sproduct;
