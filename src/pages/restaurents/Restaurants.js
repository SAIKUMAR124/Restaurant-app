import React from "react";
import RestaurantItemCart from "./rest-components/RestaurantItemCart";
import RestaurantItemNav from "./rest-components/RestaurantItemNav";
import RestaurantItems from "./rest-components/RestaurantItems";
import "./Restaurants.css";
import RestHead from "./RestHead";

const Restaurants = () => {
  return (
    <div style={{position: 'relative'}}>
      <RestHead />
      <div className="Restaurant-parts">
        <div className="Restaurant-part1">
          <RestaurantItemNav />
        </div>
        <div className="Restaurant-part2">
          <RestaurantItems />
        </div>
        <div className="Restaurant-part3">
          <RestaurantItemCart />
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
