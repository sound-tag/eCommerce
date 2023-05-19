import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Notiflix from "notiflix"
import { toast } from 'react-toastify'
import Api from './Api';

function Cart() {

    const [data, setDate] = useState(Api)

    const [subTotal, setSubTotal] = useState('')
    const myCart = useSelector(store => store)
    const totalCart = myCart.cart
    // console.log(myCart.cart.length);


    const dispatch = useDispatch()


    useEffect(()=>{
        let temp = 0;
        totalCart.forEach((item)=>{
          temp = temp + item.price * item.quantity;
        });
        setSubTotal(temp)
      }, [totalCart])

    // Create a Notiflix function called confirmDelete

    const confirmDelete = (id) => {

        Notiflix.Confirm.show(
            'Sounds Confirm',
            'Confirm Delete',
            'Delete',
            'Cancel',
            function okCb() {
                deleteItem(id)
                toast.success('Item Deleted')
            },
            function cancelCb() { },
            {
                width: '320px',
                borderRadius: '8px',
                // etc...
            },
        );
    }

    // function to delete item
    const deleteItem = (id) => {
        dispatch({ type: "DELETE_CART", payload: id })
    }






    return (
        <div>
            <section className="page-header about-header">
                <h2>#let's_talk</h2>
                <p>LEAVE A MESSAGE, We love to hear from you!</p>
            </section>


            <section className='cart section-p1'>
                <table width="100%">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Images</td>
                            <td>Product</td>
                            <td>Prices</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                            <td>Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            totalCart.length === 0 ? <h1 style={{ fontSize: '15px', color: 'red', justifyContent: 'center' }}>NO ITEM IN THE CART</h1> :


                                totalCart.map((item, index) => {

                                    //Function to Increase the quantity in the cart
                                    const quantityIncrease = (item) => {
                                        dispatch({
                                            type: "UPDATE_CART",
                                            payload: { ...item, quantity: item.quantity + 1 }
                                        })
                                    }

                                    // Function to decrease the quantity in the cart
                                    const quantityDecrease = (item) => {
                                        if (item.quantity !== 1){
                                            dispatch({
                                                type: "UPDATE_CART",
                                                payload: { ...item, quantity: item.quantity - 1 }
                                            })
                                        }
                                        
                                    }

                                    return (
                                        <tr>
                                            <td>{index + 1} </td>
                                            <td><img src={item.image} /></td>
                                            <td>{item.title.substring(0,30) + '...'}</td>
                                            <td>${item.price}</td>
                                            <td>
                                                <FaMinusCircle onClick={() => quantityDecrease(item)} style={{ fontSize: '15px', color: 'red' }} /><span style={{ fontSize: '20px' }}>{item.quantity}</span> <FaPlusCircle onClick={() => quantityIncrease(item)} style={{ fontSize: '15px', color: 'green' }} />
                                            </td>

                                            {/* <td><input type='number' value='1' /></td> */}
                                            <td>{item.price * item.quantity}</td>
                                            <td><MdDelete style={{ fontSize: '20px', color: 'red', cursor: 'pointer' }} onClick={() => confirmDelete(item)} /></td>
                                        </tr>
                                    )
                                })

                        }
                    </tbody>
                </table>
            </section>

            <section className='cart-add section-p1'>
                <div className='coupon'>
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type='text' placeholder='Enter Your Coupon' />
                        <button className='normal'>Apply</button>
                    </div>

                </div>
                <div className='subtotal'>
                    <h3>Cart Totals</h3>
                    {
                        totalCart.length === 0 ? ("") :(

                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>${subTotal}</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>${subTotal}</strong></td>
                        </tr>
                    </table>
                        )
                    }
                </div>

            </section>
        </div>
    )
}

export default Cart
