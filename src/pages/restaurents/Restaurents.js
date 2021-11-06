import React from "react";
import { useRouteMatch } from "react-router";
import { useGlobalLoginContext } from "../../context/LoginContext";
import "./Restaurents.css";
import RestHead from "./RestHead";

const Restaurents = () => {
  const { rest } = useGlobalLoginContext();
  const router = useRouteMatch();
  const dataFrom = router.params.url;

  const da = rest.map((item) => {
    if (dataFrom === item.url) {
      return item;
    }
    return undefined;
  });

  Object.keys(da).forEach(
    (key) => da[key] === undefined && delete da[key]
  );

  let d;
  for (let i = 0; i < da.length; i++) {
    if (da[i]) {
      d = da[i];
    }
  }

  const {data} = d;
  const {food} = data;

  return (
    <div>
      <RestHead />
      <div className="rest-main">
        {food.map((b, index) => {
          const { type, food_item } = b;
          const type_line = (index > 0)? 'type-underline':'';

          return (
            <div key={index}>
              <div className={type_line} ></div>
              <div className="rest-type-head">
                <h1>{type}</h1>
                <p className="rest-type-items">{food_item.length} ITEMS</p>
              </div>
              {
          
                food_item.map((a, index) => {
                const { item, price, item_info } = a;
                const l = food_item.length;
                
                const border_line = (index !== l-1)? 'food-underline': '';
                return (
                  <div key={index} className="food-info">
                    <div className="food-item-name">{item}</div>
                    <div className="food-item-price">{price}</div>
                    <div className="food-item-text">{item_info}</div>

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

export default Restaurents;
