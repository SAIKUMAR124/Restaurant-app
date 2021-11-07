import React, { useState } from "react";
import { useFormik } from "formik";
import RestaurentItemCart from "./restaurents/rest-components/RestaurentItemCart";
import "./CheckOut.css";
import { useGlobalLoginContext } from "../context/LoginContext";
import { Redirect } from "react-router";

const CheckOut = () => {
  const { handleAddress } = useGlobalLoginContext();
    const [addressSubmit, setAddressSubmit] = useState(false);

  const formik = useFormik({
    initialValues: {
      doorNo: "",
      lankMark: "",
      village: "",
      pinCode: "",
    },
    onSubmit: (values) => {
      const newItems = {
        doorNo: values.doorNo,
        lankMark: values.lankMark,
        village: values.village,
        pinCode: values.pinCode,
      };
      handleAddress(newItems);
      setAddressSubmit(true);
    },
  });

  return (
    <div className="checkout-container">
      <div className="checkout-part1">
        <h1>Address</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            id="doorNo"
            className="inp-field-checkout"
            placeholder="Door No.."
            {...formik.getFieldProps("doorNo")}
          />
          <input
            type="text"
            id="lankMark"
            className="inp-field-checkout"
            placeholder="Landmark"
            {...formik.getFieldProps("lankMark")}
          />
          <input
            type="text"
            id="village"
            className="inp-field-checkout"
            placeholder="Village"
            {...formik.getFieldProps("village")}
          />
          <input
            type="text"
            id="pinCode"
            className="inp-field-checkout"
            placeholder="Pin Code"
            {...formik.getFieldProps("pinCode")}
          />
          <button className="checkout-submit" type="submit">
            Submit
          </button>
          {addressSubmit===true && <Redirect to='/success' />}
        </form>
      </div>
      <div className="checkout-part2">
        <RestaurentItemCart />
      </div>
    </div>
  );
};

export default CheckOut;
