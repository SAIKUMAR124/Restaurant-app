import React, { useState } from "react";
import { useFormik } from "formik";
import RestaurentItemCart from "./restaurents/rest-components/RestaurentItemCart";
import "./CheckOut.css";
import { useGlobalLoginContext } from "../context/LoginContext";
import { Redirect } from "react-router";

const validate = (values) => {
  const errors = {};
  if (!values.doorNo) {
    errors.doorNo = "Required";
  } else if (values.doorNo.length > 20) {
    errors.doorNo = "Must be 20 characters or less";
  }

  if (!values.lankMark) {
    errors.lankMark = "Required";
  } else if (values.lankMark.length < 15) {
    errors.lankMark = "Must be 15 characters";
  }

  if (!values.village) {
    errors.village = "Required";
  } else if (values.village.length < 15) {
    errors.village = "Must be 15 characters";
  }

  if (!values.pinCode) {
    errors.pinCode = "Required";
  } else if (values.pinCode.length !== 6) {
    errors.pinCode = "Must be 6 characters";
  }

  return errors;
};

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
    validate,
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
          {formik.touched.doorNo && formik.errors.doorNo ? <div>{formik.errors.doorNo}</div> : null}

          <input
            type="text"
            id="lankMark"
            className="inp-field-checkout"
            placeholder="Landmark"
            {...formik.getFieldProps("lankMark")}
          />
          {formik.touched.lankMark && formik.errors.lankMark ? <div>{formik.errors.lankMark}</div> : null}

          <input
            type="text"
            id="village"
            className="inp-field-checkout"
            placeholder="Village"
            {...formik.getFieldProps("village")}
          />
          {formik.touched.village && formik.errors.village ? <div>{formik.errors.village}</div> : null}

          <input
            type="text"
            id="pinCode"
            className="inp-field-checkout"
            placeholder="Pin Code"
            {...formik.getFieldProps("pinCode")}
          />
          {formik.touched.pinCode && formik.errors.pinCode ? <div>{formik.errors.pinCode}</div> : null}

          <button className="checkout-submit" type="submit">
            Submit
          </button>
          {addressSubmit === true && formik.errors && <Redirect to="/success" />}
        </form>
      </div>
      <div className="checkout-part2">
        <RestaurentItemCart />
      </div>
    </div>
  );
};

export default CheckOut;
