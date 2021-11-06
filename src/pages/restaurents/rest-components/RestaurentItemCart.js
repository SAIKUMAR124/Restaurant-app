import React, { useEffect } from "react";
import { useGlobalLoginContext } from "../../../context/LoginContext";
import "./RestaurentItemCart.css";

const RestaurentItemCart = () => {
  const { cartItems, onAdd, onRemove, clearData } = useGlobalLoginContext();

  console.log(cartItems);

  useEffect(() => {
    clearData();
  }, []);

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
                  <div className="cart-price-btn">
                    <button
                      className="cart-item-remove"
                      onClick={() => onRemove(items)}
                    >
                      -
                    </button>
                    <div className="cart-item-qty">{items.qty}</div>
                    <button
                      className="cart-item-add"
                      onClick={() => onAdd(items)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-price">{items.price}</div>
              </div>
            );
          })}
          </div>
          <div className="cart-middle-container">
            <div>Subtotal</div>
            <div>price</div>
          </div>
          <div className="cart-extra">Extra charges may apply</div>

          <button className="cart-checkout">CHECKOUT</button>
        </div>
      ) : (
        <h1>Empty Cart</h1>
      )}
    </aside>
  );
};

export default RestaurentItemCart;
