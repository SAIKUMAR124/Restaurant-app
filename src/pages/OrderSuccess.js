import React from "react";
import { useGlobalLoginContext } from "../context/LoginContext";

const OrderSuccess = () => {
  const { address } = useGlobalLoginContext();
  const { doorNo, lankMark, village, pinCode } = address;

  return (
    <div className="success-con">
      <h1>Your order is Successfully placed.</h1>
      <br />
      <hr />
      <h3 className="success-ord-add">
        Order will be delivered to the Address below..
      </h3>
      <div className="success-address">
        <div className="success-add-container">
          <div>
            <h2>Door No : </h2>
            <h2>Landmark : </h2>
            <h2>Village : </h2>
            <h2>Pincode : </h2>
          </div>
          <div>
            <h2>{doorNo}</h2>
            <h2>{lankMark}</h2>
            <h2>{village}</h2>
            <h2>{pinCode}</h2>
          </div>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default OrderSuccess;
