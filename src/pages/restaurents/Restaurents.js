import React from "react";
import RestaurentItemCart from "./rest-components/RestaurentItemCart";
import RestaurentItemNav from "./rest-components/RestaurentItemNav";
import RestaurentItems from "./rest-components/RestaurentItems";
import "./Restaurents.css";
import RestHead from "./RestHead";

const Restaurents = () => {
  return (
    <div>
      <RestHead />
      <div className="Restaurent-parts">
        <div className="Restaurent-part1">
          <RestaurentItemNav />
        </div>
        <div className="Restaurent-part2">
          <RestaurentItems />
        </div>
        <div className="Restaurent-part3">
          <RestaurentItemCart />
        </div>
      </div>
    </div>
  );
};

export default Restaurents;
