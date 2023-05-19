import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';




function By({ item }) {


  // console.log(data)
  const myCart = useSelector(store => store)
  const totalCart = myCart.cart
console.log(item)
  // console.log(totalCart.length);
  const dispatch = useDispatch()


  // add an event to the Buy Now in order to add to cart
  const addToCart = () => {
    dispatch({ type: 'ADD_CART', payload: { ...item, quantity: 1 } })

  }
  console.log(totalCart);
  // Using find method to disable the button after being clicked
  const disableBtn = totalCart.find((i) => i.id === item.id)
  // console.log(item)

  return (
    <div>

      <div className="">
        <div className="link">
          <Link to={`/shop/${item.id}`} >
            <img src={item.image} alt={item.title.substring(0, 30)} />
            <p>{item.title.substring(0, 30) + '...'} </p>
            <h3>{item.description.substring(0, 20) + "..."}</h3>
            <h6>${item.price}</h6>
          </Link>
          {disableBtn ? (<button disabled onClick={addToCart}>Buy Now</button>) : (<button onClick={addToCart}>Buy Now</button>)}
        </div>

      </div>



    </div>
  );
}


export default By;
