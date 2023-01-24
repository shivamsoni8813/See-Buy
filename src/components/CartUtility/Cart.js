import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cart }) {

  const [CART, setCART] = useState([]);
  const [count, setcount] = useState(0);
  const [price, setprice] = useState(0);

  // making copy of cart by setCART

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  let cancelFunc = (id)=>{
    let filterCart = CART.filter((e)=>{
      return e.id !== id
    })
    setCART(filterCart)
  }

  return (
    <div>
      <div className="container-cart">
        <div className="row cart-row">
          {CART.map((element) => (
            <div className="container overflow-hidden my-3" key={element.id}>
              <div className="row gx-5">
                <div className="col">
                  <div className="allCartDetail">
                    <div className="cart-wrapper">
                      <img src={element.images} alt="" />
                      <span>{element.title}</span>
                      <div className="count-container">
                        <span>
                          <button
                            style={{ borderRadius: "10px" }}
                            onClick={() => {
                              let cartItem = CART.map((e) => {
                                return element.id === e.id
                                  ? { ...e, quantity: e.quantity + 1 }
                                  : e;
                              });
                              setCART(cartItem);
                            }}
                          >
                            <i className=" plus fa-solid fa-plus"></i>
                          </button>
                        </span>
                        <span className="quantity">{element.quantity}</span>
                        <span>
                          <button style={{ borderRadius: "10px" }}>
                            <i
                              className="minus fa-solid fa-minus"
                              onClick={() => {
                              
                                  
                                  let minusclick = CART.map((e) => {
                                     return e.id === element.id
                                       ? { ...e, quantity: e.quantity > 0 ? e.quantity-1 : 0}
                                       : e;
                                   });
                                   setCART(minusclick);
                                 }}
                                
                            ></i>
                          </button>
                        </span>
                      </div>

                      <span>
                        <i className="fa-solid fa-dollar-sign"></i>
                        {element.quantity* element.price}
                      </span>

                      <span>
                        <button style={{ borderRadius: "10px" }}>
                          <i onClick={()=>cancelFunc(element.id)} className="fa-solid fa-xmark"></i>
                        </button>
                      </span>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="checkout">
            <div className="CheckOut-Wrapper">

            <div className="total-price">Total Amount: <i className="fa-solid fa-dollar-sign"></i>{CART.map((e)=> e.price * e.quantity).reduce((acc,cur)=> acc+cur,0)}</div>
            <button className="btn btn-success"><Link to='/checkoutDetails' className="checklink">CheckOut</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
