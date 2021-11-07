import React from "react";
import { useGlobalLoginContext } from "../../../context/LoginContext";
import { RestRetriveData } from "./RestRetriveData";

const RestaurentItems = () => {
  const { onAdd, cartItems } = useGlobalLoginContext();
  const d = RestRetriveData();
  const { data } = d;
  const { food } = data;

  return (
    <div>
      <div className="rest-main">
        {food.map((b, index) => {
          const { type, food_item } = b;
          const type_line = index > 0 ? "type-underline" : "";

          return (
            <div key={index}>
              <div className={type_line}></div>
              <div className="rest-type-head">
                <h1>{type}</h1>
                <p className="rest-type-items">{food_item.length} ITEMS</p>
              </div>
              {food_item.map((items, index) => {
                const { item, price, item_info } = items;
                const l = food_item.length;

                const border_line = index !== l - 1 ? "food-underline" : "";
                return (
                  <div
                    key={index}
                    className="food-info"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ width: "80%" }}>
                        <div className="food-item-name">{item}</div>
                        <div className="food-item-price">{price}</div>
                        <div className="food-item-text">{item_info}</div>
                      </div>
                      <div
                        style={{
                          width: "20%",
                          alignSelf: "center",
                          textAlign: "center",
                        }}
                        className="food-item-btn-container"
                      >
                        <button
                          onClick={() => onAdd(items)}
                          style={{
                            padding: "5px 10px",
                            color: "white",
                            backgroundColor: "green",
                            border: "none",
                            fontWeight: "bold",
                          }}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div className={border_line}></div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentItems;
