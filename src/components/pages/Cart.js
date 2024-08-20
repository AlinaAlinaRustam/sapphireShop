import React from "react";
import { useState } from "react";
const Cart = ({activecartslider}) => {
    const [quantity, setquantity] = useState(1)
    const incFun = () => {
        setquantity(quantity + 1)
    }
    const decFun = () => {
        if (quantity > 1)
        setquantity(quantity - 1)
    }
  return (
    <div>
      <div className={`cart_header ${activecartslider ? 'activecartslider' : ''}`} >
        <div className="title_cart">
          <h1>Shopping Cart</h1>
        </div>

        <div className="cart_fun">
          <div>
            <img src="./images/b4.webp" alt="" />
          </div>
          <div className="title">
            <h3>Title</h3>
            <p>price</p>
            <div className="count">
              <button className="CountBtn" onClick={decFun}>-</button>
              <p>{quantity}</p> <button className="CountBtn" onClick={incFun}>+</button>
            </div>
          </div>
        </div>
        <div className="total_cart">
          <div className="total_price">
            <h1>Sub Total:</h1>
            <p>Rs.</p>
          </div>
          <div>
            <button>View Cart</button>
          </div>
          <div>
            <button>Checkout</button>
          </div>
          <div>
            <button>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
