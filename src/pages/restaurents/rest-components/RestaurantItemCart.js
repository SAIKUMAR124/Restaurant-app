import React, { useState } from "react";
import { useGlobalLoginContext } from "../../../context/LoginContext";
import QuantityButton from "./comp/QuantityButton";
import {BiRupee} from 'react-icons/bi';
import "./RestaurantItemCart.css";
import { Redirect } from "react-router";

const RestaurantItemCart = () => {
  const { cartItems } = useGlobalLoginContext();
  const [checkout, setCheckout] = useState(false);

  const itemsPrice = cartItems.reduce((a,c) => a+c.price * c.qty, 0);


  return (
    <aside className="cart-container">
      {cartItems.length > 0 ? (
        <div>
          <div>
            <div className="cart-title">Cart</div>
            <div className="cart-items-number">{cartItems.length} ITEMS</div>
          </div>
          <div className='card-items-con'>
          {cartItems.map((items, index) => {
            return (
              <div key={index} className="cart-items">
                <div className="cart-item-name">{items.item}</div>
                <div className="cart-item-container">
                    <QuantityButton items={items} />
                </div>

                <div className="cart-item-price"><span><BiRupee/>{items.qty * items.price}</span></div>
              </div>
            );
          })}
          </div>
          <div className="cart-middle-container">
            <div>Subtotal</div>
            <div className='subtotal-price'><BiRupee/>{itemsPrice}</div>
          </div>
          <div className="cart-extra">Extra charges may apply</div>

          <button className="cart-checkout" onClick={()=>setCheckout(true)}>CHECKOUT</button>
          {checkout && <Redirect to='/checkout' />}
        </div>
      ) : (
        <h1>Empty Cart</h1>
      )}
    </aside>
  );
};

export default RestaurantItemCart;
